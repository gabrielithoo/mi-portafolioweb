// Archivo: src/sections/Tecnologias.jsx
import SectionTitle from '../components/SectionTitle'
import CategoriaTecnologias from '../components/CategoriaTecnologias'
import { categoriasTecnologias } from '../data/tecnologias'

export default function Tecnologias() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="titulo-tecnologias"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <SectionTitle id="titulo-tecnologias" etiqueta="03 / Herramientas">
        Tecnologías que uso
      </SectionTitle>

      <p className="mb-12 max-w-2xl text-base leading-8 text-zinc-400">
        Las herramientas con las que construyo mis proyectos y continúo
        aprendiendo, organizadas por su función.
      </p>

      <div className="grid items-stretch gap-6 lg:grid-cols-2">
  {categoriasTecnologias.map((categoria) => (
    <CategoriaTecnologias
      key={categoria.id}
      categoria={categoria}
    />
  ))}
</div>
    </section>
  )
}