import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { buildWhatsAppLink, site } from "../data/site";

const NAV_LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/menu", label: "Menú" },
  { to: "/historia", label: "Eventos" },
  { to: "/nosotros", label: "Equipo" },
  { to: "/contacto", label: "Contacto" },
];

const navLinkClass = ({ isActive }) =>
  `relative py-2 text-sm font-bold uppercase tracking-wide transition-colors hover:text-primary ${
    isActive ? "text-primary" : "text-heading"
  }`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-white/0"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link
          to="/"
          className={`font-heading text-3xl leading-none tracking-wide transition ${
            scrolled ? "text-heading" : "text-white"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Pizza <span className="text-primary">Cabasa</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
                  scrolled ? "hover:text-primary" : "text-white hover:text-secondary"
                } ${isActive ? (scrolled ? "text-primary" : "text-secondary") : scrolled ? "text-heading" : "text-white"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={buildWhatsAppLink("Hola! Quiero hacer un pedido 🍕")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold uppercase text-white transition hover:bg-primary-dark"
          >
            <i className="fab fa-whatsapp" /> {site.whatsappDisplay}
          </a>
        </div>

        <button
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden ${
            scrolled ? "text-heading" : "text-white"
          }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span className={`h-0.5 w-7 bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-7 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-7 bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white shadow-lg lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={navLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={buildWhatsAppLink("Hola! Quiero hacer un pedido 🍕")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold uppercase text-white"
              >
                <i className="fab fa-whatsapp" /> Pedir por WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
