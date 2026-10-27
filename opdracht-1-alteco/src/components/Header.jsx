import { useState } from 'react';
import Icon from './Icon';

const menu = [
  { label: 'Home', active: true },
  { label: 'About Us' },
  { label: 'Services' },
  { label: 'Pages' },
  { label: 'Shop' },
  { label: 'Blog' },
  { label: 'Contact Us' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="#" className="header__brand">
            <Icon name="gear" className="header__brand-icon" size={46} />
            <span>
              <span className="header__brand-name">Alteco</span>
              <span className="header__brand-tagline">Business Template</span>
            </span>
          </a>

          <button
            type="button"
            className="header__toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="header__toggle-bar"></span>
            <span className="header__toggle-bar"></span>
            <span className="header__toggle-bar"></span>
          </button>

          <nav className={`header__nav${open ? ' is-open' : ''}`}>
            <ul className="header__menu">
              {menu.map((item) => (
                <li key={item.label} className={item.active ? 'is-active' : undefined}>
                  <a href="#">{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#" className="header__search" aria-label="Zoeken">
            <Icon name="search" size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
