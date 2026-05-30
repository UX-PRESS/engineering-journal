import Link from "next/link";

import { ArticleMetadata } from "@/components/article/ArticleMetadata";
import { ArticleTags } from "@/components/article/ArticleTags";
import { getArticles } from "@/lib/content/getArticles";
import type { ArticleCollection, ArticleSummary } from "@/lib/content/types";

const sections: Array<{
  label: string;
  collection: ArticleCollection;
  description: string;
}> = [
  {
    label: "Incidents",
    collection: "incidents",
    description: "Operational notes, service impact, and recovery analysis.",
  },
  {
    label: "Engineering",
    collection: "engineering",
    description: "Architecture, implementation notes, and product systems.",
  },
  {
    label: "Security",
    collection: "security",
    description: "Authorized labs, defensive analysis, and ethical research.",
  },
  {
    label: "Labs",
    collection: "labs",
    description: "Controlled experiments, prototypes, and benchmark notes.",
  },
  {
    label: "Research",
    collection: "research",
    description: "Applied research, measurements, and technical hypotheses.",
  },
];

export default function Home() {
  const articles = getArticles();
  const featuredArticle = articles[0];
  const secondaryArticles = articles.slice(1, 4);

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Engineering Publication
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-zinc-50 sm:text-6xl lg:text-7xl">
            Field notes for systems, operations, and defensive engineering.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A local-first engineering journal for architecture writeups,
            incident reviews, authorized security research, and lab notes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/articles"
              className="rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white"
            >
              Read articles
            </Link>
            {featuredArticle ? (
              <Link
                href={`/articles/${featuredArticle.slug}`}
                className="rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
              >
                Latest note
              </Link>
            ) : null}
          </div>
        </div>

        <div className="border-l border-white/10 pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Current Focus
          </p>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            Practical writing with clear context, measured claims, and enough
            technical detail to be useful without exposing sensitive systems.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-10 sm:px-8 md:grid-cols-2 lg:grid-cols-5">
          {sections.map((section) => (
            <Link
              key={section.collection}
              href={`/articles?category=${section.collection}`}
              className="rounded-md border border-white/10 bg-black/40 p-4 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
            >
              <h2 className="text-sm font-semibold text-zinc-100">
                {section.label}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div>
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Latest
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-50">
                Recent articles
              </h2>
            </div>
            <Link
              href="/articles"
              className="hidden text-sm text-zinc-400 transition-colors hover:text-zinc-50 sm:block"
            >
              View all
            </Link>
          </div>

          {featuredArticle ? (
            <FeaturedArticle article={featuredArticle} />
          ) : (
            <div className="rounded-md border border-white/10 bg-white/[0.02] p-8">
              <h3 className="text-xl font-semibold text-zinc-100">
                No articles published yet
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Add a non-template MDX file under `src/content` to populate the
                publication.
              </p>
            </div>
          )}
        </div>

        <aside>
          <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            More notes
          </h2>
          <div className="mt-5 space-y-4">
            {secondaryArticles.length > 0 ? (
              secondaryArticles.map((article) => (
                <CompactArticle key={article.slug} article={article} />
              ))
            ) : (
              <p className="text-sm leading-6 text-zinc-500">
                Additional articles will appear here as the content library
                grows.
              </p>
            )}
          </div>
        </aside>
      </section>

      <section
        id="about"
        className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24"
      >
        <div className="max-w-3xl border-t border-white/10 pt-10">
          <h2 className="text-2xl font-semibold text-zinc-50">About</h2>
          <p className="mt-4 text-base leading-8 text-zinc-400">
            Engineering Journal is a file-based publication surface for
            practical technical writing. Articles live as local MDX files, are
            reviewed like code, and stay close to the systems they describe.
          </p>
        </div>
      </section>
    </main>
  );
}

function FeaturedArticle({ article }: { article: ArticleSummary }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block rounded-md border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          {article.category}
        </span>
        <span className="text-xs text-zinc-500">{article.readingTime}</span>
      </div>
      <h3 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight text-zinc-50 group-hover:text-white sm:text-4xl">
        {article.title}
      </h3>
      <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
        {article.description}
      </p>
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

function CompactArticle({ article }: { article: ArticleSummary }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block rounded-md border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
    >
      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
        {article.category}
      </p>
      <h3 className="mt-3 text-base font-semibold leading-6 text-zinc-100">
        {article.title}
      </h3>
      <p className="mt-2 text-sm text-zinc-500">{article.date}</p>
    </Link>
  );
}
