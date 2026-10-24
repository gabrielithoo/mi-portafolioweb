// Archivo: src/sections/Inicio.jsx
export default function Inicio() {
  return (
    <section
      id="inicio"
      aria-labelledby="titulo-inicio"
      className="relative isolate flex min-h-[90svh] items-center overflow-hidden bg-zinc-900"
    >
      {/* GIF original: mantiene la animación */}
      <img
        src={`${import.meta.env.BASE_URL}images/fondo-inicio.gif`}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[75%_center] grayscale md:object-center"
      />

      {/* Oscurece principalmente el área del texto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-zinc-950/85 via-zinc-950/45 to-zinc-950/10"
      />

      {/* Une el paisaje con la siguiente sección */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
        <p className="mb-6 text-xs tracking-[0.3em] text-zinc-300 uppercase">
          Gabriel · Desarrollo de software
        </p>

        <h1
          id="titulo-inicio"
          className="max-w-3xl text-5xl leading-[1.08] font-medium tracking-tight text-zinc-100 sm:text-7xl"
        >
          Desarrollador
          <br />
          Backend<span className="text-amber-400">.</span>
        </h1>

        <p className="mt-6 text-xl font-light text-zinc-200 sm:text-2xl">
          Java & Spring Boot
        </p>

        <p className="mt-5 max-w-md text-base leading-8 text-zinc-300">
          Transformo necesidades reales en soluciones web,
          aprendiendo y mejorando con cada proyecto.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="rounded-full border border-amber-500/60 bg-zinc-950/30 px-7 py-3 text-sm font-medium text-zinc-100 backdrop-blur-sm transition-colors hover:border-amber-400 hover:bg-amber-500/10"
          >
            Ver proyecto <span aria-hidden="true">↗</span>
          </a>

          <a
            href="#contacto"
            className="rounded-full border border-zinc-400/40 bg-zinc-950/30 px-7 py-3 text-sm text-zinc-100 backdrop-blur-sm transition-colors hover:border-zinc-200 hover:bg-zinc-800/60"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}