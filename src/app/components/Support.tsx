import { motion } from "motion/react";
import { Coffee, Heart, Download, Sparkles } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import ui from "../i18n/ui";

export function Support() {
  const { lang } = useLanguage();

  const supportOptions = [
    {
      icon: Coffee,
      title: ui.support.coffee[lang],
      description: ui.support.coffeeDesc[lang],
      action: ui.support.coffeeAction[lang],
      href: "https://buymeacoffee.com",
    },
    {
      icon: Download,
      title: ui.support.download[lang],
      description: ui.support.downloadDesc[lang],
      action: ui.support.downloadAction[lang],
      href: "#",
    },
    {
      icon: Heart,
      title: ui.support.payWhat[lang],
      description: ui.support.payWhatDesc[lang],
      action: ui.support.payWhatAction[lang],
      href: "#",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[0.75rem] tracking-[0.3em] uppercase text-muted-foreground/50 mb-6">
          {ui.support.label[lang]}
        </p>

        <h1 className="font-['Cormorant_Garamond',serif] text-[2rem] md:text-[2.5rem] text-foreground/95 leading-tight mb-4">
          {ui.support.title[lang]}
        </h1>

        <p className="text-[0.9375rem] text-muted-foreground/70 leading-relaxed mb-12 max-w-lg">
          {ui.support.description[lang]}
        </p>
      </motion.div>

      <div className="space-y-4">
        {supportOptions.map((option, i) => (
          <motion.a
            key={i}
            href={option.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            className="block group p-6 rounded-xl border border-border bg-card/30 hover:border-foreground/15 hover:bg-card/60 transition-all duration-500"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0 group-hover:bg-foreground/10 transition-colors">
                <option.icon
                  size={18}
                  className="text-muted-foreground group-hover:text-foreground/80 transition-colors"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[0.9375rem] text-foreground/90 mb-1">
                  {option.title}
                </h3>
                <p className="text-[0.8125rem] text-muted-foreground/60 mb-3">
                  {option.description}
                </p>
                <span className="inline-block text-[0.75rem] tracking-wider uppercase text-foreground/60 border border-foreground/15 px-3 py-1.5 rounded-full group-hover:border-foreground/25 group-hover:text-foreground/80 transition-all">
                  {option.action}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Personal note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="flex justify-center mb-6">
          <Sparkles size={16} className="text-muted-foreground/30" />
        </div>
        <p className="text-[0.875rem] text-muted-foreground/50 leading-relaxed italic font-['Cormorant_Garamond',serif] max-w-md mx-auto">
          {ui.support.personalNote[lang]}
        </p>
        <p className="text-[0.75rem] text-muted-foreground/30 mt-3">
          — Bo
        </p>
      </motion.div>

      {/* Decorative end */}
      <div className="flex justify-center mt-12">
        <div className="w-px h-16 bg-gradient-to-b from-foreground/10 via-foreground/5 to-transparent" />
      </div>
    </div>
  );
}
