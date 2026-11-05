// Archivo: src/sections/Contacto.jsx
import SectionTitle from '../components/SectionTitle'

const correo = 'gabrielpalominotorres1@gmail.com'
const whatsapp = '51937274818'

function enviarMensaje(evento) {
  evento.preventDefault()

  const datos = new FormData(evento.currentTarget)
  const nombre = datos.get('nombre')
  const correoRemitente = datos.get('correo')
  const mensaje = datos.get('mensaje')
  const asunto = `Mensaje de ${nombre} desde mi portafolio`
  const cuerpo = `Nombre: ${nombre}\nCorreo: ${correoRemitente}\n\nMensaje:\n${mensaje}`

  window.location.href = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
}

export default function Contacto() {
  return (
    <section
      id="contacto"
      aria-labelledby="titulo-contacto"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="border-t border-white/10 pt-16">
        <SectionTitle id="titulo-contacto" etiqueta="05 / Contacto">
          Conversemos
        </SectionTitle>

        <p className="max-w-lg leading-8 text-zinc-400">
          Me interesa seguir aprendiendo, colaborar y participar en proyectos
          donde pueda aportar mis conocimientos. Envíame un mensaje o
          conversemos por WhatsApp.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)]">
          <form
            onSubmit={enviarMensaje}
            className="space-y-5 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8"
          >
            <div>
              <label
                htmlFor="contacto-nombre"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Nombre
              </label>
              <input
                id="contacto-nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-white/15 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                htmlFor="contacto-correo"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Correo
              </label>
              <input
                id="contacto-correo"
                name="correo"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-white/15 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none"
                placeholder="tu@correo.com"
              />
            </div>

            <div>
              <label
                htmlFor="contacto-mensaje"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Mensaje
              </label>
              <textarea
                id="contacto-mensaje"
                name="mensaje"
                rows="5"
                required
                className="w-full resize-y rounded-xl border border-white/15 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none"
                placeholder="Cuéntame en qué puedo ayudarte..."
              />
            </div>

            <button
              type="submit"
              className="rounded-full border border-amber-500/60 bg-amber-500/10 px-7 py-3 text-sm font-medium text-zinc-100 transition-colors hover:bg-amber-500/20"
            >
              Enviar mensaje ↗
            </button>
            <p className="text-xs leading-5 text-zinc-500">
              Se abrirá tu aplicación de correo con el mensaje listo para enviar.
            </p>
          </form>

          <div className="flex flex-col items-start justify-center gap-5 rounded-2xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-zinc-100">
              También puedes escribirme directamente
            </h3>
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-500/40 px-7 py-3 text-sm text-zinc-100 transition-colors hover:bg-emerald-500/10"
            >
              WhatsApp · +51 937 274 818 ↗
            </a>
            <a
              href={`mailto:${correo}`}
              className="text-sm text-zinc-400 underline decoration-white/20 underline-offset-4 transition-colors hover:text-amber-400"
            >
              {correo}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}