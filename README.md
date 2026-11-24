# Portafolio de Gabriel

Portafolio de una página construido con React, Vite y Tailwind CSS 4.
Incluye presentación, proyectos, tecnologías, certificados y contacto.

## Desarrollo

Probado con Node.js 24 y npm.

```sh
npm ci
npm run dev
```

## Estructura

```text
src/
├── main.jsx                  # Entrada de React y estilos globales
├── App.jsx                   # Composición y orden de las secciones
├── index.css                 # Tailwind y ajustes globales
├── components/
│   ├── layout/               # SiteLayout, Navbar y Footer
│   ├── ui/                   # Section, SectionTitle y ExternalLink
│   ├── proyectos/            # Tarjeta de proyecto y carrusel
│   ├── tecnologias/          # Categorías y tarjetas de tecnologías
│   ├── certificados/         # Tarjeta de certificado
│   └── contacto/             # Formulario de contacto
├── sections/                 # Contenido y composición de cada sección
├── data/                     # Perfil, navegación y contenido de las tarjetas
├── hooks/                    # Menú, movimiento reducido y reproducción de video
└── utils/                    # Rutas públicas y construcción del enlace de correo
public/                       # Imágenes, videos, iconos y favicon
tests/                        # Pruebas con el ejecutor nativo de Node.js
```

Los componentes de `layout` y `ui` se comparten entre secciones. Los componentes
de cada tema contienen su presentación específica. Los hooks gestionan los eventos
del navegador y limpian sus suscripciones al desmontarse. Las utilidades contienen
funciones independientes de React.

## Dónde editar

- **Nombre, foto y contacto:** `src/data/sitio.js`.
- **Enlaces del menú:** `enlacesNavegacion` en `src/data/sitio.js`; deben coincidir con los identificadores de las secciones.
- **Orden de las secciones:** `src/App.jsx`.
- **Proyectos y capturas:** `src/data/proyectos.js`.
- **Tecnologías e iconos:** `src/data/tecnologias.js`.
- **Certificados:** `src/data/certificados.js`.
- **Textos de presentación:** `src/sections/`.
- **Idioma, título y descripción del navegador:** `index.html`.

## Estilos y recursos

Los estilos de los componentes usan utilidades de Tailwind directamente en JSX.
`src/index.css` contiene únicamente la importación de Tailwind y los ajustes globales
de tipografía, desplazamiento, selección y foco. La integración con Vite se configura
en `vite.config.js` mediante `@tailwindcss/vite`.

Guarda los recursos estáticos en `public/` y construye sus rutas con `rutaPublica()`.
Esta función respeta `base` de Vite para que los recursos también funcionen cuando
se publica el portafolio dentro de una subcarpeta.

## Comprobaciones

```sh
npm test          # Pruebas de correo, renderizado, navegación y recursos
npm run lint      # Análisis de JavaScript y React con Oxlint
npm run build     # Compilación de producción en dist/
npm run check     # Ejecuta las tres comprobaciones anteriores
npm run preview   # Sirve la compilación para revisarla localmente
```

Las pruebas usan Node.js y Vite, sin dependencias adicionales de testing. Comprueban
las seis secciones, los destinos de navegación, las etiquetas del formulario, los
recursos locales, las rutas bajo una subcarpeta y los estados de las tarjetas y del
carrusel. También verifican la codificación del correo, incluidos acentos y caracteres
reservados. El renderizado de estas pruebas no ejecuta eventos de un navegador real.

El formulario abre la aplicación de correo del visitante con un mensaje preparado.
No utiliza un servidor para enviar correos. Los videos decorativos se pausan cuando
no están visibles, la pestaña está oculta o se solicita movimiento reducido.
