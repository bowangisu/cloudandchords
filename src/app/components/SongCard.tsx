import { Link } from "react-router";
import { motion } from "motion/react";
import { Play, Pause, Share2, Check } from "lucide-react";
import { useState } from "react";
import type { Song } from "../data/songs";
import { categories } from "../data/songs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { usePlayer } from "./PlayerContext";
import { useLanguage } from "../i18n/LanguageContext";

interface SongCardProps {
  song: Song;
  index: number;
}

const categoryColors: Record<string, string> = {
  love: "bg-rose-900/30 text-rose-200/80",
  reflection: "bg-stone-800/40 text-stone-300/80",
  wuxia: "bg-amber-900/30 text-amber-200/80",
  faith: "bg-blue-900/30 text-blue-200/80",
  family: "bg-emerald-900/30 text-emerald-200/80",
  resilience: "bg-purple-900/30 text-purple-200/80",
};

export function SongCard({ song, index }: SongCardProps) {
  const { currentSong, isPlaying, playSong } = usePlayer();
  const { lang } = useLanguage();
  const isCurrentSong = currentSong?.id === song.id;
  const isThisPlaying = isCurrentSong && isPlaying;
  const catLabel = categories.find((c) => c.id === song.category)?.label[lang] ?? song.category;

  const [copied, setCopied] = useState(false);

  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    playSong(song);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/song/${song.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={`/song/${song.id}`}
        className="group block relative overflow-hidden rounded-xl border border-border bg-card hover:border-foreground/20 transition-all duration-500"
      >
        {/* Cover image */}
        <div className="aspect-square overflow-hidden relative">
          <ImageWithFallback
            src={song.coverImage}
            alt={song.title[lang]}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Play button overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              isThisPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <button
              onClick={handlePlay}
              className={`w-14 h-14 rounded-full backdrop-blur-md flex items-center justify-center border transition-all duration-300 hover:scale-110 active:scale-95 ${
                isThisPlaying
                  ? "bg-white/20 border-white/30"
                  : "bg-white/10 border-white/20 hover:bg-white/20"
              }`}
            >
              {isThisPlaying ? (
                <Pause size={20} className="text-white" />
              ) : (
                <Play size={20} className="text-white ml-0.5" />
              )}
            </button>
          </div>

          {/* Currently playing indicator */}
          {isThisPlaying && (
            <div className="absolute bottom-3 right-3 flex items-center gap-1">
              <span className="flex gap-[2px]">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-[3px] bg-white/80 rounded-full"
                    animate={{
                      height: [4, 12, 6, 14, 4],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </span>
            </div>
          )}

          {/* Duration badge & share button */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            <button
              onClick={handleShare}
              className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100"
            >
              {copied ? <Check size={13} /> : <Share2 size={13} />}
            </button>
            <span className="text-[0.6875rem] text-white/70 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
              {song.duration}
            </span>
          </div>

          {/* Category badge */}
          <span
            className={`absolute bottom-3 left-3 text-[0.625rem] uppercase tracking-widest px-2 py-0.5 rounded-full ${
              categoryColors[song.category] || "bg-stone-800/40 text-stone-300/80"
            }`}
          >
            {catLabel}
          </span>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-[0.9375rem] text-foreground mb-0.5 group-hover:text-foreground/90 transition-colors font-['Cormorant_Garamond',serif]">
            {song.title[lang]}
          </h3>
          <p className="text-[0.75rem] text-muted-foreground/70 italic">
            {song.subtitle[lang]}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
