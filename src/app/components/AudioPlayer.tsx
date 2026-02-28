import { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  title: string;
  duration: string;
}

export function AudioPlayer({ title, duration }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Parse duration string to seconds
  const totalSeconds = (() => {
    const parts = duration.split(":");
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
  })();

  const currentSeconds = Math.floor((progress / 100) * totalSeconds);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isPlaying) {
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
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, totalSeconds]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setProgress(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="bg-card/50 border border-border rounded-2xl p-6">
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-all duration-300 group"
        >
          {isPlaying ? (
            <Pause size={18} className="text-foreground" />
          ) : (
            <Play
              size={18}
              className="text-foreground ml-0.5"
            />
          )}
        </button>

        <div className="flex-1">
          <p className="text-[0.8125rem] text-muted-foreground mb-2">
            Now playing — <span className="text-foreground/80">{title}</span>
          </p>

          {/* Progress bar */}
          <div
            className="h-1.5 bg-foreground/10 rounded-full cursor-pointer group"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-gradient-to-r from-foreground/40 to-foreground/70 rounded-full transition-all duration-300 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="flex justify-between mt-1.5">
            <span className="text-[0.6875rem] text-muted-foreground/60">
              {formatTime(currentSeconds)}
            </span>
            <span className="text-[0.6875rem] text-muted-foreground/60">
              {duration}
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      <p className="text-[0.6875rem] text-muted-foreground/40 text-center italic font-['Cormorant_Garamond',serif]">
        Demo playback — full audio coming soon
      </p>
    </div>
  );
}
