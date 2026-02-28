import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { Song } from "../data/songs";

interface PlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number;
  currentSeconds: number;
  totalSeconds: number;
  isMuted: boolean;
  playSong: (song: Song) => void;
  togglePlay: () => void;
  seekTo: (percentage: number) => void;
  stop: () => void;
  toggleMute: () => void;
}

const PlayerContext = createContext<PlayerContextType | null>(null);

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
}

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create a persistent audio element
  useEffect(() => {
    const audio = new Audio();
    audio.preload = "metadata";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Sync mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Update progress from audio timeupdate
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      if (audio.duration && isFinite(audio.duration)) {
        setCurrentSeconds(Math.floor(audio.currentTime));
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const onLoadedMetadata = () => {
      if (audio.duration && isFinite(audio.duration)) {
        setTotalSeconds(Math.floor(audio.duration));
      }
    };

    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentSeconds(0);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const playSong = useCallback(
    (song: Song) => {
      const audio = audioRef.current;
      if (!audio) return;

      if (currentSong?.id === song.id) {
        // Toggle if same song
        if (isPlaying) {
          audio.pause();
          setIsPlaying(false);
        } else {
          audio.play();
          setIsPlaying(true);
        }
      } else {
        // New song
        setCurrentSong(song);
        setProgress(0);
        setCurrentSeconds(0);
        if (song.audioFile) {
          audio.src = song.audioFile;
          audio.load();
          audio.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            // Autoplay may be blocked by browser
            setIsPlaying(false);
          });
        }
      }
    },
    [currentSong, isPlaying]
  );

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !currentSong) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, [isPlaying, currentSong]);

  const seekTo = useCallback((percentage: number) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration || !isFinite(audio.duration)) return;
    const clamped = Math.max(0, Math.min(100, percentage));
    audio.currentTime = (clamped / 100) * audio.duration;
    setProgress(clamped);
    setCurrentSeconds(Math.floor(audio.currentTime));
  }, []);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.src = "";
    }
    setIsPlaying(false);
    setCurrentSong(null);
    setProgress(0);
    setCurrentSeconds(0);
    setTotalSeconds(0);
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        progress,
        currentSeconds,
        totalSeconds,
        isMuted,
        playSong,
        togglePlay,
        seekTo,
        stop,
        toggleMute,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
