import { useParams, Navigate, Outlet } from "react-router";
import { useEffect } from "react";
import { useLanguage, urlLangToLang } from "../i18n/LanguageContext";

const VALID_LANGS = ["en", "cn"];

export function LangLayout() {
  const { lang: urlLang } = useParams<{ lang: string }>();
  const { setLang } = useLanguage();

  const isValid = urlLang && VALID_LANGS.includes(urlLang);

  useEffect(() => {
    if (isValid && urlLang) {
      setLang(urlLangToLang(urlLang));
    }
  }, [urlLang, isValid, setLang]);

  if (!isValid) {
    return <Navigate to="/en" replace />;
  }

  return <Outlet />;
}
