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

interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number;
  currentSeconds: number;
  totalSeconds: number;
}

interface PlayerContextType extends PlayerState {
  playSong: (song: Song) => void;
  togglePlay: () => void;
  seekTo: (percentage: number) => void;
  stop: () => void;
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
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const parseDuration = (duration: string) => {
    const parts = duration.split(":");
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
  };

  const totalSeconds = currentSong ? parseDuration(currentSong.duration) : 0;
  const currentSeconds = Math.floor((progress / 100) * totalSeconds);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const playSong = useCallback(
    (song: Song) => {
      if (currentSong?.id === song.id) {
        // Toggle if same song
        setIsPlaying((prev) => !prev);
      } else {
        // New song
        clearTimer();
        setCurrentSong(song);
        setProgress(0);
        setIsPlaying(true);
      }
    },
    [currentSong, clearTimer]
  );

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const seekTo = useCallback((percentage: number) => {
    setProgress(Math.max(0, Math.min(100, percentage)));
  }, []);

  const stop = useCallback(() => {
    clearTimer();
    setIsPlaying(false);
    setCurrentSong(null);
    setProgress(0);
  }, [clearTimer]);

  useEffect(() => {
    if (isPlaying && totalSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 100 / totalSeconds;
        });
      }, 1000);
    } else {
      clearTimer();
    }
    return clearTimer;
  }, [isPlaying, totalSeconds, clearTimer]);

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        progress,
        currentSeconds,
        totalSeconds,
        playSong,
        togglePlay,
        seekTo,
        stop,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
