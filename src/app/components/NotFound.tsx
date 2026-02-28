import { Link } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";
import ui from "../i18n/ui";

export function NotFound() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-[0.75rem] tracking-[0.3em] uppercase text-muted-foreground/40 mb-4">
          404
        </p>
        <h1 className="font-['Cormorant_Garamond',serif] text-[1.75rem] text-foreground/80 mb-3">
          {ui.notFound.title[lang]}
        </h1>
        <p className="text-[0.875rem] text-muted-foreground/50 mb-8">
          {ui.notFound.subtitle[lang]}
        </p>
        <Link
          to="/"
          className="text-[0.75rem] tracking-wider uppercase text-foreground/60 border border-foreground/15 px-5 py-2.5 rounded-full hover:border-foreground/30 hover:text-foreground/80 transition-all"
        >
          {ui.notFound.back[lang]}
        </Link>
      </div>
    </div>
  );
}
