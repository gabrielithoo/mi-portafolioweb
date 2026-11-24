import assert from 'node:assert/strict'
import { access } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { after, before, test } from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

const base = '/portafolio/'
let servidor
let documento
let sitio
let proyectos
let certificados
let tecnologias
let CarruselImagenes
let ProyectoCard
let CertificadoCard
let rutaPublica

function renderizar(Componente, props) {
  return renderToStaticMarkup(createElement(Componente, props))
}

before(async () => {
  servidor = await createServer({
    root: fileURLToPath(new URL('..', import.meta.url)),
    base,
    logLevel: 'error',
    appType: 'custom',
    server: { middlewareMode: true, hmr: false, watch: null },
  })

  const cargar = (ruta) => servidor.ssrLoadModule(`/src/${ruta}`)
  const app = await cargar('App.jsx')
  sitio = await cargar('data/sitio.js')
  ;({ proyectos } = await cargar('data/proyectos.js'))
  ;({ certificados } = await cargar('data/certificados.js'))
  tecnologias = await cargar('data/tecnologias.js')
  ;({ default: CarruselImagenes } = await cargar('components/proyectos/CarruselImagenes.jsx'))
  ;({ default: ProyectoCard } = await cargar('components/proyectos/ProyectoCard.jsx'))
  ;({ default: CertificadoCard } = await cargar('components/certificados/CertificadoCard.jsx'))
  ;({ rutaPublica } = await cargar('utils/rutaPublica.js'))
  documento = renderizar(app.default)
})

after(async () => {
  await servidor?.close()
})

test('se conservan las seis secciones y el orden de navegación', () => {
  const secciones = [...documento.matchAll(/<section\b[^>]*\bid="([^"]+)"/g)]
    .map((coincidencia) => coincidencia[1])

  assert.deepEqual(secciones, [
    'inicio', 'sobre-mi', 'proyectos', 'tecnologias', 'certificados', 'contacto',
  ])
  assert.deepEqual(sitio.enlacesNavegacion.map(({ href }) => href), secciones.map((id) => `#${id}`))
  assert.equal([...documento.matchAll(/<main\b/g)].length, 1)
  assert.equal([...documento.matchAll(/<footer\b/g)].length, 1)
})

test('todos los enlaces internos apuntan a un destino único', () => {
  const ids = [...documento.matchAll(/\bid="([^"]+)"/g)].map((coincidencia) => coincidencia[1])

  assert.equal(new Set(ids).size, ids.length, 'Hay identificadores duplicados')

  for (const [, destino] of documento.matchAll(/\bhref="#([^"]+)"/g)) {
    assert.ok(ids.includes(destino), `No existe el destino #${destino}`)
  }

  for (const [, titulo] of documento.matchAll(/\baria-labelledby="([^"]+)"/g)) {
    assert.ok(ids.includes(titulo), `No existe el título accesible ${titulo}`)
  }
})

test('el menú empieza cerrado con un botón accesible y sus seis enlaces', () => {
  const navegacion = documento.match(/<nav\b[\s\S]*?<\/nav>/)?.[0]

  assert.ok(navegacion)
  assert.match(navegacion, /<button[^>]*aria-label="Abrir menú"[^>]*aria-expanded="false"/)
  assert.match(navegacion, /<ul[^>]*id="menu-secciones"[^>]*hidden=""/)

  for (const { nombre, href } of sitio.enlacesNavegacion) {
    assert.ok(navegacion.includes(`href="${href}"`))
    assert.ok(navegacion.includes(nombre))
  }
})

test('los recursos locales existen, incluidas todas las capturas e iconos', async () => {
  const recursos = new Set([
    sitio.perfil.foto,
    tecnologias.fondoTecnologias,
    ...proyectos.flatMap(({ capturas }) => capturas.map(({ src }) => src)),
    ...certificados.map(({ imagen }) => imagen),
    ...tecnologias.categoriasTecnologias.flatMap(({ tecnologias: items }) => items.map(({ icono }) => icono)),
    ...[...documento.matchAll(/\b(?:src|href)="([^"]+)"/g)]
      .map((coincidencia) => coincidencia[1])
      .filter((ruta) => ruta.startsWith('/')),
  ])

  for (const recurso of recursos) {
    assert.ok(recurso.startsWith(base), `No respeta la ruta de despliegue: ${recurso}`)
    await access(new URL(`../public/${recurso.slice(base.length)}`, import.meta.url))
  }
})

