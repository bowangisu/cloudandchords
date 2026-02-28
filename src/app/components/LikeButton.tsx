import { ThumbsUp } from "lucide-react";
import { useLikes } from "./LikesContext";

interface LikeButtonProps {
  songId: string;
  variant?: "card" | "page";
}

export function LikeButton({ songId, variant = "card" }: LikeButtonProps) {
  const { likes, likedSongs, likeSong } = useLikes();
  const isLiked = likedSongs.has(songId);
  const count = likes[songId] || 0;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isLiked) likeSong(songId);
  };

  if (variant === "page") {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center gap-2 text-[0.75rem] tracking-wider uppercase border px-4 py-2.5 rounded-full transition-all ${
          isLiked
            ? "text-foreground border-foreground/30 bg-foreground/10"
            : "text-muted-foreground hover:text-foreground border-border hover:border-foreground/20"
        }`}
      >
        <ThumbsUp size={13} className={isLiked ? "fill-current" : ""} />
        {count > 0 && count}
      </button>
    );
  }

  // Card variant
  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-1 rounded-full backdrop-blur-sm px-2 py-1 transition-all ${
        isLiked
          ? "bg-white/25 text-white"
          : "bg-black/40 text-white/70 hover:text-white hover:bg-black/60"
      } opacity-0 group-hover:opacity-100`}
    >
      <ThumbsUp size={11} className={isLiked ? "fill-current" : ""} />
      {count > 0 && (
        <span className="text-[0.625rem] tabular-nums">{count}</span>
      )}
    </button>
  );
}
