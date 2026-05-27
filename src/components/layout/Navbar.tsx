import Link from "next/link"

import { Button } from "@/components/ui/button"

import Container from "./Container"

const links = ["Incidentes", "Engenharia", "Segurança", "Laboratórios", "Pesquisar", "Sobre"]

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-zinc-950/95">
      <Container className="flex min-h-16 items-center justify-between gap-5 py-3">
        <Link href="/" className="text-base font-semibold text-white">
          Revista de Engenharia
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link}
              href="#"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {link}
            </Link>
          ))}
        </nav>

        <Button asChild size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200">
          <Link href="#">Contribuir</Link>
        </Button>
      </Container>
    </header>
  )
}
