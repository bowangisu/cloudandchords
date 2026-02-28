import { useParams } from "react-router";
import { Link } from "./AppLink";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Share2,
  ChevronDown,
  ChevronUp,
  Coffee,
  Play,
  Pause,
  Headphones,
} from "lucide-react";
import { useState } from "react";
import { getSongById, categories } from "../data/songs";
import { usePlayer } from "./PlayerContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../i18n/LanguageContext";
import ui from "../i18n/ui";
import { LikeButton } from "./LikeButton";
import { useLikes } from "./LikesContext";

const categoryColors: Record<string, string> = {
  love: "bg-rose-900/30 text-rose-200/80",
  reflection: "bg-stone-800/40 text-stone-300/80",
  wuxia: "bg-amber-900/30 text-amber-200/80",
  faith: "bg-blue-900/30 text-blue-200/80",
  family: "bg-emerald-900/30 text-emerald-200/80",
  resilience: "bg-purple-900/30 text-purple-200/80",
};

export function SongPage() {
  const { id } = useParams();
  const song = getSongById(id || "");
  const [showLyrics, setShowLyrics] = useState(true);
  const [showBehind, setShowBehind] = useState(false);
  const [copied, setCopied] = useState(false);
  const { currentSong, isPlaying, progress, currentSeconds, totalSeconds, playSong, seekTo } = usePlayer();
  const { lang } = useLanguage();
  const { plays } = useLikes();

  if (!song) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">{ui.song.notFound[lang]}</p>
          <Link
            to="/"
            className="text-foreground/70 hover:text-foreground transition-colors text-[0.875rem]"
          >
            &larr; {ui.song.backToSongs[lang]}
          </Link>
        </div>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const isThisPlaying = currentSong?.id === song.id && isPlaying;
  const catLabel = categories.find((c) => c.id === song.category)?.label[lang] ?? song.category;

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[0.8125rem] text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          {ui.song.backToSongs[lang]}
        </Link>
      </motion.div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl overflow-hidden mb-8 aspect-[2/1]"
      >
        <ImageWithFallback
          src={song.coverImage}
          alt={song.title[lang]}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span
            className={`inline-block text-[0.625rem] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full mb-3 ${
              categoryColors[song.category] || "bg-stone-800/40 text-stone-300/80"
            }`}
          >
            {catLabel}
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-[2rem] md:text-[2.5rem] text-white leading-tight">
            {song.title[lang]}
          </h1>
          <p className="text-[0.9375rem] text-white/60 mt-1 italic font-['Cormorant_Garamond',serif]">
            {song.subtitle[lang]}
          </p>
        </div>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[0.9375rem] text-muted-foreground/80 leading-relaxed mb-8"
      >
        {song.description[lang]}
      </motion.p>

      {/* Play Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-8"
      >
        <div className="bg-card/50 border border-border rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => playSong(song)}
              className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-all duration-300"
            >
              {isThisPlaying ? (
                <Pause size={18} className="text-foreground" />
              ) : (
                <Play size={18} className="text-foreground ml-0.5" />
              )}
            </button>

            <div className="flex-1">
              <p className="text-[0.8125rem] text-muted-foreground mb-2">
                {isThisPlaying ? ui.song.nowPlaying[lang] : ui.song.play[lang]} —{" "}
                <span className="text-foreground/80">{song.title[lang]}</span>
              </p>

              {/* Progress bar */}
              <div
                className="h-1.5 bg-foreground/10 rounded-full cursor-pointer group"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const percentage = (x / rect.width) * 100;
                  if (!isThisPlaying && !currentSong) playSong(song);
                  seekTo(percentage);
                }}
              >
                <div
                  className="h-full bg-gradient-to-r from-foreground/40 to-foreground/70 rounded-full relative"
                  style={{ width: `${isThisPlaying ? progress : 0}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="flex justify-between mt-1.5">
                <span className="text-[0.6875rem] text-muted-foreground/60 tabular-nums">
                  {formatTime(isThisPlaying ? currentSeconds : 0)}
                </span>
                <span className="text-[0.6875rem] text-muted-foreground/60">
                  {song.duration}
                </span>
              </div>
            </div>

            {isThisPlaying && (
              <span className="flex gap-[2px]">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-[3px] bg-foreground/50 rounded-full"
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
            )}
          </div>
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center gap-3 mb-10"
      >
        <LikeButton songId={song.id} variant="page" />
        {(plays[song.id] || 0) > 0 && (
          <span className="inline-flex items-center gap-2 text-[0.75rem] tracking-wider text-muted-foreground/50 px-4 py-2.5">
            <Headphones size={13} />
            {plays[song.id]}
          </span>
        )}
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 text-[0.75rem] tracking-wider uppercase text-muted-foreground hover:text-foreground border border-border hover:border-foreground/20 px-4 py-2.5 rounded-full transition-all"
        >
          <Share2 size={13} />
          {copied ? ui.song.linkCopied[lang] : ui.song.share[lang]}
        </button>

        <a
          href="https://buymeacoffee.com/cloudandchords"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[0.75rem] tracking-wider uppercase text-muted-foreground hover:text-foreground border border-border hover:border-foreground/20 px-4 py-2.5 rounded-full transition-all"
        >
          <Coffee size={13} />
          {ui.song.support[lang]}
        </a>
      </motion.div>

      {/* Lyrics */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-8"
      >
        <button
          onClick={() => setShowLyrics(!showLyrics)}
          className="flex items-center gap-2 text-[0.8125rem] text-foreground/80 mb-4 hover:text-foreground transition-colors"
        >
          <span className="tracking-wider uppercase text-[0.75rem]">
            {ui.song.lyrics[lang]}
          </span>
          {showLyrics ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {showLyrics && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4 }}
            className="bg-card/30 border border-border rounded-xl p-6 md:p-8"
          >
            {song.originalLanguage !== lang && (
              <p className="text-[0.6875rem] text-muted-foreground/40 mb-3 italic">
                {song.originalLanguage === "zh" ? ui.song.originalZh[lang] : ui.song.originalEn[lang]}
              </p>
            )}
            <pre className="font-['Cormorant_Garamond',serif] text-[1.0625rem] text-foreground/70 leading-[1.9] whitespace-pre-wrap italic">
              {song.lyrics}
            </pre>
          </motion.div>
        )}
      </motion.div>

      {/* Behind the Song */}
      {song.behindTheSong && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <button
            onClick={() => setShowBehind(!showBehind)}
            className="flex items-center gap-2 text-[0.8125rem] text-foreground/80 mb-4 hover:text-foreground transition-colors"
          >
            <span className="tracking-wider uppercase text-[0.75rem]">
              {ui.song.behindTheSong[lang]}
            </span>
            {showBehind ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {showBehind && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.4 }}
              className="bg-card/30 border border-border rounded-xl p-6 md:p-8"
            >
              <p className="text-[0.9375rem] text-muted-foreground/80 leading-relaxed">
                {song.behindTheSong[lang]}
              </p>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Decorative divider */}
      <div className="flex justify-center my-12">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />
      </div>
    </div>
  );
}
