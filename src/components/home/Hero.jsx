import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Arrow from "../common/Arrow";

export default function Hero() {
  return (
    <section className="relative bg-blue-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 70% 30%, black 30%, transparent 75%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] max-w-2xl">
          Gestión integral de{" "}
          <span className="text-orange">demanda energética</span> para Argentina
          productiva.
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mt-6 leading-relaxed">
          Gestión integral de proyecto, financiamiento, ingeniería, provisión e
          instalación de sistemas fotovoltaicos on-grid, off-grid y de gran
          demanda. ROI desde los 2 años.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          <Link
            to="/calculadora"
            className="inline-flex items-center gap-2 bg-orange text-white font-semibold text-sm px-5 py-3 rounded-lg hover:brightness-95 transition"
          >
            Calcular ahorro <Arrow />
          </Link>
          <Link
            to="/soluciones"
            className="inline-flex items-center gap-2 border border-white/25 text-white font-semibold text-sm px-5 py-3 rounded-lg hover:bg-white/5 hover:border-white transition"
          >
            Ver soluciones
          </Link>
        </div>

        <Carousel />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/15">
          {[
            { v: "184", u: "", l: "Proyectos entregados" },
            { v: "4.1", u: "MWp", l: "Capacidad instalada" },
            { v: "2.8", u: "años", l: "Payback promedio" },
            { v: "11", u: "", l: "Provincias operando" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-extrabold">
                {s.v}
                {s.u && (
                  <span className="text-orange text-base font-semibold ml-1">
                    {s.u}
                  </span>
                )}
              </div>
              <div className="text-white/60 text-xs uppercase tracking-wider mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
