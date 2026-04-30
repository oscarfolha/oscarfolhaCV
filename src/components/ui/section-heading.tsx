import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: Readonly<SectionHeadingProps>) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200/90 light:border-sky-300/20 light:bg-sky-200/10 light:text-sky-950">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted sm:mt-5 sm:leading-8 sm:text-lg">{description}</p>
    </div>
  );
}
