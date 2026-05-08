export function FilterPills({ label, icon: Icon, options, active, onChange }) {
  return (
    <div className="filter-row" aria-label={label}>
      <span>
        <Icon size={15} aria-hidden="true" />
        {label}
      </span>
      <div className="pills">
        {options.map((option) => (
          <button
            className={option === active ? "pill is-active" : "pill"}
            key={option}
            type="button"
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
