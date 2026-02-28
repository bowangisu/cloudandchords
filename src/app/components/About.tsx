import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";
import ui from "../i18n/ui";

export function About() {
  const { lang } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[0.75rem] tracking-[0.3em] uppercase text-muted-foreground/50 mb-6">
          {ui.about.label[lang]}
        </p>

        <h1 className="font-['Cormorant_Garamond',serif] text-[2rem] md:text-[2.5rem] text-foreground/95 leading-tight mb-12">
          {ui.about.title[lang]}
        </h1>
      </motion.div>

      <div className="space-y-10">
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-[0.9375rem] text-muted-foreground/80 leading-[1.8]">
            {ui.about.section1[lang]}
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-[0.9375rem] text-muted-foreground/80 leading-[1.8]">
            {ui.about.section2[lang]}{" "}
            <span className="text-foreground/90 italic font-['Cormorant_Garamond',serif]">
              {ui.about.section2Highlight[lang]}
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
            {ui.about.whyAiMusic[lang]}
          </h2>
          <p className="text-[0.9375rem] text-muted-foreground/80 leading-[1.8]">
            {ui.about.section3a[lang]}
          </p>
          <p className="text-[0.9375rem] text-muted-foreground/80 leading-[1.8] mt-4">
            {ui.about.section3b[lang]}
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
            {ui.about.whyPublish[lang]}
          </h2>
          <p className="text-[0.9375rem] text-muted-foreground/80 leading-[1.8]">
            {ui.about.section4[lang]}
          </p>
          <p className="text-[0.9375rem] text-foreground/60 leading-[1.8] mt-4 italic font-['Cormorant_Garamond',serif] text-center">
            {ui.about.section4Quote[lang]}
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
            {ui.about.noteTitle[lang]}
          </h2>
          <p className="text-[0.9375rem] text-muted-foreground/70 leading-[1.8] italic font-['Cormorant_Garamond',serif]">
            {ui.about.section5[lang]}
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
