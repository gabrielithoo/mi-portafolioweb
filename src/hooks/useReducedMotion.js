import { useSyncExternalStore } from 'react'

const consulta = '(prefers-reduced-motion: reduce)'

function suscribirse(actualizar) {
  const preferencia = window.matchMedia(consulta)
  preferencia.addEventListener('change', actualizar)

  return () => preferencia.removeEventListener('change', actualizar)
}

function obtenerPreferencia() {
  return window.matchMedia(consulta).matches
}

function obtenerPreferenciaServidor() {
  return true
}

export default function useReducedMotion() {
  return useSyncExternalStore(
    suscribirse,
    obtenerPreferencia,
    obtenerPreferenciaServidor,
  )
}
