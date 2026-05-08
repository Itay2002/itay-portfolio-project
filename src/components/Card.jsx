export function Card({ title, meta, children }) {
  return (
    <article className="card">
      <div className="card__top">
        <span>{meta}</span>
      </div>
      <h3>{title}</h3>
      <div className="card__body">{children}</div>
    </article>
  );
}
