import { perfil } from '../../data/sitio'

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 border-t border-white/10 px-6 py-8 text-xs text-zinc-400">
      <p>{perfil.nombre} · Portafolio</p>
      <a href="#inicio" className="transition-colors hover:text-zinc-100">
        Volver al inicio
      </a>
    </footer>
  )
}
