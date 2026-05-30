import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/article/ArticleLayout";
import { MDXContent } from "@/components/article/MDXContent";
import { getAllSlugs } from "@/lib/content/getAllSlugs";
import { getArticleBySlug } from "@/lib/content/getArticleBySlug";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout article={article}>
      <MDXContent source={article.content} />
    </ArticleLayout>
  );
}
