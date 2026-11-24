import CarruselImagenes from './CarruselImagenes'
import ExternalLink from '../ui/ExternalLink'

export default function ProyectoCard({ proyecto }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
      <div className="grid lg:grid-cols-2">
        <div className="min-w-0 self-center p-5 sm:p-8">
          <CarruselImagenes
            imagenes={proyecto.capturas}
            nombre={proyecto.nombre}
          />
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10">
          <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">
            {proyecto.categoria}
          </p>

          <h3 className="mt-4 text-3xl font-medium tracking-tight text-zinc-100">
            {proyecto.nombre}
            <span className="text-amber-400">.</span>
          </h3>

          <p className="mt-5 leading-7 text-zinc-400">
            {proyecto.descripcion}
          </p>

          <p className="mt-4 text-sm leading-7 text-zinc-400">
            {proyecto.contexto}
          </p>

          <ul
            aria-label="Tecnologías utilizadas"
            className="mt-6 flex flex-wrap gap-2"
          >
            {proyecto.tecnologias.map((tecnologia) => (
              <li
                key={tecnologia}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-300"
              >
                {tecnologia}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            {proyecto.demo && (
              <ExternalLink
                href={proyecto.demo}
                className="inline-flex items-center justify-center rounded-full border border-amber-500/60 bg-amber-500/10 px-6 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-amber-400 hover:bg-amber-500/20"
              >
                Probar aplicación
              </ExternalLink>
            )}

            {proyecto.repositorio && (
              <ExternalLink
                href={proyecto.repositorio}
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-zinc-300 transition-colors hover:border-white/40"
              >
                Ver código
              </ExternalLink>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
