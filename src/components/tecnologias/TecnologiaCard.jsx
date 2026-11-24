import { fondoTecnologias } from '../../data/tecnologias'
import useVisibleVideo from '../../hooks/useVisibleVideo'

export default function TecnologiaCard({ tecnologia }) {
  const { contenedorRef, videoRef } = useVisibleVideo()

  return (
    <li
      ref={contenedorRef}
      className="group relative isolate flex min-w-0 items-center gap-3 overflow-hidden rounded-xl border border-amber-500/20 bg-zinc-950 px-4 py-4 transition-colors duration-300 hover:border-amber-400/60"
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen transition-opacity duration-300 group-hover:opacity-70 motion-reduce:hidden"
      >
        <source src={fondoTecnologias} type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-zinc-950/85 via-zinc-950/50 to-zinc-950/10"
      />

      <img
        src={tecnologia.icono}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={28}
        height={28}
        className={`relative z-10 h-7 w-7 shrink-0 object-contain ${
          tecnologia.invertir ? 'brightness-0 invert' : ''
        }`}
      />

      <span className="relative z-10 min-w-0 text-sm leading-5 font-medium text-zinc-100">
        {tecnologia.nombre}
      </span>
    </li>
  )
}
