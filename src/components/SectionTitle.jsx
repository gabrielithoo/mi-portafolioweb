// Archivo: src/components/SectionTitle.jsx
export default function SectionTitle({ id, etiqueta, children }) {
  return (
    <header className="mb-10">
      {etiqueta && (
        <p className="mb-3 text-xs tracking-[0.3em] text-zinc-400 uppercase">
          {etiqueta}
        </p>
      )}

      <h2
        id={id}
        className="text-3xl font-medium tracking-tight text-zinc-100 sm:text-4xl"
      >
        {children}
        <span className="text-amber-400">.</span>
      </h2>
    </header>
  )
}