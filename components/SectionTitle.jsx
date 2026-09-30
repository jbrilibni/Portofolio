export default function SectionTitle({
  eyebrow,
  title,
  description,
  copy,
  centered = false,
  className = "",
  ...props
}) {
  const textContent = description || copy;

  return (
    <div
      className={`section-title${centered ? " section-title--centered" : ""}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2>{title}</h2>}
      {textContent && <p>{textContent}</p>}
    </div>
  );
}
