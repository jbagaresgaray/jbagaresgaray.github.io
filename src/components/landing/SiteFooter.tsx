// In page order.
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
    // A colophon: who and where in one paragraph, the links beneath it.
    <footer className="footer">
      <div className="container">
        <p className="footer__colophon">
          <span className="footer__name">Philip Cesar Garay</span>, freelance UI/UX designer, full-stack developer and
          copywriter, working from Manila, Philippines (UTC+8).
        </p>
        <div className="footer__links">
          <nav aria-label="Footer">
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="label">© {new Date().getFullYear()} Philip Cesar Garay.</p>
      </div>
    </footer>
  );
}
