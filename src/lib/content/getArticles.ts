import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import {
  CONTENT_FOLDERS,
  type Article,
  type ArticleCollection,
  type ArticleFrontmatter,
  type ArticleSummary,
  type RawArticleFrontmatter,
} from "./types";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

const CATEGORY_BY_COLLECTION: Record<ArticleCollection, string> = {
  incidents: "INCIDENT",
  engineering: "ENGINEERING",
  security: "SECURITY",
  labs: "LABS",
  research: "RESEARCH",
  "post-mortems": "POST-MORTEM",
};

function readDirectoryRecursive(directory: string): string[] {
  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return readDirectoryRecursive(entryPath);
    }

    return entry.isFile() && entry.name.endsWith(".mdx") ? [entryPath] : [];
  });
}

function getCollectionFromPath(filePath: string): ArticleCollection {
  const relativePath = path.relative(CONTENT_ROOT, filePath);
  const [collection] = relativePath.split(path.sep);

  if (CONTENT_FOLDERS.includes(collection as ArticleCollection)) {
    return collection as ArticleCollection;
  }

  return "engineering";
}

function getArticleFilePaths(): string[] {
  return CONTENT_FOLDERS.flatMap((folder) =>
    readDirectoryRecursive(path.join(CONTENT_ROOT, folder)),
  ).filter((filePath) => path.basename(filePath) !== "template.mdx");
}

function readArticleFile(filePath: string): Article {
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const collection = getCollectionFromPath(filePath);
  const slug = path.basename(filePath, path.extname(filePath));

  return {
    ...normalizeFrontmatter(data as RawArticleFrontmatter, collection),
    slug,
    collection,
    filePath,
    content,
  };
}

function normalizeFrontmatter(
  data: RawArticleFrontmatter,
  collection: ArticleCollection,
): ArticleFrontmatter {
  return {
    title: optionalString(data.title, "Untitled article"),
    description: optionalString(data.description),
    date: normalizeDate(data.date),
    author: optionalString(data.author, "Editorial team"),
    category: optionalString(data.category, CATEGORY_BY_COLLECTION[collection]),
    tags: normalizeStringArray(data.tags),
    status: optionalString(data.status, "Draft"),
    readingTime: optionalString(data.readingTime, "1 min read"),
    severity: optionalStringOrUndefined(data.severity),
    impact: optionalStringOrUndefined(data.impact),
    affectedSystems: optionalStringArray(data.affectedSystems),
    projectStatus: optionalStringOrUndefined(data.projectStatus),
    stack: optionalStringArray(data.stack),
    domain: optionalStringOrUndefined(data.domain),
    securityDomain: optionalStringOrUndefined(data.securityDomain),
    labOnly: optionalBoolean(data.labOnly),
    defensiveFocus: optionalStringOrUndefined(data.defensiveFocus),
    tools: optionalStringArray(data.tools),
    environment: optionalStringOrUndefined(data.environment),
    difficulty: optionalStringOrUndefined(data.difficulty),
    researchArea: optionalStringOrUndefined(data.researchArea),
    hypothesis: optionalStringOrUndefined(data.hypothesis),
    references: optionalStringArray(data.references),
    incidentDate: optionalDate(data.incidentDate),
    duration: optionalStringOrUndefined(data.duration),
    rootCause: optionalStringOrUndefined(data.rootCause),
    correctiveActions: optionalStringArray(data.correctiveActions),
  };
}

function optionalString(value: unknown, fallback = ""): string {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function optionalStringOrUndefined(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value : undefined;
}

function normalizeDate(value: unknown): string {
  return optionalDate(value) ?? new Date(0).toISOString().slice(0, 10);
}

function optionalDate(value: unknown): string | undefined {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return optionalStringOrUndefined(value);
}

function normalizeStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function optionalStringArray(value: unknown): string[] | undefined {
  const items = normalizeStringArray(value);

  return items.length > 0 ? items : undefined;
}

function optionalBoolean(value: unknown): boolean | undefined {
  return typeof value === "boolean" ? value : undefined;
}

function toArticleSummary(article: Article): ArticleSummary {
  return {
    title: article.title,
    description: article.description,
    date: article.date,
    author: article.author,
    category: article.category,
    tags: article.tags,
    status: article.status,
    readingTime: article.readingTime,
    severity: article.severity,
    impact: article.impact,
    affectedSystems: article.affectedSystems,
    projectStatus: article.projectStatus,
    stack: article.stack,
    domain: article.domain,
    securityDomain: article.securityDomain,
    labOnly: article.labOnly,
    defensiveFocus: article.defensiveFocus,
    tools: article.tools,
    environment: article.environment,
    difficulty: article.difficulty,
    researchArea: article.researchArea,
    hypothesis: article.hypothesis,
    references: article.references,
    incidentDate: article.incidentDate,
    duration: article.duration,
    rootCause: article.rootCause,
    correctiveActions: article.correctiveActions,
    slug: article.slug,
    collection: article.collection,
    filePath: article.filePath,
  };
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
