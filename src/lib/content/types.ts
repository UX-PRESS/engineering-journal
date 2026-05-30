export const CONTENT_FOLDERS = [
  "incidents",
  "engineering",
  "security",
  "labs",
  "research",
  "post-mortems",
] as const;

export type ArticleCollection = (typeof CONTENT_FOLDERS)[number];

export type ArticleFrontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  status: string;
  readingTime: string;
  severity?: string;
  impact?: string;
  affectedSystems?: string[];
  projectStatus?: string;
  stack?: string[];
  domain?: string;
  securityDomain?: string;
  labOnly?: boolean;
  defensiveFocus?: string;
  tools?: string[];
  environment?: string;
  difficulty?: string;
  researchArea?: string;
  hypothesis?: string;
  references?: string[];
  incidentDate?: string;
  duration?: string;
  rootCause?: string;
  correctiveActions?: string[];
};

export type ArticleSummary = ArticleFrontmatter & {
  slug: string;
  collection: ArticleCollection;
  filePath: string;
};

export type Article = ArticleSummary & {
  content: string;
};

export type RawArticleFrontmatter = Partial<
  Record<keyof ArticleFrontmatter, unknown>
>;
