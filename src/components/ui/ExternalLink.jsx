export default function ExternalLink({ href, className, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span className="sr-only"> (se abre en otra pestaña)</span>
    </a>
  )
}
