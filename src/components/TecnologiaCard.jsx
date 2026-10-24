// Archivo: src/components/TecnologiaCard.jsx
import { useEffect, useRef } from 'react'
import { fondoTecnologias } from '../data/tecnologias'

export default function TecnologiaCard({ tecnologia }) {
  const tarjetaRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const preferencia = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    let visible = false
    let desmontado = false

    function actualizarReproduccion() {
      if (visible && !preferencia.matches && !document.hidden) {
        video.play().then(() => {
          if (desmontado) video.pause()
        }).catch(() => {
          // Conserva el fondo oscuro si el video no puede reproducirse.
        })
      } else {
        video.pause()
      }
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        visible = entrada.isIntersecting
        actualizarReproduccion()
      },
      { threshold: 0.1 },
    )

    observador.observe(tarjetaRef.current)
    preferencia.addEventListener('change', actualizarReproduccion)
    document.addEventListener('visibilitychange', actualizarReproduccion)

    return () => {
      desmontado = true
      observador.disconnect()
      preferencia.removeEventListener('change', actualizarReproduccion)
      document.removeEventListener(
        'visibilitychange',
        actualizarReproduccion,
      )
      video.pause()
    }
  }, [])

  return (
    <li
      ref={tarjetaRef}
      className="group relative isolate flex min-w-0 items-center gap-3 overflow-hidden rounded-xl border border-amber-500/20 bg-zinc-950 px-4 py-4 transition-colors duration-300 hover:border-amber-400/60"
    >
      {/* Video independiente, limitado a esta tarjeta */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen transition-opacity duration-300 group-hover:opacity-70 motion-reduce:hidden"
      >
        <source src={fondoTecnologias} type="video/mp4" />
      </video>

      {/* Protege la lectura del nombre y del logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-zinc-950/85 via-zinc-950/50 to-zinc-950/10"
      />

      <img
        src={tecnologia.icono}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={28}
        height={28}
        className={`relative z-10 h-7 w-7 shrink-0 object-contain ${
          tecnologia.invertir ? 'brightness-0 invert' : ''
        }`}
      />

      <span className="relative z-10 min-w-0 text-sm leading-5 font-medium text-zinc-100">
        {tecnologia.nombre}
      </span>
    </li>
  )
}