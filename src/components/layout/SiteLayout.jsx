import Footer from './Footer'
import Navbar from './Navbar'

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <a
        href="#contenido"
        className="sr-only fixed top-4 left-4 z-100 rounded bg-zinc-100 px-4 py-2 text-zinc-950 focus:not-sr-only"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido" tabIndex={-1}>
        {children}
      </main>

      <Footer />
    </div>
  )
}
