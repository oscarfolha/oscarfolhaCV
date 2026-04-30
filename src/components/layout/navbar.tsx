"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/use-active-section";
import { sectionIds } from "@/utils/portfolio";
import { siteConfig } from "@/utils/site-config";
import { cn } from "@/utils/cn";

export function Navbar() {
  const t = useTranslations("Nav");
  const activeSection = useActiveSection(sectionIds);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 mx-auto w-full px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/58 px-3 py-2 shadow-2xl backdrop-blur-xl light:border-slate-900/10 light:bg-white/76">
        <a className="flex items-center gap-3 rounded-full px-3 py-2 text-sm font-semibold tracking-[0.08em] text-foreground" href="#home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-300/14 text-sm text-sky-100 light:bg-sky-200/20 light:text-sky-950">OF</span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {sectionIds.map((sectionId) => (
            <a
              className={cn(
                "rounded-full px-4 py-2 text-sm transition",
                activeSection === sectionId
                  ? "bg-white/10 text-foreground light:bg-slate-900/8"
                  : "text-muted hover:bg-white/6 hover:text-foreground light:hover:bg-slate-900/5",
              )}
              href={`#${sectionId}`}
              key={sectionId}
            >
              {t(sectionId)}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        <button
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition hover:bg-white/10 lg:hidden light:border-slate-900/10 light:bg-slate-900/4"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          type="button"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-3 w-full max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/86 p-4 shadow-2xl backdrop-blur-xl light:border-slate-900/10 light:bg-white/92 lg:hidden"
            exit={{ opacity: 0, y: -8 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <nav className="grid gap-2">
              {sectionIds.map((sectionId) => (
                <a
                  className="rounded-2xl px-4 py-3 text-sm text-foreground transition hover:bg-white/6 light:hover:bg-slate-900/5"
                  href={`#${sectionId}`}
                  key={sectionId}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(sectionId)}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
