type ArticleMetadataProps = {
  author: string;
  date: string;
  category: string;
  status: string;
  readingTime?: string;
};

const formatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function formatDate(date: string) {
  const parsed = new Date(`${date}T00:00:00.000Z`);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return formatter.format(parsed);
}

export function ArticleMetadata({
  author,
  date,
  category,
  status,
  readingTime,
}: ArticleMetadataProps) {
  const items = [
    category,
    date ? formatDate(date) : "",
    author,
    readingTime,
    status,
  ].filter(Boolean);

  return (
    <dl className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-400">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-4">
          <dt className="sr-only">Metadata</dt>
          <dd>{item}</dd>
        </div>
      ))}
    </dl>
  );
}
