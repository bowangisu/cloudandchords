import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Share2, Clock } from "lucide-react";
import { useState } from "react";
import { getPostById } from "../data/posts";

const categoryAccents: Record<string, string> = {
  ai: "text-blue-300/70",
  meaning: "text-amber-300/70",
  identity: "text-emerald-300/70",
  fatherhood: "text-rose-300/70",
  creativity: "text-purple-300/70",
};

export function BlogPostPage() {
  const { id } = useParams();
  const post = getPostById(id || "");
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Post not found.</p>
          <Link
            to="/blog"
            className="text-foreground/70 hover:text-foreground transition-colors text-[0.875rem]"
          >
            &larr; Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Split content into paragraphs
  const paragraphs = post.content.split("\n\n");

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 md:py-12">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[0.8125rem] text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to blog
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <span
          className={`text-[0.625rem] uppercase tracking-[0.2em] ${
            categoryAccents[post.category] || "text-muted-foreground/60"
          }`}
        >
          {post.category}
        </span>

        <h1 className="font-['Cormorant_Garamond',serif] text-[2rem] md:text-[2.75rem] text-foreground/95 leading-tight mt-3 mb-2">
          {post.title}
        </h1>

        <p className="text-[1.0625rem] text-muted-foreground/50 italic font-['Cormorant_Garamond',serif] mb-6">
          {post.subtitle}
        </p>

        <div className="flex items-center gap-5 text-[0.75rem] text-muted-foreground/40">
          <span>{post.date}</span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            {post.readTime} read
          </span>
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 hover:text-foreground/60 transition-colors"
          >
            <Share2 size={12} />
            {copied ? "Copied!" : "Share"}
          </button>
        </div>
      </motion.header>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent mb-10 origin-left"
      />

      {/* Content */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="space-y-6"
      >
        {paragraphs.map((paragraph, i) => {
          // First paragraph gets special styling
          if (i === 0) {
            return (
              <p
                key={i}
                className="text-[1.0625rem] text-foreground/70 leading-[1.9] font-['Cormorant_Garamond',serif] italic"
              >
                {paragraph}
              </p>
            );
          }

          return (
            <p
              key={i}
              className="text-[0.9375rem] text-muted-foreground/75 leading-[1.85]"
            >
              {paragraph}
            </p>
          );
        })}
      </motion.article>

      {/* End mark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-14 mb-4 flex items-center justify-center gap-3"
      >
        <div className="w-8 h-px bg-foreground/10" />
        <span className="text-[0.6875rem] text-muted-foreground/30 tracking-widest font-['Cormorant_Garamond',serif] italic">
          fin
        </span>
        <div className="w-8 h-px bg-foreground/10" />
      </motion.div>

      {/* Author sign-off */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-center mt-8 mb-4"
      >
        <p className="text-[0.75rem] text-muted-foreground/30">
          — Bo
        </p>
      </motion.div>

      {/* Decorative end */}
      <div className="flex justify-center mt-8">
        <div className="w-px h-16 bg-gradient-to-b from-foreground/10 via-foreground/5 to-transparent" />
      </div>
    </div>
  );
}
