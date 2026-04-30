import { BookOpenText, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";
import { experienceItems } from "@/utils/portfolio";

const timelineIcons = {
  bachelors: BookOpenText,
  masters: GraduationCap,
  msglife: BriefcaseBusiness,
} as const;

export async function ExperienceSection() {
  const t = await getTranslations("Experience");

  return (
    <SectionShell id="experience">
      <SectionHeading description={t("description")} eyebrow={t("eyebrow")} title={t("title")} />
      <div className="mt-14 space-y-6">
        {experienceItems.map((itemKey, index) => {
          const Icon = timelineIcons[itemKey];
          const points = t.raw(`items.${itemKey}.points`) as string[];

          return (
            <Reveal delay={index * 0.08} key={itemKey}>
              <SurfaceCard className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[5rem_minmax(0,1fr)] lg:items-start">
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.6rem] bg-sky-300/12 text-sky-100 light:bg-sky-200/20 light:text-sky-950">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-muted light:border-slate-900/10 light:bg-slate-900/4">
                      {t(`items.${itemKey}.period`)}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold text-foreground">{t(`items.${itemKey}.title`)}</h3>
                    <p className="mt-2 text-base text-sky-100/80 light:text-sky-950">{t(`items.${itemKey}.company`)}</p>
                  </div>
                  <div>
                    <p className="text-base leading-8 text-muted">{t(`items.${itemKey}.summary`)}</p>
                    <ul className="mt-5 grid gap-3 text-sm leading-7 text-foreground/90">
                      {points.map((point) => (
                        <li className="flex gap-3" key={point}>
                          <span className="mt-2 h-2 w-2 rounded-full bg-sky-300/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SurfaceCard>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
