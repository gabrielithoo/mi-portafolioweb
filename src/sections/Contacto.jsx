import ContactoForm from '../components/contacto/ContactoForm'
import ExternalLink from '../components/ui/ExternalLink'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import { perfil } from '../data/sitio'

export default function Contacto() {
  return (
    <Section id="contacto">
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
          <ContactoForm />

          <div className="flex flex-col items-start justify-center gap-5 rounded-2xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-zinc-100">
              También puedes escribirme directamente
            </h3>
            <ExternalLink
              href={`https://wa.me/${perfil.whatsapp}`}
              className="rounded-full border border-emerald-500/40 px-7 py-3 text-sm text-zinc-100 transition-colors hover:bg-emerald-500/10"
            >
              WhatsApp
            </ExternalLink>
            <a
              href={`mailto:${perfil.correo}`}
              className="text-sm text-zinc-400 underline decoration-white/20 underline-offset-4 transition-colors hover:text-amber-400"
            >
              {perfil.correo}
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
