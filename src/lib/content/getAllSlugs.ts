import { getArticles } from "./getArticles";

export function getAllSlugs(): string[] {
  return getArticles().map((article) => article.slug);
}
