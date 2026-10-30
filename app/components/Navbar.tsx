"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <div className="flex items-center justify-between py-8">
        <a href="/" className="font-hand text-2xl sm:text-3xl text-ink">
          <span className="text-gold">T</span>Senarath.
        </a>

        <nav className="hidden md:flex items-center gap-8 text-ink font-medium">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "flex items-center gap-1 text-forest"
                    : "hover:text-forest transition-colors"
                }
              >
                {active && <span className="text-forest">(</span>}
                {link.label}
                {active && <span className="text-forest">)</span>}
              </a>
            );
          })}
        </nav>

        <a
          href="/cv/Thushitha_Senarath.pdf" download="Thushitha_Senarath.pdf"
          className="hidden md:inline-block rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:opacity-90 transition-opacity"
        >
          Download CV
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-ink"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 pb-6 font-medium text-ink">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="rounded-full bg-forest px-6 py-3 text-center text-sm font-semibold text-cream"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
