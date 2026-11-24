export function crearEnlaceCorreo(destinatario, { nombre, correo, mensaje }) {
  const asunto = `Mensaje de ${nombre.trim()} desde mi portafolio`
  const cuerpo = `Nombre: ${nombre.trim()}\nCorreo: ${correo.trim()}\n\nMensaje:\n${mensaje.trim()}`

  return `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
}
