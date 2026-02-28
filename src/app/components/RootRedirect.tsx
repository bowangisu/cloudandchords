import { Navigate } from "react-router";

export function RootRedirect() {
  const saved = localStorage.getItem("bc2c-lang");
  const urlLang = saved === "zh" ? "cn" : "en";
  return <Navigate to={`/${urlLang}`} replace />;
}
