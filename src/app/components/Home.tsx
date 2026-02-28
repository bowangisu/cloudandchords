import { useState } from "react";
import { motion } from "motion/react";
import { songs, categories, getSongsByCategory } from "../data/songs";
import { SongCard } from "./SongCard";

export function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSongs = getSongsByCategory(activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-900/20 via-transparent to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[0.75rem] tracking-[0.3em] uppercase text-muted-foreground/60 mb-6"
          >
            Bo Wang — AI Songs & Reflections
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-['Cormorant_Garamond',serif] text-[2.5rem] md:text-[3.5rem] leading-[1.15] text-foreground/95 mb-6"
          >
            Songs written between
            <br />
            <span className="italic text-foreground/60">
              code and quiet nights.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[0.9375rem] text-muted-foreground/70 max-w-xl mx-auto leading-relaxed"
          >
            AI-assisted music exploring ambition, doubt, love, and becoming.
            <br className="hidden sm:block" />
            A personal creative home at the intersection of technology and
            tenderness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Song Grid */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-[0.6875rem] tracking-[0.15em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "border-foreground/30 bg-foreground/10 text-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/20 hover:text-foreground/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSongs.map((song, i) => (
            <SongCard key={song.id} song={song} index={i} />
          ))}
        </div>

        {filteredSongs.length === 0 && (
          <p className="text-center text-muted-foreground/50 mt-12 font-['Cormorant_Garamond',serif] italic text-[1.125rem]">
            No songs in this category yet.
          </p>
        )}
      </section>

      {/* Disclaimer */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="border-t border-border pt-10">
          <p className="text-[0.6875rem] tracking-wider uppercase text-muted-foreground/40 mb-3">
            Usage & Rights
          </p>
          <p className="text-[0.8125rem] text-muted-foreground/50 leading-relaxed">
            All songs, lyrics, and original content on this site are created by Bo Wang and are protected under applicable copyright laws. You are welcome to listen, share, and enjoy this music for personal, non-commercial purposes. If you wish to use any material for commercial purposes — including but not limited to licensing, sampling, redistribution, synchronization, or public performance — please contact me in advance to obtain written permission. Unauthorized commercial use is prohibited. By accessing this site, you acknowledge and agree to these terms.
          </p>
          <p className="text-[0.8125rem] text-muted-foreground/40 mt-3 italic font-['Cormorant_Garamond',serif]">
            For inquiries, reach out via the Support page or email directly.
          </p>
        </div>
      </section>
    </div>
  );
}