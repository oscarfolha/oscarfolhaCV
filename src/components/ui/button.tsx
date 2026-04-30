import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/cn";

type SharedProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "sm";
  variant?: "primary" | "secondary" | "ghost";
};

type ButtonAsAnchor = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonAsButton = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

export function buttonStyles({ className, size = "default", variant = "primary" }: Omit<SharedProps, "children">) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-semibold tracking-[0.02em] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80 disabled:pointer-events-none disabled:opacity-60",
    size === "default" ? "h-12 px-5" : "h-10 px-4 text-sm",
    variant === "primary" && "border-sky-300/30 bg-sky-300/12 text-white hover:border-sky-200/50 hover:bg-sky-300/18 hover:shadow-lg hover:shadow-sky-500/20 dark:text-white light:border-sky-300/50 light:bg-sky-300/25 light:text-sky-950 light:hover:bg-sky-300/35",
    variant === "secondary" && "border-white/12 bg-white/6 text-foreground hover:bg-white/10 hover:shadow-md hover:shadow-white/10 light:border-slate-900/10 light:bg-slate-900/4 light:hover:bg-slate-900/8",
    variant === "ghost" && "border-transparent bg-transparent text-muted hover:border-white/10 hover:bg-white/6 hover:text-foreground light:hover:border-slate-900/8 light:hover:bg-slate-900/5",
    className,
  );
}

export function Button(props: ButtonAsAnchor | ButtonAsButton) {
  const { children, className, size, variant } = props;
  const styles = buttonStyles({ className, size, variant });

  if ("href" in props && props.href) {
    const {
      children: _children,
      className: _className,
      size: _size,
      variant: _variant,
      href,
      ...anchorProps
    } = props;

    // Open external links in new tab
    const isExternal = href.startsWith("http");
    const linkProps = isExternal 
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <a className={styles} href={href} {...linkProps} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    children: _children,
    className: _className,
    size: _size,
    variant: _variant,
    ...buttonProps
  } = props as ButtonAsButton;

  return (
    <button className={styles} {...buttonProps}>
      {children}
    </button>
  );
}
