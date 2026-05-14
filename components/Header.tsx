"use client";

import { useState } from "react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Attorney", href: "#attorney" },
  { label: "Process", href: "#process" },
  { label: "Languages", href: "#languages" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Huang Law home">
        <span className="brand-mark" aria-hidden="true">HL</span>
        <span className="brand-text">
          <span>Huang Law</span>
          <em>P.A.</em>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span className="sr-only">Toggle navigation menu</span>
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <nav id="primary-navigation" className={isOpen ? "nav open" : "nav"} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="button button-outline nav-cta" href="#contact" onClick={() => setIsOpen(false)}>
          Schedule a Consultation
        </a>
      </nav>
    </header>
  );
}
