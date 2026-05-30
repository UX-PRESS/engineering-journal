import type { ComponentProps } from "react";
import * as runtime from "react/jsx-runtime";
import { compile, run } from "@mdx-js/mdx";
import type { MDXComponents } from "mdx/types";
import remarkGfm from "remark-gfm";

const mdxComponents: MDXComponents = {
  h1: (props: ComponentProps<"h1">) => (
    <h1
      className="mt-0 text-3xl font-semibold leading-tight text-zinc-50"
      {...props}
    />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="mt-12 border-t border-white/10 pt-8 text-2xl font-semibold leading-tight text-zinc-50"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="mt-10 text-xl font-semibold leading-tight text-zinc-100"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="leading-8 text-zinc-300" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="ml-6 list-disc space-y-2 text-zinc-300" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="ml-6 list-decimal space-y-2 text-zinc-300" {...props} />
  ),
  li: (props: ComponentProps<"li">) => <li className="pl-1" {...props} />,
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-2 border-zinc-600 pl-5 text-zinc-400"
      {...props}
    />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-sm text-zinc-100"
      {...props}
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="overflow-x-auto rounded-md border border-white/10 bg-zinc-950 p-4 text-sm leading-7 text-zinc-200"
      {...props}
    />
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  thead: (props: ComponentProps<"thead">) => (
    <thead className="border-b border-white/10 text-zinc-200" {...props} />
  ),
  tbody: (props: ComponentProps<"tbody">) => (
    <tbody className="divide-y divide-white/10" {...props} />
  ),
  th: (props: ComponentProps<"th">) => (
    <th className="px-3 py-2 font-semibold text-zinc-200" {...props} />
  ),
  td: (props: ComponentProps<"td">) => (
    <td className="px-3 py-2 text-zinc-300" {...props} />
  ),
  a: (props: ComponentProps<"a">) => (
    <a
      className="text-zinc-50 underline decoration-zinc-500 underline-offset-4 transition-colors hover:decoration-zinc-100"
      {...props}
    />
  ),
};

type MDXContentProps = {
  source: string;
};

export async function MDXContent({ source }: MDXContentProps) {
  const code = String(
    await compile(source, {
      outputFormat: "function-body",
      development: false,
      remarkPlugins: [remarkGfm],
    }),
  );
  const { default: Content } = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
  });

  return <Content components={mdxComponents} />;
}
