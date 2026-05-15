"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const navItems = [
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "About", href: "/about" },
  { label: "Mediation", href: "/florida-certified-mediator" },
  { label: "Local Counsel", href: "/florida-local-counsel" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/#top" aria-label="Huang Law home">
        <span className="brand-mark" aria-hidden="true">HL</span>
        <span className="brand-text">
          <span>Huang Law</span>
          <em>P.A.</em>
        </span>
      </Link>

      <div className="header-contact">
        <a href={site.phoneHref}>{site.phone}</a>
      </div>

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
          <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link className="button button-outline nav-cta" href="/contact" onClick={() => setIsOpen(false)}>
          Schedule a Consultation
        </Link>
      </nav>
    </header>
  );
}
