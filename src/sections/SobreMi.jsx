// Archivo: src/sections/SobreMi.jsx

const perfil = {
  nombre: 'Gabriel',
  especialidad: 'Desarrollador Backend',
  foto: `${import.meta.env.BASE_URL}images/perfil.webp`,
}

// Si después añades una imagen de fondo, coloca su ruta aquí.
const fondo = null

export default function SobreMi() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="titulo-sobre-mi"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      {/* Presentación de la sección */}
      <header className="mb-12">
        <h2
          id="titulo-sobre-mi"
          className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl"
        >
          Sobre mí<span className="text-amber-500">.</span>
        </h2>

        <p className="mt-6 max-w-xl border-l border-amber-500/40 pl-5 text-base leading-8 text-zinc-400">
          Enfocado en construir soluciones útiles y seguir creciendo
          con Java, Spring Boot y bases de datos.
        </p>
      </header>

      {/* Contenedor principal */}
      <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
        {/* Fondo decorativo */}
        {fondo && (
          <img
            src={fondo}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover grayscale"
          />
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-zinc-950 via-zinc-950/80 to-zinc-800/60"
        />

        {/* Esquinas doradas */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 h-16 w-16 rounded-tl-3xl border-t border-l border-amber-500/40"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 h-16 w-16 rounded-br-3xl border-r border-b border-amber-500/40"
        />

        <div className="grid items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[280px_1fr] lg:gap-12 lg:py-16">
          {/* Foto e identidad */}
          <div className="flex flex-col items-center text-center">
            <img
              src={perfil.foto}
              alt={`Foto de ${perfil.nombre}`}
              loading="lazy"
              width={256}
              height={256}
              className="h-52 w-52 rounded-full border border-white/15 object-cover object-center shadow-2xl shadow-black/40 sm:h-64 sm:w-64"
            />

            <h3 className="mt-7 text-2xl font-bold tracking-tight text-zinc-100">
              {perfil.nombre}
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Estudiante de Desarrollo de Software
            </p>

            <p className="mt-4 font-mono text-sm text-amber-400">
              {perfil.especialidad}
            </p>
          </div>

          {/* Descripción y contenido ampliable */}
          <div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur-md sm:p-9">
              <div className="space-y-6 text-base leading-8 text-zinc-300">
                <p>
                  Soy Gabriel, estudiante de Desarrollo de Software en
                  SENATI. Mi enfoque está en el desarrollo backend con
                  Java, Spring Boot y bases de datos.
                </p>

                <p>
                  Me interesa comprender cómo funcionan las aplicaciones:
                  su lógica, sus APIs y la forma en que organizan y
                  procesan la información.
                </p>

                <p>
                  Aprendo construyendo proyectos que responden a
                  necesidades reales. Con Sistema de Pesos busco
                  simplificar el registro de trabajadores, pesos y
                  totales durante una cosecha.
                </p>
              </div>
            </div>

            <details className="group mt-6">
              <summary className="ml-auto flex w-fit cursor-pointer list-none items-center gap-3 rounded-full border border-amber-500/50 bg-zinc-950/50 px-6 py-3 text-xs font-semibold tracking-wider text-zinc-100 uppercase transition-colors hover:bg-amber-500/10 [&::-webkit-details-marker]:hidden">
                <span className="group-open:hidden">Ver más</span>
                <span className="hidden group-open:inline">Ver menos</span>

                <span
                  aria-hidden="true"
                  className="text-amber-400 transition-transform group-open:rotate-180"
                >
                  ↓
                </span>
              </summary>

              <div className="mt-5 rounded-2xl border border-white/10 bg-zinc-950/60 p-6 text-sm leading-8 text-zinc-400">
                También utilizo React y TypeScript para crear interfaces.
                Mi objetivo es fortalecer mis fundamentos y escribir
                código claro, organizado y fácil de mantener.
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}