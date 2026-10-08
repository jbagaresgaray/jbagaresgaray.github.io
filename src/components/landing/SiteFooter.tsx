const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jbagaresgaray/" },
  { label: "GitHub", href: "https://github.com/jbagaresgaray" },
  { label: "Email", href: "mailto:dev.philipcesar@gmail.com" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <div className="shell flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-display text-lg font-semibold">Philip Cesar Garay</p>
          <p className="text-sm text-paper/60">Freelance UI/UX designer, full-stack developer and copywriter.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper/70">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-paper">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex gap-5 text-sm text-paper/70">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="shell border-t border-paper/10 py-6 text-[13px] text-paper/45">
        © {new Date().getFullYear()} Philip Cesar Garay. All rights reserved.
      </div>
    </footer>
  );
}
