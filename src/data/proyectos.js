// Archivo: src/data/proyectos.js
const rutaCapturas =
  `${import.meta.env.BASE_URL}images_control-pesos/`

export const proyectos = [
  {
    id: 'control-pesos',
    nombre: 'Control de Pesos',
    categoria: 'Aplicación web · Frontend',

    descripcion:
      'Registro de trabajadores y pesos, cálculo de totales por persona y exportación de resultados como imagen.',

    contexto:
      'Creado para simplificar el registro de una cosecha y reemplazar el cuaderno y la calculadora.',

    capturas: [
      {
        src: `${rutaCapturas}captura-01.webp`,
        alt: 'Vista principal de Control de Pesos',
      },
      {
        src: `${rutaCapturas}captura-02.webp`,
        alt: 'Registro de trabajadores y pesos',
      },
      {
        src: `${rutaCapturas}captura-03.webp`,
        alt: 'Resumen de kilos y pagos',
      },
      {
        src: `${rutaCapturas}captura-04.webp`,
        alt: 'Descarga de resultados como imagen',
      },
      {
        src: `${rutaCapturas}captura-05.webp`,
        alt: 'Vaciado de registros y reinicio de la aplicación',
      },
    ],

    tecnologias: ['React', 'TypeScript', 'LocalStorage', 'Html2Canvas', 'SweetAlert2',],
    demo: 'https://control-pesos.pages.dev/',
    repositorio: null,
  },
]