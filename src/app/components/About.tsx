import { motion } from "motion/react";

export function About() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[0.75rem] tracking-[0.3em] uppercase text-muted-foreground/50 mb-6">
          About
        </p>

        <h1 className="font-['Cormorant_Garamond',serif] text-[2rem] md:text-[2.5rem] text-foreground/95 leading-tight mb-12">
          Who I Am
        </h1>
      </motion.div>

      <div className="space-y-10">
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-[0.9375rem] text-muted-foreground/80 leading-[1.8]">
            I'm Bo. I build things in AI during the day — leading teams,
            shipping products, navigating the strange frontier of what machines
            can and cannot understand. At night, after the meetings and the
            metrics, I make music.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-[0.9375rem] text-muted-foreground/80 leading-[1.8]">
            Not the kind of music that charts or goes viral. The kind that
            happens when you sit with an AI co-writer at 2am and ask it to help
            you say something you've been carrying for months. The kind that
            exists at the intersection of{" "}
            <span className="text-foreground/90 italic font-['Cormorant_Garamond',serif]">
              technology, fatherhood, ambition, and doubt
            </span>
            .
          </p>
        </motion.section>

        {/* Divider */}
        <div className="flex justify-center py-4">
          <div className="w-12 h-px bg-foreground/10" />
        </div>

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <h2 className="font-['Cormorant_Garamond',serif] text-[1.5rem] text-foreground/90 mb-4">
            Why AI Music
          </h2>
          <p className="text-[0.9375rem] text-muted-foreground/80 leading-[1.8]">
            I'm not a trained musician. I never learned to play an instrument
            past fumbling through a few chords. But I've always had melodies in
            my head and words that needed somewhere to go. AI gave me that
            somewhere.
          </p>
          <p className="text-[0.9375rem] text-muted-foreground/80 leading-[1.8] mt-4">
            These tools don't replace artistry — they{" "}
            <span className="text-foreground/70">democratize access</span> to
            it. What I bring is the intention, the lived experience, the
            vulnerability. What AI brings is the musical canvas I never had. The
            result is something neither of us could make alone.
          </p>
        </motion.section>

        {/* Divider */}
        <div className="flex justify-center py-4">
          <div className="w-12 h-px bg-foreground/10" />
        </div>

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h2 className="font-['Cormorant_Garamond',serif] text-[1.5rem] text-foreground/90 mb-4">
            Why I Publish Publicly
          </h2>
          <p className="text-[0.9375rem] text-muted-foreground/80 leading-[1.8]">
            Because the things we make in private tend to stay unfinished.
            Because there's something honest about sharing work that isn't
            perfect. Because somewhere, someone who also builds AI by day and
            feels things deeply by night might hear one of these songs and think:{" "}
            <span className="text-foreground/80 italic font-['Cormorant_Garamond',serif]">
              "I'm not the only one."
            </span>
          </p>
        </motion.section>

        {/* Divider */}
        <div className="flex justify-center py-4">
          <div className="w-12 h-px bg-foreground/10" />
        </div>

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          <h2 className="font-['Cormorant_Garamond',serif] text-[1.5rem] text-foreground/90 mb-4">
            A Note to My Daughters
          </h2>
          <p className="text-[0.9375rem] text-muted-foreground/70 leading-[1.8] italic font-['Cormorant_Garamond',serif]">
            If you're reading this someday — hi. These songs are timestamps.
            Proof that your dad wasn't just building companies and attending
            meetings. He was also trying to make sense of the world, of himself,
            of the extraordinary luck of being your father. Every lyric is a
            small letter to the future. I hope at least one of them makes you
            smile.
          </p>
        </motion.section>

        {/* Decorative end */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex justify-center pt-8"
        >
          <div className="w-px h-16 bg-gradient-to-b from-foreground/10 via-foreground/5 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
