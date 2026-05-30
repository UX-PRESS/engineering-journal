import { ArrowRight } from "lucide-react";

import { ArticleCard } from "@/components/publication/ArticleCard";
import { Badge } from "@/components/publication/Badge";
import { ContributorCard } from "@/components/publication/ContributorCard";
import { MetadataRow } from "@/components/publication/MetadataRow";
import { SectionHeader } from "@/components/publication/SectionHeader";
import { Button } from "@/components/ui/button";

const featuredArticles = [
  {
    title: "API saturation during regional failover",
    category: "INCIDENT",
    description:
      "A practical teardown of retry amplification, partial queue exhaustion, and the rollback controls that restored write latency.",
    tags: ["resilience", "queues", "rollback"],
    date: "May 24, 2026",
    author: "L. Cordeiro",
    readingTime: "9 min read",
    severity: "SEV-2",
    status: "Resolved",
  },
  {
    title: "Designing low-friction review gates",
    category: "ENGINEERING",
    description:
      "How typed ownership, smaller deploy units, and reviewer intent signals reduced blocked pull requests across platform teams.",
    tags: ["delivery", "platform", "dx"],
    date: "May 18, 2026",
    author: "Mira Chen",
    readingTime: "7 min read",
    status: "Field note",
  },
  {
    title: "Threat modeling internal automation",
    category: "SECURITY",
    description:
      "A compact framework for evaluating privileged workflow bots, scoped credentials, auditability, and blast-radius controls.",
    tags: ["identity", "automation", "risk"],
    date: "May 12, 2026",
    author: "Rafael Nunes",
    readingTime: "8 min read",
    status: "Playbook",
  },
];

const researchArticles = [
  {
    title: "Tracing cold starts in edge data paths",
    category: "RESEARCH",
    description:
      "Benchmark notes on cache priming, connection reuse, and the measurements that actually predicted production variance.",
    tags: ["latency", "edge", "observability"],
    date: "May 8, 2026",
    author: "Iris Nakamura",
    readingTime: "11 min read",
  },
  {
    title: "Lab notes: deterministic replay for workers",
    category: "LABS",
    description:
      "An experiment in replaying message handlers with captured clocks, network fixtures, and a stricter failure transcript.",
    tags: ["workers", "testing", "runtime"],
    date: "Apr 29, 2026",
    author: "Noah Silva",
    readingTime: "6 min read",
    status: "Prototype",
  },
  {
    title: "Post-mortem templates that teams reuse",
    category: "POST-MORTEM",
    description:
      "A lightweight incident writing format tuned for accountability, precise timelines, and follow-up work that survives planning.",
    tags: ["incidents", "process", "writing"],
    date: "Apr 21, 2026",
    author: "Ada Brooks",
    readingTime: "5 min read",
  },
];

const contributors = [
  {
    name: "Mira Chen",
    domain: "Developer Experience",
    skills: ["review systems", "tooling", "platform ops"],
    bio: "Writes about the small systems that make engineering teams faster without hiding operational reality.",
  },
  {
    name: "Rafael Nunes",
    domain: "Product Security",
    skills: ["threat models", "identity", "audit trails"],
    bio: "Turns security reviews into crisp engineering constraints and practical deployment patterns.",
  },
  {
    name: "Iris Nakamura",
    domain: "Runtime Research",
    skills: ["latency", "edge compute", "benchmarks"],
    bio: "Studies production behavior through traces, controlled experiments, and carefully boring measurements.",
  },
];

const operations = [
  ["99.96%", "API availability", "30 day rolling window"],
  ["12 ms", "P95 edge delta", "after cache warmup pass"],
  ["18", "Open action items", "across incident reviews"],
  ["4", "Active lab tracks", "runtime, security, DX, data"],
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/85 backdrop-blur">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] font-mono text-xs font-semibold">
              EJ
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Engineering Journal
            </span>
          </a>
          <div className="hidden items-center gap-6 font-mono text-xs text-zinc-500 md:flex">
            <a href="#incidents" className="transition-colors hover:text-zinc-200">
              Incidents
            </a>
            <a href="#research" className="transition-colors hover:text-zinc-200">
              Research
            </a>
            <a
              href="#contributors"
              className="transition-colors hover:text-zinc-200"
            >
              Contributors
            </a>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href="#latest">
              Latest
              <ArrowRight data-icon="inline-end" />
            </a>
          </Button>
        </nav>
      </header>

      <main>
        <section className="border-b border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(63,63,70,0.34),transparent_42%)]">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="engineering">Engineering</Badge>
                <Badge variant="research">Research</Badge>
                <Badge variant="incident">Operations</Badge>
              </div>
              <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
                Field notes for resilient software teams.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                An editorial engineering publication for incident analysis,
                production architecture, security practice, and applied systems
                research.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="#latest">
                    Read latest
                    <ArrowRight data-icon="inline-end" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#research">Browse research</a>
                </Button>
              </div>
            </div>

            <aside className="border-l border-white/10 pl-5 sm:pl-6">
              <p className="font-mono text-xs uppercase leading-5 tracking-normal text-zinc-500">
                Current brief
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50">
                Queue pressure, replay tooling, and sharper incident writing.
              </h2>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                This issue follows the operational details behind a regional
                failover, plus research notes on reproducing worker failures
                with deterministic inputs.
              </p>
              <div className="mt-6">
                <MetadataRow
                  author="Editorial desk"
                  date="May 2026"
                  readingTime="Issue 04"
                  tags={["operations", "systems", "security"]}
                />
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {operations.map(([value, label, detail]) => (
              <div
                key={label}
                className="rounded-lg border border-white/10 bg-zinc-950/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <p className="text-3xl font-semibold tracking-tight text-white">
                  {value}
                </p>
                <p className="mt-3 text-sm font-medium text-zinc-200">
                  {label}
                </p>
                <p className="mt-1 font-mono text-[11px] leading-5 text-zinc-500">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="latest"
          className="mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16"
        >
          <SectionHeader
            title="Latest operational writing"
            description="Incident reports, engineering practice, and security notes written for teams that operate what they build."
            action={
              <Button variant="outline" size="sm" asChild>
                <a href="#incidents">
                  View archive
                  <ArrowRight data-icon="inline-end" />
                </a>
              </Button>
            }
          />
          <div
            id="incidents"
            className="mt-6 grid gap-4 lg:grid-cols-3"
          >
            {featuredArticles.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </div>
        </section>

        <section
          id="research"
          className="border-y border-white/10 bg-zinc-950/35"
        >
          <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
            <SectionHeader
              title="Research and lab tracks"
              description="Applied experiments and post-mortem patterns that connect controlled analysis back to production constraints."
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {researchArticles.map((article) => (
                <ArticleCard key={article.title} {...article} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="contributors"
          className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16"
        >
          <SectionHeader
            title="Contributor desk"
            description="Engineers, researchers, and operators who turn production lessons into reusable writing."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {contributors.map((contributor) => (
              <ContributorCard key={contributor.name} {...contributor} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-8 font-mono text-[11px] leading-5 text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Engineering Journal / Operational notes for software teams</p>
          <p>Incidents, research, security, labs</p>
        </div>
      </footer>
    </div>
  );
}
