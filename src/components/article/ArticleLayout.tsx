import type { ReactNode } from "react";

import type { ArticleSummary } from "@/lib/content/types";

import { ArticleHeader } from "./ArticleHeader";
import { ArticleNavigation } from "./ArticleNavigation";
import { TableOfContents } from "./TableOfContents";

type ArticleLayoutProps = {
  article: ArticleSummary;
  children: ReactNode;
};

export function ArticleLayout({ article, children }: ArticleLayoutProps) {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <article className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <ArticleHeader article={article} />
        <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:py-16">
          <div className="min-w-0">
            <div className="article-prose max-w-3xl">{children}</div>
            <ArticleNavigation />
          </div>
          <TableOfContents />
        </div>
      </article>
    </main>
  );
}
