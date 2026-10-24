// Archivo: src/components/CategoriaTecnologias.jsx
import TecnologiaCard from './TecnologiaCard'

export default function CategoriaTecnologias({
  categoria,
  className = '',
}) {
  return (
    <article
      aria-labelledby={`categoria-${categoria.id}`}
      className={`relative overflow-hidden rounded-2xl border border-orange-500/20 bg-zinc-900/60 p-5 sm:p-7 ${className}`}
    >
      <header className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/5 font-mono text-sm text-amber-400"
        >
          {categoria.simbolo}
        </span>

        <div>
          <h3
            id={`categoria-${categoria.id}`}
            className="text-lg font-semibold tracking-tight text-zinc-100"
          >
            {categoria.titulo}
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {categoria.descripcion}
          </p>
        </div>
      </header>

      <ul className="mt-6 grid grid-cols-1 gap-3 min-[380px]:grid-cols-2">
        {categoria.tecnologias.map((tecnologia) => (
          <TecnologiaCard
            key={tecnologia.nombre}
            tecnologia={tecnologia}
          />
        ))}
      </ul>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3 bottom-3 h-5 w-5 border-r border-b border-amber-500/30"
      />
    </article>
  )
}