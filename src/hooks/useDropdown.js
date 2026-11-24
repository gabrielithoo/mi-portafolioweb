import { useEffect, useRef, useState } from 'react'

export default function useDropdown() {
  const [abierto, setAbierto] = useState(false)
  const contenedorRef = useRef(null)
  const botonRef = useRef(null)

  useEffect(() => {
    if (!abierto) return

    function cerrarAlSalir(evento) {
      if (!contenedorRef.current?.contains(evento.target)) {
        setAbierto(false)
      }
    }

    function cerrarConEscape(evento) {
      if (evento.key === 'Escape') {
        evento.preventDefault()
        setAbierto(false)
        botonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', cerrarAlSalir)
    document.addEventListener('focusin', cerrarAlSalir)
    document.addEventListener('keydown', cerrarConEscape)

    return () => {
      document.removeEventListener('pointerdown', cerrarAlSalir)
      document.removeEventListener('focusin', cerrarAlSalir)
      document.removeEventListener('keydown', cerrarConEscape)
    }
  }, [abierto])

  return {
    abierto,
    contenedorRef,
    botonRef,
    alternar: () => setAbierto((anterior) => !anterior),
    cerrar: () => setAbierto(false),
  }
}
