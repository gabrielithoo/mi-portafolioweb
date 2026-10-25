// Archivo: src/sections/Certificados.jsx
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
        <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">
          Formación
        </p>

        <h2
          id="titulo-certificados"
          className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl"
        >
          Certificados
          <span className="text-amber-400">.</span>
        </h2>

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