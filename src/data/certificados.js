import { rutaPublica } from '../utils/rutaPublica'

const carpeta = rutaPublica('images_certificados/')

export const certificados = [
  {
    id: 'java-foundations',
    nombre: 'Java Foundations',
    emisor: 'Oracle Academy',
    descripcion: 'Formación en los fundamentos de Java y en la escritura de programas con este lenguaje.',
    imagen: `${carpeta}java-foundations.webp`,
    enlace: null,
  },
  {
    id: 'database-foundations',
    nombre: 'Database Foundations',
    emisor: 'Oracle Academy',
    descripcion: 'Formación en fundamentos de bases de datos y en cómo organizar y consultar información.',
    imagen: `${carpeta}database-foundations.webp`,
    enlace: null,
  },
]
