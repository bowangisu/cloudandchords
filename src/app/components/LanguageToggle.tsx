import { useNavigate, useLocation, useParams } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";

export function LanguageToggle() {
  const { lang } = useLanguage();
  const { lang: urlLang } = useParams<{ lang: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggle = () => {
    const currentPrefix = `/${urlLang}`;
    const newPrefix = urlLang === "en" ? "/cn" : "/en";
    const newPath = location.pathname.replace(currentPrefix, newPrefix);
    navigate(newPath);
  };

  return (
    <button
      onClick={handleToggle}
      className="text-[0.75rem] tracking-wider text-muted-foreground hover:text-foreground border border-border hover:border-foreground/20 px-3 py-1.5 rounded-full transition-all duration-300"
      aria-label={lang === "en" ? "Switch to Chinese" : "切换到英文"}
    >
      {lang === "en" ? "中文" : "EN"}
    </button>
  );
}
