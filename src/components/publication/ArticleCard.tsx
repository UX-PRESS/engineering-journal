import * as React from "react";

import { cn } from "@/lib/utils";
import { Badge, type PublicationBadgeVariant } from "./Badge";
import { MetadataRow } from "./MetadataRow";

const categoryVariants: Record<string, PublicationBadgeVariant> = {
  INCIDENT: "incident",
  ENGINEERING: "engineering",
  SECURITY: "security",
  LABS: "labs",
  RESEARCH: "research",
  "POST-MORTEM": "post-mortem",
};

export type ArticleCardProps = React.ComponentProps<"article"> & {
  title: string;
  category: string;
  description: string;
  tags: string[];
  date: string;
  author: string;
  readingTime?: string;
  status?: string;
  severity?: string;
};

export function ArticleCard({
  title,
  category,
  description,
  tags,
  date,
  author,
  readingTime = "6 min read",
  status,
  severity,
  className,
  ...props
}: ArticleCardProps) {
  const categoryVariant = categoryVariants[category] ?? "engineering";

  return (
    <article
      data-slot="article-card"
      className={cn(
        "group relative flex min-h-[280px] flex-col overflow-hidden rounded-lg border border-white/10 bg-zinc-950/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors duration-200 hover:border-white/20 hover:bg-zinc-900/80",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100",
        className,
      )}
      {...props}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Badge variant={categoryVariant}>{category}</Badge>
        <div className="flex flex-wrap justify-end gap-2">
          {severity ? <Badge variant="incident">{severity}</Badge> : null}
          {status ? <Badge variant="post-mortem">{status}</Badge> : null}
        </div>
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="text-xl font-semibold leading-7 tracking-tight text-zinc-50 transition-colors group-hover:text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[11px] leading-4 text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <MetadataRow
          author={author}
          date={date}
          readingTime={readingTime}
          tags={tags}
        />
      </div>
    </article>
  );
}
