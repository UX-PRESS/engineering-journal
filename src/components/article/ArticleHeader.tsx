import type { ArticleSummary } from "@/lib/content/types";

import { ArticleMetadata } from "./ArticleMetadata";
import { ArticleTags } from "./ArticleTags";

type ArticleHeaderProps = {
  article: ArticleSummary;
};

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="border-b border-white/10 pb-10 pt-16 sm:pt-24">
      <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
        <span>{article.collection.replace("-", " ")}</span>
        <span className="h-px w-10 bg-zinc-700" />
      </div>
      <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl lg:text-6xl">
        {article.title}
      </h1>
      {article.description ? (
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
          {article.description}
        </p>
      ) : null}
      <div className="mt-8 space-y-5">
        <ArticleMetadata
          author={article.author}
          category={article.category}
          date={article.date}
          readingTime={article.readingTime}
          status={article.status}
        />
        <ArticleTags tags={article.tags} />
      </div>
    </header>
  );
}
