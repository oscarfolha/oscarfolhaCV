import { ArrowUpRight, Code2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";

export async function ProjectsSection() {
  const t = await getTranslations("Projects");

  return (
    <SectionShell id="projects">
      <SectionHeading description={t("description")} eyebrow={t("eyebrow")} title={t("title")} />
      <Reveal delay={0.08} className="mt-14">
        <SurfaceCard className="relative overflow-hidden p-8 sm:p-12">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-br from-sky-500/15 via-sky-400/10 to-transparent" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300/12 text-sky-100 light:bg-sky-200/20 light:text-sky-950">
                  <Code2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">GitHub</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">github.com/oscarfolha</p>
                </div>
              </div>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted/90">
                Explore my open-source projects, contributions, and engineering work. From full-stack applications to DevOps tools and product engineering challenges.
              </p>
            </div>
            <Button className="w-full lg:w-auto" href="https://github.com/oscarfolha?tab=repositories" variant="primary">
              {t("cta")}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </SurfaceCard>
      </Reveal>
    </SectionShell>
  );
}
