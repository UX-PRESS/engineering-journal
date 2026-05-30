import { getArticleContentBySlug } from "./getArticles";
import type { Article } from "./types";

export function getArticleBySlug(slug: string): Article | null {
  return getArticleContentBySlug(slug);
}
