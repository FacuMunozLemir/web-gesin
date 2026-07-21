import PageHero from "../components/common/PageHero";
import SolutionsSplit from "../components/common/SolutionsSplit";
import CTAStrip from "../components/common/CTAStrip";

const STATS = [
  {
    n: "142",
    l: "Proyectos residenciales",
    s: "On-grid y off-grid, 3 a 10 kWp",
  },
  { n: "28", l: "Instalaciones comerciales", s: "10 a 100 kWp, sector PyME" },
  {
    n: "9",
    l: "Plantas industriales",
    s: "Mayores a 100 kWp, incluye MW-scale",
  },
  {
    n: "3",
    l: "Proyectos PPA activos",
    s: "Contratos a 15 años con CapEx GESIN",
  },
  { n: "14", l: "Sistemas agroganaderos", s: "Bombeo, riego y refrigeración" },
  { n: "7", l: "Plantas off-grid", s: "Puestos rurales, refugios, antenas" },
];

export default function Soluciones() {
  return (
    <>
      <PageHero
        eyebrow="Soluciones"
        title="Fotovoltaica, a medida de cada demanda."
        lead="Cinco segmentos, un mismo estándar de ingeniería y gestión. Elegí el que corresponda a tu proyecto para ver alcance técnico, rangos de potencia, payback y casos reales."
      />
      <SolutionsSplit />

      <section className="py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <span className="w-6 h-px bg-orange" />
              Cifras agregadas
            </span>
            <h2 className="text-3xl sm:text-4xl mt-4">
              Lo que entregamos en números.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {STATS.map((c, i) => (
              <div
                key={c.n + i}
                className="p-8 border-gray-200 border-b lg:[&:nth-last-child(-n+3)]:border-b-0 sm:[&:nth-child(2n)]:border-l lg:border-l-0 lg:[&:not(:nth-child(3n+1))]:border-l"
              >
                <div className="text-xs text-ink/40 font-mono tracking-wider">
                  Acumulado 2019–2026
                </div>
                <div className="text-5xl font-extrabold text-blue-900 mt-4 tracking-tight">
                  {c.n}
                </div>
                <h3 className="text-lg mt-4">{c.l}</h3>
                <p className="text-ink/60 text-sm mt-2 leading-relaxed">
                  {c.s}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
