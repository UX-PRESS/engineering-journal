import * as React from "react";

import { cn } from "@/lib/utils";

export type ContributorCardProps = React.ComponentProps<"article"> & {
  name: string;
  domain: string;
  skills: string[];
  bio: string;
  initials?: string;
};

export function ContributorCard({
  name,
  domain,
  skills,
  bio,
  initials,
  className,
  ...props
}: ContributorCardProps) {
  const fallbackInitials =
    initials ??
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <article
      data-slot="contributor-card"
      className={cn(
        "rounded-lg border border-white/10 bg-zinc-950/60 p-5 transition-colors duration-200 hover:border-white/20 hover:bg-zinc-900/70",
        className,
      )}
      {...props}
    >
      <div className="flex items-start gap-4">
        <div className="grid size-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] font-mono text-xs font-medium text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          {fallbackInitials}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold leading-6 tracking-tight text-zinc-50">
            {name}
          </h3>
          <p className="font-mono text-[11px] uppercase leading-5 tracking-normal text-zinc-500">
            {domain}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-zinc-400">{bio}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[11px] leading-4 text-zinc-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