test('las rutas públicas funcionan al desplegar en una subcarpeta', () => {
  assert.equal(rutaPublica('images/perfil.webp'), '/portafolio/images/perfil.webp')
  assert.equal(rutaPublica('/images/perfil.webp'), '/portafolio/images/perfil.webp')
})

test('los proyectos, certificados y tecnologías siguen visibles', () => {
  for (const item of [...proyectos, ...certificados]) {
    assert.ok(documento.includes(item.nombre), `Falta ${item.nombre}`)
  }

  for (const categoria of tecnologias.categoriasTecnologias) {
    assert.ok(documento.includes(categoria.titulo))
    for (const tecnologia of categoria.tecnologias) {
      assert.ok(documento.includes(tecnologia.nombre), `Falta ${tecnologia.nombre}`)
    }
  }
})

test('los enlaces que abren otra pestaña lo indican y protegen el origen', () => {
  const enlaces = [...documento.matchAll(/<a\b[^>]*target="_blank"[^>]*>[\s\S]*?<\/a>/g)]

  assert.ok(enlaces.length > 0)
  for (const [enlace] of enlaces) {
    assert.match(enlace, /rel="noopener noreferrer"/)
    assert.ok(enlace.includes('se abre en otra pestaña'))
  }
})

test('el formulario conserva las etiquetas, campos requeridos y validación de correo', () => {
  const formulario = documento.match(/<form\b[\s\S]*?<\/form>/)?.[0]

  assert.ok(formulario)
  for (const campo of ['nombre', 'correo', 'mensaje']) {
    assert.ok(formulario.includes(`for="contacto-${campo}"`))
    const etiqueta = formulario.match(new RegExp(`<(?:input|textarea)[^>]*id="contacto-${campo}"[^>]*>`))?.[0]
    assert.ok(etiqueta, `Falta el campo ${campo}`)
    assert.ok(etiqueta.includes(`name="${campo}"`))
    assert.ok(etiqueta.includes('required=""'))
    if (campo === 'correo') assert.ok(etiqueta.includes('type="email"'))
  }
})

test('el carrusel sin capturas muestra su estado vacío', () => {
  const html = renderizar(CarruselImagenes, { nombre: 'Proyecto' })

  assert.ok(html.includes('Capturas próximamente'))
  assert.doesNotMatch(html, /<img\b|<button\b/)
})

test('el carrusel con una captura no muestra controles innecesarios', () => {
  const html = renderizar(CarruselImagenes, {
    nombre: proyectos[0].nombre,
    imagenes: proyectos[0].capturas.slice(0, 1),
  })

  assert.match(html, /<img\b/)
  assert.doesNotMatch(html, /<button\b/)
  assert.ok(html.includes('aria-label="1 de 1"'))
})

test('el carrusel con varias capturas presenta los controles y la posición inicial', () => {
  const html = renderizar(CarruselImagenes, {
    nombre: proyectos[0].nombre,
    imagenes: proyectos[0].capturas,
  })

  assert.ok(html.includes('aria-label="Captura anterior"'))
  assert.ok(html.includes('aria-label="Captura siguiente"'))
  assert.equal([...html.matchAll(/aria-label="Ver captura /g)].length, proyectos[0].capturas.length)
  assert.equal([...html.matchAll(/aria-current="true"/g)].length, 1)
})

test('las acciones del proyecto dependen de los enlaces disponibles', () => {
  const sinEnlaces = renderizar(ProyectoCard, {
    proyecto: { ...proyectos[0], demo: null, repositorio: null },
  })
  const conRepositorio = renderizar(ProyectoCard, {
    proyecto: { ...proyectos[0], demo: null, repositorio: 'https://github.com/example/proyecto' },
  })

  assert.doesNotMatch(sinEnlaces, /Probar aplicación|Ver código/)
  assert.ok(conRepositorio.includes('Ver código'))
  assert.ok(conRepositorio.includes('https://github.com/example/proyecto'))
})

test('los certificados permiten verificar o abrir su imagen según los datos', () => {
  const conEnlace = renderizar(CertificadoCard, {
    certificado: { ...certificados[0], enlace: 'https://example.com/certificado' },
  })
  const sinEnlace = renderizar(CertificadoCard, { certificado: certificados[0] })

  assert.ok(conEnlace.includes('Verificar certificado'))
  assert.ok(conEnlace.includes('href="https://example.com/certificado"'))
  assert.ok(sinEnlace.includes('Ver certificado'))
  assert.ok(sinEnlace.includes(`href="${certificados[0].imagen}"`))
})
