// Archivo: src/data/certificados.js
const carpeta = `${import.meta.env.BASE_URL}images_certificados/`

export const certificados = [
  {
    id: 'java-foundations',
    nombre: 'Java Foundations',
    emisor: 'Oracle Academy',
    imagen: `${carpeta}java-foundations.webp`,
    enlace: null,
  },
  {
    id: 'database-foundations',
    nombre: 'Database Foundations',
    emisor: 'Oracle Academy',
    imagen: `${carpeta}database-foundations.webp`,
    enlace: null,
  },
]