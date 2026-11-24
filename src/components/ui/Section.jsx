export default function Section({ id, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`titulo-${id}`}
      className="mx-auto max-w-6xl px-6 py-24"
    >
      {children}
    </section>
  )
}
