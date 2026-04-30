import {
  Boxes,
  Code2,
  Database,
  Globe2,
  Layers3,
  MonitorCog,
  Network,
  ServerCog,
  SquareTerminal,
  Workflow,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";
import { siteConfig } from "@/utils/site-config";

const skillIcons = {
  fullStack: Layers3,
  english: Globe2,
  typescript: Code2,
  react: SquareTerminal,
  java: Boxes,
  graphql: Network,
  docker: Workflow,
  databases: Database,
  softwareDesign: MonitorCog,
  devops: ServerCog,
} as const;

export async function AboutSection() {
  const t = await getTranslations("About");

  return (
    <SectionShell id="about">
      <SectionHeading description={t("description")} eyebrow={t("eyebrow")} title={t("title")} />
      <div className="mt-14 grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <Reveal>
          <SurfaceCard className="p-8 sm:p-10">
            <p className="font-serif text-2xl italic tracking-tight text-sky-100/90 light:text-slate-800 sm:text-3xl">“{t("quote")}”</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 light:border-slate-900/10 light:bg-slate-900/4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{t("details.location")}</p>
                <p className="mt-3 text-lg font-semibold text-foreground">{siteConfig.location}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 light:border-slate-900/10 light:bg-slate-900/4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{t("details.birthday")}</p>
                <p className="mt-3 text-lg font-semibold text-foreground">{siteConfig.birthday}</p>
              </div>
            </div>
            <div className="mt-4 rounded-[1.6rem] border border-white/10 bg-white/5 p-5 light:border-slate-900/10 light:bg-slate-900/4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">{t("details.education")}</p>
              <p className="mt-3 text-lg font-semibold text-foreground">{t("educationDegrees")}</p>
              <p className="mt-2 text-sm leading-7 text-muted">{t("educationInstitution")}</p>
            </div>
          </SurfaceCard>
        </Reveal>
        <Reveal delay={0.08}>
          <SurfaceCard className="p-8 sm:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{t("skillsEyebrow")}</p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">{t("skillsTitle")}</h3>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {Object.entries(skillIcons).map(([skillKey, Icon]) => (
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition hover:-translate-y-0.5 hover:bg-white/8 light:border-slate-900/10 light:bg-slate-900/4" key={skillKey}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-300/12 text-sky-100 light:bg-sky-200/20 light:text-sky-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-base font-semibold text-foreground">{t(`skills.${skillKey}`)}</p>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </Reveal>
      </div>
    </SectionShell>
  );
}
