import type { ReactNode } from "react";

import type { ArticleSummary } from "@/lib/content/getArticles";

import { ArticleHeader } from "./ArticleHeader";
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
            <nav
              className="mt-16 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2"
              aria-label="Article navigation"
            >
              <div className="border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Previous
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Previous article placeholder
                </p>
              </div>
              <div className="border border-white/10 p-4 sm:text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Next
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Next article placeholder
                </p>
              </div>
            </nav>
          </div>
          <TableOfContents />
        </div>
      </article>
    </main>
  );
}
