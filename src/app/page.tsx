import { FlaskConical, NotebookText, RadioTower, ShieldCheck, Wrench } from "lucide-react"

import Container from "@/components/layout/Container"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/layout/Hero"
import Navbar from "@/components/layout/Navbar"
import Section from "@/components/layout/Section"

const sections = [
  {
    title: "Incidentes recentes",
    description:
      "Relatórios operacionais, notas sobre interrupções, planos de mitigação e aprendizados pós-incidente.",
    emptyText: "Relatórios de incidentes em breve.",
    icon: RadioTower,
  },
  {
    title: "Projetos de Engenharia",
    description:
      "Decisões de arquitetura, notas de engenharia de produto, construções de infraestrutura e compensações de entrega.",
    emptyText: "Notas do projeto de engenharia em breve.",
    icon: Wrench,
  },
  {
    title: "Pesquisa de segurança",
    description:
      "Pesquisa aplicada em segurança, modelagem de ameaças, reforço da segurança e descobertas práticas.",
    emptyText: "Pesquisa de segurança em breve.",
    icon: ShieldCheck,
  },
  {
    title: "Laboratórios",
    description:
      "Experimentos, protótipos, benchmarks e explorações técnicas do workshop.",
    emptyText: "Em breve, informações sobre os experimentos.",
    icon: FlaskConical,
  },
  {
    title: "Notas operacionais",
    description:
      "Runbooks, registros de depuração, notas de manutenção e pensamento sistêmico a partir do trabalho em produção.",
    emptyText: "Notas operacionais em breve.",
    icon: NotebookText,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <Navbar />
      <main>
        <Hero />
        <Container className="pb-20 sm:pb-24">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sections.map((section) => (
              <Section key={section.title} {...section} />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
