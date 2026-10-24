// Archivo: src/sections/Proyectos.jsx
import SectionTitle from '../components/SectionTitle'
import ProyectoCard from '../components/ProyectoCard'
import { proyectos } from '../data/proyectos'

export default function Proyectos() {
  return (
    <section
      id="proyectos"
      aria-labelledby="titulo-proyectos"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <SectionTitle id="titulo-proyectos" etiqueta="02 / Trabajo personal">
        Proyectos
      </SectionTitle>

      <div className="space-y-8">
        {proyectos.map((proyecto) => (
          <ProyectoCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </section>
  )
}