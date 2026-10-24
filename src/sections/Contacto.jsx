// Archivo: src/sections/Contacto.jsx
import SectionTitle from '../components/SectionTitle'

const correo = ''
const github = ''

export default function Contacto() {
  return (
    <section
      id="contacto"
      aria-labelledby="titulo-contacto"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="border-t border-white/10 pt-16">
        <SectionTitle id="titulo-contacto" etiqueta="04 / Contacto">
          Conversemos
        </SectionTitle>

        <p className="max-w-lg leading-8 text-zinc-400">
          Me interesa seguir aprendiendo, colaborar y participar en proyectos
          donde pueda aportar mis conocimientos.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {correo && (
            <a
              href={`mailto:${correo}`}
              className="rounded-full border border-amber-500/60 px-7 py-3 text-sm text-zinc-100 transition-colors hover:bg-amber-500/10"
            >
              Escríbeme ↗
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-7 py-3 text-sm text-zinc-300 transition-colors hover:border-white/40"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </section>
  )
}