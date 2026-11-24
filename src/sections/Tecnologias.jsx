import CategoriaTecnologias from '../components/tecnologias/CategoriaTecnologias'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import { categoriasTecnologias } from '../data/tecnologias'

export default function Tecnologias() {
  return (
    <Section id="tecnologias">
      <SectionTitle id="titulo-tecnologias" etiqueta="03 / Herramientas">
        Tecnologías que uso
      </SectionTitle>

      <p className="mb-12 max-w-2xl text-base leading-8 text-zinc-400">
        Las herramientas con las que construyo mis proyectos y continúo
        aprendiendo, organizadas por su función.
      </p>

      <div className="grid items-stretch gap-6 lg:grid-cols-2">
        {categoriasTecnologias.map((categoria) => (
          <CategoriaTecnologias key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </Section>
  )
}
