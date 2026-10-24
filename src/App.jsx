// Archivo: src/App.jsx
import Navbar from './components/Navbar'
import Inicio from './sections/Inicio'
import SobreMi from './sections/SobreMi'
import Proyectos from './sections/Proyectos'
import Tecnologias from './sections/Tecnologias'
import Contacto from './sections/Contacto'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <a
        href="#contenido"
        className="sr-only fixed top-4 left-4 z-100 rounded bg-zinc-100 px-4 py-2 text-zinc-950 focus:not-sr-only"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido">
        <Inicio />
        <SobreMi />
        <Proyectos />
        <Tecnologias />
        <Contacto />
      </main>

      <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 border-t border-white/10 px-6 py-8 text-xs text-zinc-400">
        <p>Gabriel · Portafolio</p>
        <a href="#inicio" className="transition-colors hover:text-zinc-100">
          Volver al inicio ↑
        </a>
      </footer>
    </div>
  )
}