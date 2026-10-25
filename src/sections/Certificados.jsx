// Archivo: src/sections/Certificados.jsx
import SectionTitle from '../components/SectionTitle'
import CertificadoCard from '../components/CertificadoCard'
import { certificados } from '../data/certificados'

export default function Certificados() {
  return (
    <section
      id="certificados"
      aria-labelledby="titulo-certificados"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <header className="mb-10">
        <SectionTitle id="titulo-certificados" etiqueta="04 / Formación">
            Certificados
        </SectionTitle>

        <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
          Mi formación en fundamentos de Java y bases de datos a través
          de Oracle Academy.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {certificados.map((certificado) => (
          <CertificadoCard
            key={certificado.id}
            certificado={certificado}
          />
        ))}
      </div>
    </section>
  )
}