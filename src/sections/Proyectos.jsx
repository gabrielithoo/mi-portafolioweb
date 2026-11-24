import ProyectoCard from '../components/proyectos/ProyectoCard'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import { proyectos } from '../data/proyectos'

export default function Proyectos() {
  return (
    <Section id="proyectos">
      <SectionTitle id="titulo-proyectos" etiqueta="02 / Trabajo personal">
        Proyectos
      </SectionTitle>

      <div className="space-y-8">
        {proyectos.map((proyecto) => (
          <ProyectoCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </Section>
  )
}
