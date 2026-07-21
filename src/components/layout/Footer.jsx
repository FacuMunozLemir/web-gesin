import { Link } from "react-router-dom";
import logoNegativa from "../../assets/img/logo-negativa.png";
import logoIsotipo from "../../assets/img/logo-isotipo.png";

export default function Footer() {
  return (
    <footer className="relative bg-blue-900 text-white pt-16 overflow-hidden">
      <img
        src={logoIsotipo}
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute -right-16 -bottom-16 w-96 opacity-5 pointer-events-none select-none"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-1">
            <img src={logoNegativa} alt="GESIN" className="h-9 w-auto mb-4" />
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              GESIN S.A.S. — Diseño de proyecto, financiamiento, ingeniería,
              provisión e instalación de sistemas de generación solar
              fotovoltaica y gestión de demanda energética para todo tipo de
              usuarios.
            </p>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-wide text-white/50 mb-4">
              Soluciones
            </h5>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                "Residencial",
                "Comercial",
                "Industrial",
                "Agroganadero",
                "Off-grid",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/soluciones"
                    className="hover:text-orange transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-wide text-white/50 mb-4">
              Empresa
            </h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link
                  to="/nosotros"
                  className="hover:text-orange transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/accion-climatica"
                  className="hover:text-orange transition-colors"
                >
                  Acción climática
                </Link>
              </li>
              <li>
                <Link
                  to="/recursos"
                  className="hover:text-orange transition-colors"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link
                  to="/calculadora"
                  className="hover:text-orange transition-colors"
                >
                  Calculadora
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="hover:text-orange transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-wide text-white/50 mb-4">
              Contacto
            </h5>
            <div className="space-y-2.5 text-sm text-white/80">
              <div className="flex gap-2.5">
                <span className="text-orange">📍</span>
                <span>
                  Argentina
                  <br />
                  Oficinas centrales
                </span>
              </div>
              <div className="flex gap-2.5">
                <span className="text-orange">✆</span>
                <span>+54 9 11 0000-0000</span>
              </div>
              <div className="flex gap-2.5">
                <span className="text-orange">✉</span>
                <span>contacto@gesin.com.ar</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 py-6 text-xs text-white/50">
          <span>
            © {new Date().getFullYear()} GESIN S.A.S. · Todos los derechos
            reservados
          </span>
          <span>v.1.0</span>
        </div>
      </div>
    </footer>
  );
}
