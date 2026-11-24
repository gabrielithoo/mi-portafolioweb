import { perfil } from '../../data/sitio'
import { crearEnlaceCorreo } from '../../utils/crearEnlaceCorreo'

const estilosCampo = 'w-full rounded-xl border border-white/15 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none'
const estilosEtiqueta = 'mb-2 block text-sm font-medium text-zinc-200'

export default function ContactoForm() {
  function enviarMensaje(evento) {
    evento.preventDefault()

    const datos = Object.fromEntries(new FormData(evento.currentTarget))
    window.location.href = crearEnlaceCorreo(perfil.correo, datos)
  }

  return (
    <form
      aria-label="Enviar un mensaje"
      onSubmit={enviarMensaje}
      className="space-y-5 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8"
    >
      <div>
        <label htmlFor="contacto-nombre" className={estilosEtiqueta}>
          Nombre
        </label>
        <input
          id="contacto-nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          required
          className={estilosCampo}
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="contacto-correo" className={estilosEtiqueta}>
          Correo
        </label>
        <input
          id="contacto-correo"
          name="correo"
          type="email"
          autoComplete="email"
          required
          className={estilosCampo}
          placeholder="tu@correo.com"
        />
      </div>

      <div>
        <label htmlFor="contacto-mensaje" className={estilosEtiqueta}>
          Mensaje
        </label>
        <textarea
          id="contacto-mensaje"
          name="mensaje"
          rows={5}
          required
          className={`${estilosCampo} resize-y`}
          placeholder="Cuéntame en qué puedo ayudarte..."
        />
      </div>

      <button
        type="submit"
        className="cursor-pointer rounded-full border border-amber-500/60 bg-amber-500/10 px-7 py-3 text-sm font-medium text-zinc-100 transition-colors hover:bg-amber-500/20"
      >
        Enviar mensaje
      </button>
      <p className="text-xs leading-5 text-zinc-500">
        Se abrirá tu aplicación de correo con el mensaje listo para enviar.
      </p>
    </form>
  )
}
