"use client";

import { useEffect, useRef, useState } from "react";
import { MenuIcon } from "./ui";

// In page order.
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [tucked, setTucked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      // Tuck the bar away while reading down the page; any scroll up brings it back.
      setTucked(y > 240 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      {/* The banner scrolls away with the page; the bar below it stays within reach. */}
      <div className="banner">
        <p className="container">Taking on new projects. No pitch deck needed. A few lines about your idea is enough.</p>
      </div>
      <header
        className="nav"
        data-scrolled={scrolled || menuOpen}
        data-tucked={tucked && !menuOpen}
        onFocus={() => setTucked(false)}
      >
        <div className="container nav__inner">
          <a href="#top" className="nav__mark" aria-label="Philip Cesar Garay, home">
            Philip Cesar Garay
          </a>

          <div className="nav__end">
            <nav aria-label="Main">
              <ul className="nav__links">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Hidden on the narrowest phones, where the menu carries it instead. */}
            <a href="#contact" className="btn btn--ink btn--small nav__cta">
              Start a project
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="btn btn--card nav__toggle"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav id="mobile-menu" aria-label="Main" className="nav__menu">
            <ul className="container">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="btn btn--ink">
                  Start a project
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
