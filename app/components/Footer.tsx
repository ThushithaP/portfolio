const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <a href="/" className="font-hand text-2xl text-ink">
            <span className="text-gold">T</span>Senarath.
          </a>
          <p className="mt-3 text-sm text-ink/70 max-w-xs leading-relaxed">
            Software engineer building web, mobile, desktop, and automation
            tools — one clean release at a time.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide font-semibold text-forest mb-3">
            Navigate
          </p>
          <ul className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink/80 hover:text-forest transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide font-semibold text-forest mb-3">
            Get in touch
          </p>
          <a
            href="mailto:thushitha13@gmail.com" target="_blank"
            className="text-sm text-ink/80 hover:text-forest transition-colors block mb-3"
          >
            thushitha13@gmail.com
          </a>
          <div className="flex items-center gap-4 text-gold text-sm font-medium">
            <a href="https://www.linkedin.com/in/thushithasenarath/" target="_blank" className="hover:opacity-70 transition-opacity">
              LinkedIn
            </a>
            <a href="https://github.com/ThushithaP" target="_blank" className="hover:opacity-70 transition-opacity">
              GitHub
            </a>
            {/* <a href="#" className="hover:opacity-70 transition-opacity">
              Twitter
            </a> */}
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink/60">
          <p>© {new Date().getFullYear()} Thushitha Senarath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
