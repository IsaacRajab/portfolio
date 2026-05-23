import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/components/ui/cn";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAV_LINKS } from "@/constants/skills";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(20);
  const active = useActiveSection(SECTION_IDS);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-purple-500/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a href="#" className="flex items-center gap-2 font-bold text-white" aria-label="Home">
          <Code2 className="w-5 h-5 text-purple-400" />
          <span className="text-gradient-brand font-mono">Isaac Rajab</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  active === href.slice(1)
                    ? "text-purple-300 bg-purple-500/10"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-purple-500/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-2" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      active === href.slice(1)
                        ? "text-purple-300 bg-purple-500/10"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                    )}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
