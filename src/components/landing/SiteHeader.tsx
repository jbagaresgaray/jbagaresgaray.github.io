"use client";

import { useEffect, useState } from "react";
import { buttonPrimary } from "./ui";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen ? "border-line bg-paper/90 backdrop-blur-md" : "border-transparent bg-paper"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-3 sm:h-[4.5rem] sm:gap-6">
        <a
          href="#top"
          className="flex min-h-11 items-center text-base font-bold tracking-[-0.01em] whitespace-nowrap sm:text-lg"
          aria-label="Philip Cesar Garay, home"
        >
          Philip Cesar Garay
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center px-3.5 text-[15px] font-medium text-ink/70 transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Visible on all but the narrowest phones, where the menu carries it instead. */}
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-md bg-ink px-4 text-sm font-semibold whitespace-nowrap text-paper transition-colors hover:bg-ink/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink max-[359px]:hidden sm:px-5 sm:text-[15px]"
          >
            Start a project
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink lg:hidden"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-line bg-paper lg:hidden">
          <ul className="shell flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line">
                <a href={link.href} onClick={() => setMenuOpen(false)} className="block py-4 text-2xl font-semibold tracking-[-0.01em]">
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <a href="#contact" onClick={() => setMenuOpen(false)} className={`${buttonPrimary} w-full`}>
                Start a project
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
