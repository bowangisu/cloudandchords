import { Music, User, Heart, Menu, X, PenLine } from "lucide-react";
import { useState } from "react";
import { PlayerProvider } from "./PlayerContext";
import { MiniPlayer } from "./MiniPlayer";
import { LanguageToggle } from "./LanguageToggle";
import { Link, Outlet, useLocation } from "react-router";
import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";
import ui from "../i18n/ui";

export function Layout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang } = useLanguage();

  const navLinks = [
    { to: "/", label: ui.nav.songs[lang], icon: Music },
    { to: "/blog", label: ui.nav.blog[lang], icon: PenLine },
    { to: "/about", label: ui.nav.about[lang], icon: User },
    { to: "/support", label: ui.nav.support[lang], icon: Heart },
  ];

  return (
    <PlayerProvider>
    <div className="min-h-screen bg-background text-foreground font-['Inter',sans-serif]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-['Cormorant_Garamond',serif] text-[1.25rem] tracking-wide text-foreground hover:text-foreground/80 transition-colors"
          >
            {ui.siteName[lang]}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.to === "/"
                  ? location.pathname === "/" ||
                    location.pathname.startsWith("/song")
                  : location.pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[0.8125rem] tracking-widest uppercase transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <LanguageToggle />
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              className="text-foreground p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-[0.875rem] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors flex items-center gap-3"
                >
                  <link.icon size={16} />
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main content */}
      <main className="pt-16 pb-28">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.75rem] text-muted-foreground tracking-wider">
            {ui.footer.tagline[lang]}
          </p>
          <p className="text-[0.75rem] text-muted-foreground/50 tracking-wider font-['Cormorant_Garamond',serif] italic">
            {ui.footer.subtitle[lang]}
          </p>
        </div>
      </footer>

      {/* Global Mini Player */}
      <MiniPlayer />
    </div>
    </PlayerProvider>
  );
}
