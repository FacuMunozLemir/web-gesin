import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoNegativa from "../../assets/img/logo-negativa.png";

const NAV_LINKS = [
  { to: "/calculadora", label: "Calculadora" },
  { to: "/accion-climatica", label: "Acción climática" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/recursos", label: "Recursos" },
  { to: "/contacto", label: "Contacto" },
];

const SOLUTIONS = [
  {
    id: "residencial",
    title: "Residencial",
    desc: "On-grid y off-grid con baterías",
    icon: (
      <path
        d="M2 7l6-5 6 5v7H2V7z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
    ),
  },
  {
    id: "comercial",
    title: "Comercial",
    desc: "PyMEs y puntos de venta",
    icon: (
      <>
        <rect
          x="2"
          y="3"
          width="12"
          height="11"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M2 7h12M6 14V7M10 14V7"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </>
    ),
  },
  {
    id: "industrial",
    title: "Industrial",
    desc: "Gran demanda, tarifa T3",
    icon: (
      <path
        d="M1 14V7l5 3V7l5 3V4l4 2v8H1z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
    ),
  },
  {
    id: "agro",
    title: "Agroganadero",
    desc: "Riego, tambo, feed-lot",
    icon: (
      <path
        d="M3 13c2-4 6-6 10-6M3 13h10"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
    ),
  },
  {
    id: "offgrid",
    title: "Off-grid",
    desc: "Zonas rurales sin red",
    icon: (
      <>
        <circle
          cx="8"
          cy="8"
          r="3"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M8 1v2M8 13v2M1 8h2M13 8h2"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </>
    ),
  },
];

const linkClass = ({ isActive }) =>
  `relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
    isActive
      ? "text-white after:content-[''] after:absolute after:left-3.5 after:right-3.5 after:-bottom-0.5 after:h-0.5 after:bg-orange"
      : "text-white/85 hover:bg-white/10 hover:text-white"
  }`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="sticky top-0 z-30 bg-blue-900 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          onClick={closeMobile}
          aria-label="GESIN — Gestión integral de demanda energética"
        >
          <img src={logoNegativa} alt="GESIN" className="h-10 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          <NavLink to="/" end className={linkClass}>
            Inicio
          </NavLink>

          <div className="relative group">
            <NavLink
              to="/soluciones"
              className={linkClass + " inline-flex items-center gap-1"}
            >
              Soluciones
              <svg width="10" height="10" viewBox="0 0 10 10">
                <path
                  d="M1 3l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </NavLink>
            <div className="absolute top-full left-0 pt-2 opacity-0 pointer-events-none translate-y-[-4px] transition-all group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
              <div className="bg-white border border-gray-200 rounded-xl shadow-xl p-2 min-w-70">
                {SOLUTIONS.map((s) => (
                  <Link
                    key={s.id}
                    to="/soluciones"
                    className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-bg-tint"
                  >
                    <span className="w-8 h-8 rounded-md bg-[#eef3f8] text-blue-900 grid place-items-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        {s.icon}
                      </svg>
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">
                        {s.title}
                      </span>
                      <span className="block text-xs text-ink/60 mt-0.5">
                        {s.desc}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-orange text-white font-semibold text-sm px-4 py-2.5 rounded-lg hover:brightness-95 transition"
          >
            Cotizar
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                fill="none"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden bg-blue-900 border-t border-white/10 px-6 py-4 flex flex-col gap-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <NavLink to="/" end className={linkClass} onClick={closeMobile}>
            Inicio
          </NavLink>

          <span className="px-3.5 pt-3 pb-1 text-xs uppercase tracking-wide text-white/50">
            Soluciones
          </span>
          {SOLUTIONS.map((s) => (
            <Link
              key={s.id}
              to="/soluciones"
              onClick={closeMobile}
              className="px-3.5 py-2 rounded-lg text-sm text-white/85 hover:bg-white/10 hover:text-white"
            >
              {s.title}
            </Link>
          ))}

          <div className="h-px bg-white/10 my-2" />

          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={linkClass}
              onClick={closeMobile}
            >
              {l.label}
            </NavLink>
          ))}

          <Link
            to="/contacto"
            onClick={closeMobile}
            className="mt-3 inline-flex items-center justify-center gap-2 bg-orange text-white font-semibold text-sm px-4 py-3 rounded-lg"
          >
            Cotizar
          </Link>
        </div>
      )}
    </nav>
  );
}
