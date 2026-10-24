// Archivo: src/data/tecnologias.js
const imagenes = `${import.meta.env.BASE_URL}images/`

export const fondoTecnologias = `${imagenes}fondo-card.mp4`

export const categoriasTecnologias = [
  {
    id: 'lenguajes',
    titulo: 'Lenguajes',
    descripcion: 'La base para construir la lógica de mis aplicaciones.',
    simbolo: '{ }',
    tecnologias: [
      { nombre: 'Java', icono: 'java-original.svg' },
      { nombre: 'JavaScript', icono: 'javascript-original.svg' },
      { nombre: 'TypeScript', icono: 'typescript-original.svg' },
    ],
  },
  {
    id: 'frontend',
    titulo: 'Frontend',
    descripcion: 'Interfaces claras, adaptables y fáciles de utilizar.',
    simbolo: '</>',
    tecnologias: [
      { nombre: 'HTML', icono: 'html5-original.svg' },
      { nombre: 'CSS', icono: 'css3-original.svg' },
      { nombre: 'React', icono: 'react-original.svg' },
      { nombre: 'Tailwind CSS', icono: 'tailwindcss-original.svg' },
    ],
  },
  {
    id: 'backend',
    titulo: 'Backend y APIs',
    descripcion: 'Mi enfoque de aprendizaje para desarrollar servicios con Java.',
    simbolo: '↔',
    tecnologias: [
      { nombre: 'Spring Boot', icono: 'spring-original.svg' },
    ],
  },
  {
    id: 'bases-datos',
    titulo: 'Bases de datos',
    descripcion: 'Organización, consultas y persistencia de información.',
    simbolo: '▤',
    tecnologias: [
      { nombre: 'MySQL', icono: 'mysql-original.svg' },
      { nombre: 'PostgreSQL', icono: 'postgresql-original.svg' },
      { nombre: 'Oracle', icono: 'oracle-original.svg' },
    ],
  },
  {
    id: 'herramientas',
    titulo: 'Herramientas y despliegue',
    descripcion: 'Control de versiones, desarrollo y publicación de proyectos.',
    simbolo: '↗',
    tecnologias: [
      { nombre: 'Git', icono: 'git-original.svg' },
      {
        nombre: 'GitHub',
        icono: 'github-original.svg',
        invertir: true,
      },
      { nombre: 'Vite', icono: 'vitejs-original.svg' },
      { nombre: 'Cloudflare Pages', icono: 'cloudflare-original.svg' },
    ],
  },
].map((categoria) => ({
  ...categoria,
  tecnologias: categoria.tecnologias.map((tecnologia) => ({
    ...tecnologia,
    icono: `${imagenes}${tecnologia.icono}`,
  })),
}))