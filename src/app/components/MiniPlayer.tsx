import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, X, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { usePlayer } from "./PlayerContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MiniPlayer() {
  const {
    currentSong,
    isPlaying,
    progress,
    currentSeconds,
    totalSeconds,
    togglePlay,
    seekTo,
    stop,
  } = usePlayer();
  const [isMuted, setIsMuted] = useState(false);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    seekTo(percentage);
  };

  return (
    <AnimatePresence>
      {currentSong && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border"
        >
          {/* Progress bar at top of mini player */}
          <div
            className="h-1 bg-foreground/5 cursor-pointer group"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-gradient-to-r from-foreground/30 to-foreground/60 transition-all duration-300 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 flex items-center gap-3 md:gap-5">
            {/* Cover art */}
            <Link
              to={`/song/${currentSong.id}`}
              className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden"
            >
              <ImageWithFallback
                src={currentSong.coverImage}
                alt={currentSong.title}
                className="w-full h-full object-cover"
              />
            </Link>

            {/* Song info */}
            <Link
              to={`/song/${currentSong.id}`}
              className="flex-1 min-w-0"
            >
              <p className="text-[0.8125rem] text-foreground/90 truncate font-['Cormorant_Garamond',serif]">
                {currentSong.title}
              </p>
              <p className="text-[0.6875rem] text-muted-foreground/50 truncate">
                {currentSong.subtitle}
              </p>
            </Link>

            {/* Time */}
            <span className="hidden sm:block text-[0.6875rem] text-muted-foreground/40 tabular-nums flex-shrink-0">
              {formatTime(currentSeconds)} / {currentSong.duration}
            </span>

            {/* Controls */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="hidden sm:flex text-muted-foreground/50 hover:text-foreground transition-colors p-1.5"
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>

              <button
                onClick={togglePlay}
                className="w-9 h-9 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause size={14} className="text-foreground" />
                ) : (
                  <Play size={14} className="text-foreground ml-0.5" />
                )}
              </button>

              <button
                onClick={stop}
                className="text-muted-foreground/40 hover:text-foreground transition-colors p-1.5"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          <p className="text-center text-[0.5625rem] text-muted-foreground/25 pb-2 font-['Cormorant_Garamond',serif] italic">
            Demo playback — full audio coming soon
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
