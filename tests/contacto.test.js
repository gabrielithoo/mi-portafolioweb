import assert from 'node:assert/strict'
import test from 'node:test'
import { crearEnlaceCorreo } from '../src/utils/crearEnlaceCorreo.js'

test('el correo incluye el destinatario y los datos del formulario', () => {
  const enlace = new URL(crearEnlaceCorreo('destino@example.com', {
    nombre: 'Ana',
    correo: 'ana@example.com',
    mensaje: 'Quiero colaborar en un proyecto.',
  }))

  assert.equal(enlace.protocol, 'mailto:')
  assert.equal(enlace.pathname, 'destino@example.com')
  assert.equal(enlace.searchParams.get('subject'), 'Mensaje de Ana desde mi portafolio')
  assert.equal(
    enlace.searchParams.get('body'),
    'Nombre: Ana\nCorreo: ana@example.com\n\nMensaje:\nQuiero colaborar en un proyecto.',
  )
})

test('los acentos, saltos de línea y caracteres reservados no alteran los parámetros', () => {
  const mensaje = '¡Hola!\n¿Usamos Java & React? #proyecto\n&subject=otro&bcc=otro@example.com'
  const enlace = new URL(crearEnlaceCorreo('destino@example.com', {
    nombre: 'María & José',
    correo: 'maria+proyectos@example.com',
    mensaje,
  }))

  assert.deepEqual([...enlace.searchParams.keys()], ['subject', 'body'])
  assert.equal(enlace.searchParams.get('subject'), 'Mensaje de María & José desde mi portafolio')
  assert.ok(enlace.searchParams.get('body').endsWith(mensaje))
  assert.ok(enlace.searchParams.get('body').includes('maria+proyectos@example.com'))
})

test('se eliminan espacios exteriores sin perder el formato del mensaje', () => {
  const enlace = new URL(crearEnlaceCorreo('destino@example.com', {
    nombre: '  Ana  ',
    correo: '  ana@example.com  ',
    mensaje: '  Primera línea\n\nSegunda línea  ',
  }))

  assert.equal(enlace.searchParams.get('subject'), 'Mensaje de Ana desde mi portafolio')
  assert.equal(
    enlace.searchParams.get('body'),
    'Nombre: Ana\nCorreo: ana@example.com\n\nMensaje:\nPrimera línea\n\nSegunda línea',
  )
})
