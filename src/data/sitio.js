import { rutaPublica } from '../utils/rutaPublica'

export const perfil = {
  nombre: 'Gabriel',
  especialidad: 'Desarrollador Backend',
  formacion: 'Estudiante de Desarrollo de Software',
  foto: rutaPublica('images/perfil.webp'),
  correo: 'gabrielpalominotorres1@gmail.com',
  whatsapp: '51937274818',
}

export const enlacesNavegacion = [
  { nombre: 'Inicio', href: '#inicio' },
  { nombre: 'Sobre mí', href: '#sobre-mi' },
  { nombre: 'Proyectos', href: '#proyectos' },
  { nombre: 'Tecnologías', href: '#tecnologias' },
  { nombre: 'Certificados', href: '#certificados' },
  { nombre: 'Contacto', href: '#contacto' },
]
