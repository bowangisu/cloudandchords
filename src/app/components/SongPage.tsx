import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Share2,
  Heart,
  ChevronDown,
  ChevronUp,
  Coffee,
  Play,
  Pause,
} from "lucide-react";
import { useState } from "react";
import { getSongById } from "../data/songs";
import { usePlayer } from "./PlayerContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const categoryColors: Record<string, string> = {
  leadership: "bg-amber-900/30 text-amber-200/80",
  founder: "bg-blue-900/30 text-blue-200/80",
  blues: "bg-purple-900/30 text-purple-200/80",
  reflection: "bg-stone-800/40 text-stone-300/80",
  family: "bg-rose-900/30 text-rose-200/80",
};

export function SongPage() {
  const { id } = useParams();
  const song = getSongById(id || "");
  const [showLyrics, setShowLyrics] = useState(true);
  const [showBehind, setShowBehind] = useState(false);
  const [copied, setCopied] = useState(false);
  const { currentSong, isPlaying, playSong } = usePlayer();

  if (!song) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Song not found.</p>
          <Link
            to="/"
            className="text-foreground/70 hover:text-foreground transition-colors text-[0.875rem]"
          >
            &larr; Back to songs
          </Link>
        </div>
      </div>
    );
  }

  const isThisPlaying = currentSong?.id === song.id && isPlaying;

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
          Back to songs
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
          alt={song.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span
            className={`inline-block text-[0.625rem] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full mb-3 ${
              categoryColors[song.category] || "bg-stone-800/40 text-stone-300/80"
            }`}
          >
            {song.category}
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-[2rem] md:text-[2.5rem] text-white leading-tight">
            {song.title}
          </h1>
          <p className="text-[0.9375rem] text-white/60 mt-1 italic font-['Cormorant_Garamond',serif]">
            {song.subtitle}
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
        {song.description}
      </motion.p>

      {/* Play Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-8"
      >
        <div className="bg-card/50 border border-border rounded-2xl p-6">
          <div className="flex items-center gap-4">
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
              <p className="text-[0.8125rem] text-muted-foreground">
                {isThisPlaying ? "Now playing" : "Play"} —{" "}
                <span className="text-foreground/80">{song.title}</span>
              </p>
              <p className="text-[0.6875rem] text-muted-foreground/40 mt-0.5">
                {song.duration}
              </p>
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

          <p className="text-[0.6875rem] text-muted-foreground/40 text-center italic font-['Cormorant_Garamond',serif] mt-4">
            Demo playback — full audio coming soon
          </p>
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center gap-3 mb-10"
      >
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 text-[0.75rem] tracking-wider uppercase text-muted-foreground hover:text-foreground border border-border hover:border-foreground/20 px-4 py-2.5 rounded-full transition-all"
        >
          <Share2 size={13} />
          {copied ? "Link copied!" : "Share"}
        </button>

        <a
          href="https://buymeacoffee.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[0.75rem] tracking-wider uppercase text-muted-foreground hover:text-foreground border border-border hover:border-foreground/20 px-4 py-2.5 rounded-full transition-all"
        >
          <Coffee size={13} />
          Support
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
            Lyrics
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
              Behind the Song
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
                {song.behindTheSong}
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
