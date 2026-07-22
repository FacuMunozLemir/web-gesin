import { Link } from "react-router-dom";
import Eyebrow from "./Eyebrow";
import Arrow from "./Arrow";

const STATS = [
  {
    v: "8.4",
    u: "GWh",
    l: "Generación renovable anual",
    trend: "↑ 32% vs. 2025",
  },
  {
    v: "3 780",
    u: "t",
    l: "CO₂ equivalente evitado",
    trend: "↑ ~equivale a 18 000 árboles",
  },
  { v: "184", u: "", l: "Proyectos en operación", trend: "en 11 provincias" },
  {
    v: "4.1",
    u: "MWp",
    l: "Capacidad instalada total",
    trend: "↑ 1.2 MWp este año",
  },
];

export default function ClimateSection() {
  return (
    <section className="py-16 sm:py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-blue-900 text-white rounded-3xl p-8 sm:p-14 overflow-hidden">
          <div
            className="absolute -top-[40%] -right-[10%] w-3/5 h-[180%] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(88,185,71,0.22) 0%, transparent 60%)",
            }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14">
            <div>
              <Eyebrow light>Acción climática</Eyebrow>
              <h2 className="text-3xl sm:text-4xl mt-5 max-w-xs">
                Cada kWp instalado descarboniza la matriz.
              </h2>
              <p className="text-white/80 text-[15px] leading-relaxed mt-6 max-w-md">
                Generar energía solar en punto de consumo es la manera más
                directa de reducir emisiones: desplaza generación térmica de gas
                y diésel, elimina pérdidas de transporte y alarga la vida útil
                de la infraestructura existente.
              </p>
              <p className="text-white/80 text-[15px] leading-relaxed mt-4 max-w-md">
                GESIN certifica proyectos bajo estándar I-REC y acompaña a
                clientes corporativos en sus reportes GRI, SBTi y Pacto Global.
              </p>
              <Link
                to="/accion-climatica"
                className="inline-flex items-center gap-2 bg-orange text-white font-semibold text-sm px-5 py-3 rounded-lg hover:brightness-95 transition mt-8"
              >
                Ver compromiso climático <Arrow />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-5 sm:gap-6">
              {STATS.map((s) => (
                <div
                  key={s.l}
                  className="border border-white/10 rounded-xl bg-white/[0.03] p-6"
                >
                  <div className="text-3xl sm:text-4xl font-bold">
                    {s.v}
                    {s.u && (
                      <span className="text-lg text-green ml-1">{s.u}</span>
                    )}
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/60 mt-2.5">
                    {s.l}
                  </div>
                  <div className="text-green text-xs font-medium mt-2.5">
                    {s.trend}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
