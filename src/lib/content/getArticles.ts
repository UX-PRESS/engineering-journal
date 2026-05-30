import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");
const CONTENT_FOLDERS = [
  "incidents",
  "engineering",
  "security",
  "labs",
  "research",
  "post-mortems",
] as const;

export type ArticleFrontmatter = {
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  category: string;
  status: string;
};

export type ArticleSummary = ArticleFrontmatter & {
  slug: string;
  collection: (typeof CONTENT_FOLDERS)[number];
  filePath: string;
};

export type Article = ArticleSummary & {
  content: string;
};

type RawFrontmatter = Partial<Record<keyof ArticleFrontmatter, unknown>>;

function readArticleFile(filePath: string): Article {
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const frontmatter = normalizeFrontmatter(data as RawFrontmatter);
  const collection = path.basename(path.dirname(filePath)) as ArticleSummary["collection"];
  const slug = path.basename(filePath, path.extname(filePath));

  return {
    ...frontmatter,
    slug,
    collection,
    filePath,
    content,
  };
}

function normalizeFrontmatter(data: RawFrontmatter): ArticleFrontmatter {
  return {
    title: stringify(data.title),
    description: stringify(data.description),
    author: stringify(data.author),
    date: normalizeDate(data.date),
    tags: normalizeTags(data.tags),
    category: stringify(data.category),
    status: stringify(data.status),
  };
}

function stringify(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function normalizeDate(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return stringify(value);
}

function normalizeTags(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((tag): tag is string => typeof tag === "string");
}

function getArticleFilePaths(): string[] {
  return CONTENT_FOLDERS.flatMap((folder) => {
    const directory = path.join(CONTENT_ROOT, folder);

    if (!fs.existsSync(directory)) {
      return [];
    }

    return fs
      .readdirSync(directory)
      .filter((fileName) => fileName.endsWith(".mdx"))
      .filter((fileName) => fileName !== "template.mdx")
      .map((fileName) => path.join(directory, fileName));
  });
}

export function getArticles(): ArticleSummary[] {
  return getArticleFilePaths()
    .map(readArticleFile)
    .map(toArticleSummary)
    .sort((left, right) => right.date.localeCompare(left.date));
}

export function getArticleContentBySlug(slug: string): Article | null {
  const articlePath = getArticleFilePaths().find(
    (filePath) => path.basename(filePath, path.extname(filePath)) === slug,
  );

  return articlePath ? readArticleFile(articlePath) : null;
}

function toArticleSummary(article: Article): ArticleSummary {
  return {
    title: article.title,
    description: article.description,
    author: article.author,
    date: article.date,
    tags: article.tags,
    category: article.category,
    status: article.status,
    slug: article.slug,
    collection: article.collection,
    filePath: article.filePath,
  };
}
