import { useEffect, useRef } from 'react'
import useReducedMotion from './useReducedMotion'

export default function useVisibleVideo() {
  const contenedorRef = useRef(null)
  const videoRef = useRef(null)
  const reducirMovimiento = useReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    const contenedor = contenedorRef.current

    if (!video || !contenedor) return

    let visible = false
    let desmontado = false

    function puedeReproducirse() {
      return visible && !reducirMovimiento && !document.hidden && !desmontado
    }

    function actualizarReproduccion() {
      if (!puedeReproducirse()) {
        video.pause()
        return
      }

      video.play().then(() => {
        if (!puedeReproducirse()) video.pause()
      }).catch(() => {
        // El fondo oscuro sigue siendo legible si el navegador bloquea el video.
      })
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        visible = entrada.isIntersecting
        actualizarReproduccion()
      },
      { threshold: 0.1 },
    )

    observador.observe(contenedor)
    document.addEventListener('visibilitychange', actualizarReproduccion)

    return () => {
      desmontado = true
      observador.disconnect()
      document.removeEventListener('visibilitychange', actualizarReproduccion)
      video.pause()
    }
  }, [reducirMovimiento])

  return { contenedorRef, videoRef }
}
