import SiteLayout from './components/layout/SiteLayout'
import Inicio from './sections/Inicio'
import SobreMi from './sections/SobreMi'
import Proyectos from './sections/Proyectos'
import Tecnologias from './sections/Tecnologias'
import Certificados from './sections/Certificados'
import Contacto from './sections/Contacto'

export default function App() {
  return (
    <SiteLayout>
      <Inicio />
      <SobreMi />
      <Proyectos />
      <Tecnologias />
      <Certificados />
      <Contacto />
    </SiteLayout>
  )
}
