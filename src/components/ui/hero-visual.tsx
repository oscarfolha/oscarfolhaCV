"use client";

import { motion } from "framer-motion";

const floatingBadges = [
  { label: "React", className: "left-0 top-12" },
  { label: "TypeScript", className: "right-8 top-0" },
  { label: "GraphQL", className: "left-8 bottom-12" },
  { label: "DevOps", className: "right-0 bottom-4" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-xl items-center justify-center">
      <motion.div
        animate={{ rotate: [0, 1.4, 0], y: [0, -10, 0] }}
        className="hero-glow absolute inset-x-14 top-10 h-56 rounded-full bg-sky-400/20 blur-3xl"
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        animate={{ rotate: [0, -2, 0], y: [0, 14, 0] }}
        className="hero-glow-delayed absolute bottom-8 left-8 h-44 w-44 rounded-full bg-orange-300/15 blur-3xl"
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <div className="panel relative w-full overflow-hidden rounded-[2.4rem] p-6 sm:p-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/40 to-transparent" />
        <div className="relative z-10 space-y-6">
          <div className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 light:border-slate-900/10 light:bg-slate-900/4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-sky-200/80 light:text-sky-950">Engineering Focus</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Products that feel fast, clear, and resilient</p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-300/14 text-sky-100 light:bg-sky-200/20 light:text-sky-950">
              <span className="text-xl font-semibold">01</span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 light:border-slate-900/10 light:bg-slate-900/4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Delivery</p>
              <p className="mt-3 text-2xl font-semibold text-foreground">Production-ready</p>
              <p className="mt-2 text-sm leading-7 text-muted">From interface design to API contracts and deployment hygiene.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 light:border-slate-900/10 light:bg-slate-900/4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Approach</p>
              <p className="mt-3 text-2xl font-semibold text-foreground">Human-centered</p>
              <p className="mt-2 text-sm leading-7 text-muted">Strong technical judgment paired with calm collaboration.</p>
            </div>
          </div>
        </div>
        {floatingBadges.map((badge, index) => (
          <motion.div
            animate={{ y: [0, -8, 0] }}
            className={`absolute ${badge.className} rounded-full border border-white/12 bg-slate-950/60 px-3 py-2 text-xs font-medium text-slate-100 shadow-lg backdrop-blur-xl light:border-slate-300/40 light:bg-white/90 light:text-slate-900`}
            key={badge.label}
            transition={{ delay: index * 0.35, duration: 4 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            {badge.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
