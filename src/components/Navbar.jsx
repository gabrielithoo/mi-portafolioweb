// Archivo: src/components/Navbar.jsx
const enlaces = [
  { nombre: 'Inicio', href: '#inicio' },
  { nombre: 'Sobre mí', href: '#sobre-mi' },
  { nombre: 'Tecnologías', href: '#tecnologias' },
  { nombre: 'Proyectos', href: '#proyectos' },
  { nombre: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/90 backdrop-blur-xl">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5"
      >
        <a
          href="#inicio"
          aria-label="Gabriel, ir al inicio"
          className="text-xl font-semibold tracking-tight text-zinc-100"
        >
          GP<span className="text-amber-400">.</span>
        </a>

        <ul className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-zinc-400 sm:text-sm">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <a
                href={enlace.href}
                className="transition-colors hover:text-zinc-100"
              >
                {enlace.nombre}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}