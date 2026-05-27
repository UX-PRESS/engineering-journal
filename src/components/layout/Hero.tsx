import Link from "next/link"
import { ArrowRight, UsersRound } from "lucide-react"

import { Button } from "@/components/ui/button"

import Container from "./Container"

export default function Hero() {
  return (
    <section className="border-b border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.16),transparent_32%),linear-gradient(180deg,rgba(39,39,42,0.74),rgba(9,9,11,0))]">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="max-w-4xl">
          <p className="mb-5 font-mono text-xs font-semibold uppercase text-sky-300">
            Notas de campo para sistemas técnicos
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Engenharia, Operações e Segurança — documentadas a partir de sistemas do mundo real.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Incidentes, arquitetura, pesquisa de segurança, notas sobre infraestrutura,
            engenharia de produto e lições operacionais aprendidas em trabalhos técnicos reais.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200">
              <Link href="#">
                Explorar artigos
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="#">
                <UsersRound />
                Ver colaboradores
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
