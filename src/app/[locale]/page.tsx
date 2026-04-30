import { setRequestLocale } from "next-intl/server";

import { PageTransition } from "@/components/ui/page-transition";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { ExperienceSection } from "@/sections/experience-section";
import { GallerySection } from "@/sections/gallery-section";
import { HeroSection } from "@/sections/hero-section";
import { ProjectsSection } from "@/sections/projects-section";

export default async function LocalePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageTransition>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <GallerySection />
      <ContactSection />
    </PageTransition>
  );
}
