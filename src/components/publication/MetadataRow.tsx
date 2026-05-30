import * as React from "react";

import { cn } from "@/lib/utils";

export type MetadataRowProps = React.ComponentProps<"div"> & {
  author: string;
  date: string;
  readingTime: string;
  tags?: string[];
};

export function MetadataRow({
  author,
  date,
  readingTime,
  tags = [],
  className,
  ...props
}: MetadataRowProps) {
  return (
    <div
      data-slot="metadata-row"
      className={cn(
        "flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] leading-5 text-zinc-500 dark:text-zinc-500",
        className,
      )}
      {...props}
    >
      <span className="text-zinc-400 dark:text-zinc-400">{author}</span>
      <span aria-hidden="true" className="text-zinc-700">
        /
      </span>
      <time>{date}</time>
      <span aria-hidden="true" className="text-zinc-700">
        /
      </span>
      <span>{readingTime}</span>
      {tags.length > 0 ? (
        <>
          <span aria-hidden="true" className="hidden text-zinc-700 sm:inline">
            /
          </span>
          <span className="hidden min-w-0 flex-wrap gap-1 sm:flex">
            {tags.map((tag) => (
              <span key={tag} className="text-zinc-400">
                #{tag}
              </span>
            ))}
          </span>
        </>
      ) : null}
    </div>
  );
}
