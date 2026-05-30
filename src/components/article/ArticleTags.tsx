type ArticleTagsProps = {
  tags: string[];
};

export function ArticleTags({ tags }: ArticleTagsProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-wrap gap-2" aria-label="Article tags">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-zinc-300"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
