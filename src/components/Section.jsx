export function Section({ id, icon: Icon, eyebrow, title, description, children }) {
  return (
    <section className="section" id={id}>
      <div className="section__heading">
        <p className="eyebrow">
          <Icon size={16} aria-hidden="true" />
          {eyebrow}
        </p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </section>
  );
}
