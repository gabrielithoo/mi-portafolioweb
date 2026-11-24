import { useId, useRef, useState } from 'react'
import ExternalLink from '../ui/ExternalLink'

export default function CertificadoCard({ certificado }) {
  const { nombre, emisor, imagen, descripcion, enlace } = certificado
  const [abierto, setAbierto] = useState(false)
  const detallesId = useId()
  const detallesRef = useRef(null)
  const botonRef = useRef(null)

  return (
    <article
      className="mx-auto w-full min-w-0 max-w-sm"
      onPointerLeave={(evento) => {
        if (evento.pointerType === 'mouse' && !detallesRef.current?.contains(document.activeElement)) {
          setAbierto(false)
        }
      }}
      onBlur={(evento) => {
        if (!evento.currentTarget.contains(evento.relatedTarget)) setAbierto(false)
      }}
      onKeyDown={(evento) => {
        if (evento.key === 'Escape' && abierto) {
          evento.preventDefault()
          setAbierto(false)
          botonRef.current?.focus()
        }
      }}
    >
      <button
        ref={botonRef}
        type="button"
        aria-label={`${abierto ? 'Ocultar' : 'Mostrar'} detalles de ${nombre}`}
        aria-expanded={abierto}
        aria-controls={detallesId}
        onPointerEnter={(evento) => {
          if (evento.pointerType === 'mouse') setAbierto(true)
        }}
        onClick={() => setAbierto((anterior) => !anterior)}
        className="relative mx-auto block w-2/3 cursor-pointer rounded-md border border-amber-400/45 p-1.5 transition-[width,border-color,box-shadow] duration-300 ease-out aria-expanded:w-full aria-expanded:border-amber-400 aria-expanded:shadow-xl aria-expanded:shadow-amber-400/10 motion-reduce:transition-none"
      >
        <img
          src={imagen}
          alt={`Certificado de ${nombre} emitido por ${emisor}`}
          width={1650}
          height={1275}
          loading="lazy"
          decoding="async"
          className="block aspect-[22/17] w-full rounded-sm object-contain"
        />
        <span
          aria-hidden="true"
          className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full border border-amber-400/50 bg-zinc-950 text-lg text-amber-300"
        >
          {abierto ? '−' : '+'}
        </span>
      </button>

      <div
        ref={detallesRef}
        id={detallesId}
        inert={!abierto}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
          abierto ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-1 pt-6 pb-2">
            <p className="text-sm text-amber-300">{emisor}</p>
            <h3 className="mt-1 text-xl font-medium tracking-tight text-zinc-100 sm:text-2xl">
              {nombre}
            </h3>
            <p className="mt-2 max-w-md leading-7 text-zinc-300">
              {descripcion}
            </p>

            <ExternalLink
              href={enlace || imagen}
              className="mt-4 inline-flex rounded-sm text-sm font-medium text-amber-300 underline decoration-amber-400/40 underline-offset-4 transition-colors hover:text-amber-200 focus-visible:outline-offset-2"
            >
              {enlace ? 'Verificar certificado' : 'Ver certificado'}
              <span className="sr-only"> de {nombre}</span>
            </ExternalLink>
          </div>
        </div>
      </div>
    </article>
  )
}
