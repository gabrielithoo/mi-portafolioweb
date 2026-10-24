// Archivo: src/components/CarruselImagenes.jsx
import { useEffect, useState } from 'react'

export default function CarruselImagenes({ imagenes = [], nombre }) {
  const [indice, setIndice] = useState(0)
  const [interactuando, setInteractuando] = useState(false)
  const [reducirMovimiento, setReducirMovimiento] = useState(true)

  const total = imagenes.length
  const actual = total > 0 ? indice % total : 0

  useEffect(() => {
    const preferencia = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    function actualizar() {
      setReducirMovimiento(preferencia.matches)
    }

    actualizar()
    preferencia.addEventListener('change', actualizar)

    return () => {
      preferencia.removeEventListener('change', actualizar)
    }
  }, [])

  useEffect(() => {
    if (total < 2 || interactuando || reducirMovimiento) return

    const temporizador = window.setInterval(() => {
      if (!document.hidden) {
        setIndice((anterior) => (anterior + 1) % total)
      }
    }, 3000)

    return () => window.clearInterval(temporizador)
  }, [total, interactuando, reducirMovimiento])

  function cambiar(direccion) {
    setIndice((anterior) => (anterior + direccion + total) % total)
  }

  if (total === 0) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-xl bg-zinc-950 text-sm text-zinc-400">
        Capturas próximamente
      </div>
    )
  }

  const estiloFlecha =
    'flex h-10 w-10 items-center justify-center rounded-full ' +
    'border border-white/15 bg-zinc-900 text-zinc-100 transition-colors ' +
    'hover:border-amber-500/50 hover:bg-zinc-800'

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Capturas de ${nombre}`}
      onMouseEnter={() => setInteractuando(true)}
      onMouseLeave={(evento) => {
        if (!evento.currentTarget.contains(document.activeElement)) {
          setInteractuando(false)
        }
      }}
      onFocusCapture={() => setInteractuando(true)}
      onBlurCapture={(evento) => {
        if (
          !evento.currentTarget.contains(evento.relatedTarget) &&
          !evento.currentTarget.matches(':hover')
        ) {
          setInteractuando(false)
        }
      }}
      className="min-w-0"
    >
      <div
        role="group"
        aria-roledescription="diapositiva"
        aria-label={`${actual + 1} de ${total}`}
        className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-zinc-950"
      >
        <img
          src={imagenes[actual].src}
          alt={imagenes[actual].alt}
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-cover object-top"
        />
      </div>

      {total > 1 && (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Captura anterior"
              onClick={() => cambiar(-1)}
              className={estiloFlecha}
            >
              <span aria-hidden="true">←</span>
            </button>

            <span className="min-w-10 text-center font-mono text-xs text-zinc-400">
              {actual + 1} / {total}
            </span>

            <button
              type="button"
              aria-label="Captura siguiente"
              onClick={() => cambiar(1)}
              className={estiloFlecha}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center">
            {imagenes.map((imagen, posicion) => (
              <button
                key={imagen.src}
                type="button"
                aria-label={`Ver captura ${posicion + 1}`}
                aria-current={actual === posicion ? 'true' : undefined}
                onClick={() => setIndice(posicion)}
                className="flex h-8 w-8 items-center justify-center rounded-full"
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 rounded-full transition-all ${
                    actual === posicion
                      ? 'w-5 bg-amber-400'
                      : 'w-1.5 bg-zinc-600'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}