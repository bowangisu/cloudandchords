import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { posts, postCategories, getPostsByCategory, type BlogPost } from "../data/posts";
import { useLanguage } from "../i18n/LanguageContext";
import ui from "../i18n/ui";

const categoryAccents: Record<string, string> = {
  ai: "text-blue-300/70",
  meaning: "text-amber-300/70",
  identity: "text-emerald-300/70",
  fatherhood: "text-rose-300/70",
  creativity: "text-purple-300/70",
};

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <Link
        to={`/blog/${post.id}`}
        className="group block p-6 md:p-8 rounded-xl border border-border bg-card/20 hover:bg-card/50 hover:border-foreground/12 transition-all duration-500"
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
          {/* Date column */}
          <div className="sm:w-28 flex-shrink-0">
            <p className="text-[0.75rem] text-muted-foreground/50 tracking-wider">
              {post.date}
            </p>
            <p className="text-[0.6875rem] text-muted-foreground/30 mt-0.5">
              {post.readTime[lang]} {ui.blog.readSuffix[lang]}
            </p>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <span
              className={`text-[0.625rem] uppercase tracking-[0.2em] ${
                categoryAccents[post.category] || "text-muted-foreground/60"
              }`}
            >
              {postCategories.find((c) => c.id === post.category)?.label[lang] ?? post.category}
            </span>

            <h2 className="font-['Cormorant_Garamond',serif] text-[1.375rem] text-foreground/90 mt-1.5 mb-1 group-hover:text-foreground transition-colors leading-snug">
              {post.title[lang]}
            </h2>

            <p className="text-[0.8125rem] text-muted-foreground/50 italic font-['Cormorant_Garamond',serif] mb-3">
              {post.subtitle[lang]}
            </p>

            <p className="text-[0.8125rem] text-muted-foreground/60 leading-relaxed line-clamp-2">
              {post.excerpt[lang]}
            </p>

            <span className="inline-flex items-center gap-1.5 mt-4 text-[0.75rem] text-muted-foreground/40 group-hover:text-foreground/60 transition-colors tracking-wider">
              {ui.blog.read[lang]}
              <ArrowRight
                size={12}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredPosts = getPostsByCategory(activeCategory);
  const { lang } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <p className="text-[0.75rem] tracking-[0.3em] uppercase text-muted-foreground/50 mb-6">
          {ui.blog.label[lang]}
        </p>

        <h1 className="font-['Cormorant_Garamond',serif] text-[2rem] md:text-[2.5rem] text-foreground/95 leading-tight mb-4">
          {ui.blog.title[lang]}
        </h1>

        <p className="text-[0.9375rem] text-muted-foreground/60 leading-relaxed max-w-lg">
          {ui.blog.description[lang]}
        </p>
      </motion.div>

      {/* Category filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-2 mb-10"
      >
        {postCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`text-[0.6875rem] tracking-[0.15em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
              activeCategory === cat.id
                ? "border-foreground/30 bg-foreground/10 text-foreground"
                : "border-border text-muted-foreground hover:border-foreground/20 hover:text-foreground/80"
            }`}
          >
            {cat.label[lang]}
          </button>
        ))}
      </motion.div>

      {/* Posts list */}
      <div className="space-y-4">
        {filteredPosts.map((post, i) => (
          <PostCard key={post.id} post={post} index={i} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center text-muted-foreground/50 mt-16 font-['Cormorant_Garamond',serif] italic text-[1.125rem]">
          {ui.blog.noPosts[lang]}
        </p>
      )}

      {/* Decorative end */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex justify-center mt-16"
      >
        <div className="w-px h-16 bg-gradient-to-b from-foreground/10 via-foreground/5 to-transparent" />
      </motion.div>
    </div>
  );
}
