import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export function Header({ navigation }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={() => setOpen(false)}>
        <Sparkles size={18} aria-hidden="true" />
        <span>Itay Gozalzani</span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <Menu size={18} aria-hidden="true" />
        <span>Menu</span>
      </button>
      <nav className={`mobile-nav ${open ? "is-open" : ""}`} id="mobile-nav" aria-label="Mobile navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
