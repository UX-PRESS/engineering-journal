import Link from "next/link";

import { ArticleMetadata } from "@/components/article/ArticleMetadata";
import { ArticleTags } from "@/components/article/ArticleTags";
import { getArticles } from "@/lib/content/getArticles";
import type { ArticleCollection, ArticleSummary } from "@/lib/content/types";

type ArticlesPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

const pageTitleByCategory: Partial<Record<ArticleCollection, string>> = {
  incidents: "Incidents",
  engineering: "Engineering",
  security: "Security",
  labs: "Labs",
  research: "Research",
  "post-mortems": "Post-mortems",
};

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const { category } = (await searchParams) ?? {};
  const articles = getArticles();
  const filteredArticles = category
    ? articles.filter((article) => article.collection === category)
    : articles;
  const pageTitle =
    pageTitleByCategory[category as ArticleCollection] ?? "Articles";

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Publication
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl">
            {pageTitle}
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Field notes, system writeups, defensive research, lab reports, and
            operational reviews from the engineering publication.
          </p>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredArticles.map((article) => (
              <ArticleListCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-md border border-white/10 bg-white/[0.02] p-8">
            <h2 className="text-xl font-semibold text-zinc-100">
              No articles yet
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
              Add a non-template MDX file under `src/content` to publish the
              first article in this view.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

function ArticleListCard({ article }: { article: ArticleSummary }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex min-h-80 flex-col justify-between rounded-md border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
    >
      <div>
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            {article.category}
          </span>
          <span className="text-xs text-zinc-500">{article.readingTime}</span>
        </div>
        <h2 className="text-2xl font-semibold leading-tight text-zinc-50 group-hover:text-white">
          {article.title}
        </h2>
        <p className="mt-4 line-clamp-4 text-sm leading-6 text-zinc-400">
          {article.description}
        </p>
      </div>
      <div className="mt-8 space-y-5">
        <ArticleMetadata
          author={article.author}
          category={article.collection}
          date={article.date}
          readingTime={article.readingTime}
          status={article.status}
        />
        <ArticleTags tags={article.tags} />
      </div>
    </Link>
  );
}
