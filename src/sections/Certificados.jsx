import CertificadoCard from '../components/certificados/CertificadoCard'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import { certificados } from '../data/certificados'

export default function Certificados() {
  return (
    <Section id="certificados">
      <SectionTitle id="titulo-certificados" etiqueta="04 / Formación">
        Certificados
      </SectionTitle>

      <p className="mb-10 max-w-2xl leading-7 text-zinc-400">
        Mi formación en fundamentos de Java y bases de datos a través
        de Oracle Academy.
      </p>

      <div className="mx-auto grid max-w-4xl items-start gap-8 sm:grid-cols-2 lg:gap-12">
        {certificados.map((certificado) => (
          <CertificadoCard
            key={certificado.id}
            certificado={certificado}
          />
        ))}
      </div>
    </Section>
  )
}
