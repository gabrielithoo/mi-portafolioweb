import { enlacesNavegacion, perfil } from '../../data/sitio'
import useDropdown from '../../hooks/useDropdown'

export default function Navbar() {
  const { abierto, contenedorRef, botonRef, alternar, cerrar } = useDropdown()

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/90 backdrop-blur-xl">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"
      >
        <a
          href="#inicio"
          aria-label={`${perfil.nombre}, ir al inicio`}
          className="text-xl font-semibold tracking-tight text-zinc-100"
        >
          GP<span className="text-amber-400">.</span>
        </a>

        <div ref={contenedorRef} className="relative">
          <button
            ref={botonRef}
            type="button"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={abierto}
            aria-controls="menu-secciones"
            onClick={alternar}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-200 transition-colors hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-400"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul
            id="menu-secciones"
            hidden={!abierto}
            className="absolute top-full right-0 mt-3 max-h-[calc(100dvh-7rem)] w-64 max-w-[calc(100vw-3rem)] overflow-y-auto rounded-2xl border border-white/10 bg-zinc-950 p-2 text-sm text-zinc-300 shadow-2xl shadow-black/50"
          >
            {enlacesNavegacion.map((enlace) => (
              <li key={enlace.href}>
                <a
                  href={enlace.href}
                  onClick={cerrar}
                  className="block rounded-xl px-4 py-3 transition-colors hover:bg-amber-400/10 hover:text-amber-400 focus-visible:bg-amber-400/10 focus-visible:text-amber-400 focus-visible:-outline-offset-2"
                >
                  {enlace.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
