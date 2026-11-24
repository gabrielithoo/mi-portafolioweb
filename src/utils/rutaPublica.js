export function rutaPublica(ruta) {
  return `${import.meta.env.BASE_URL}${ruta.replace(/^\/+/, '')}`
}
