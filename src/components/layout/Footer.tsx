import Link from "next/link"

import Container from "./Container"

const links = ["Incidentes", "Engenharia", "Segurança", "Laboratórios", "Pesquisar", "Sobre"]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <Container className="grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <p className="text-base font-semibold text-white">Revista de Engenharia</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
            Notas operacionais, decisões de engenharia, pesquisas de segurança e lições
            aprendidas a partir de sistemas técnicos reais.
          </p>
          <p className="mt-6 text-xs text-zinc-500">
            © 2026 Revista de Engenharia. Todos os direitos reservados.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end" aria-label="Footer navigation">
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
      </Container>
    </footer>
  )
}
