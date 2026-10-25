// Archivo: src/components/CertificadoCard.jsx
export default function CertificadoCard({ certificado }) {
  const { nombre, emisor, imagen, enlace } = certificado

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60">
      <div className="border-b border-white/10 bg-zinc-950 p-5 sm:p-6">
        <div className="aspect-[4/3]">
          <img
            src={imagen}
            alt={`Certificado de ${nombre} emitido por ${emisor}`}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col items-start p-6 sm:p-8">
        <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">
          {emisor}
        </p>

        <h3 className="mt-3 text-2xl font-medium tracking-tight text-zinc-100">
          {nombre}
          <span className="text-amber-400">.</span>
        </h3>

        <div className="mt-auto pt-6">
          <a
            href={enlace || imagen}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 px-5 py-2.5 text-sm text-zinc-100 transition-colors hover:border-amber-400 hover:bg-amber-500/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
          >
            {enlace ? 'Verificar certificado' : 'Ver certificado'}
            <span aria-hidden="true">↗</span>
            <span className="sr-only">
              {' '}de {nombre} (se abre en otra pestaña)
            </span>
          </a>
        </div>
      </div>
    </article>
  )
}