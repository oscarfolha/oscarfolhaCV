export const sectionIds = ["home", "about", "experience", "projects", "gallery", "contact"] as const;

export type SectionId = (typeof sectionIds)[number];

export const experienceItems = ["msglife", "masters", "bachelors"] as const;
