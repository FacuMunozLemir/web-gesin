import PageHero from "../components/common/PageHero";
import Calculator from "../components/common/Calculator";
import CTAStrip from "../components/common/CTAStrip";

const ASSUMPTIONS = [
  {
    n: "01",
    t: "Irradiación",
    d: "Promedio kWh/m²/día por región (NASA SSE): NOA 5,6 · Centro 4,8 · Cuyo 5,9 · Patagonia 4,2.",
  },
  {
    n: "02",
    t: "Pérdidas (PR)",
    d: "Performance Ratio del 78% incluye temperatura, mismatch, cableado, inversor y ensuciamiento.",
  },
  {
    n: "03",
    t: "Paneles",
    d: "Módulos monocristalinos de 550 Wp, bifaciales, garantía de 25 años al 84,8% de producción.",
  },
  {
    n: "04",
    t: "CapEx",
    d: "USD/kWp llave en mano — 1.100 on-grid · 1.850 off-grid con baterías LiFePO₄.",
  },
  {
    n: "05",
    t: "Tarifa",
    d: "Precio kWh de referencia: T1-R $95 · T2 $110 · T3 $125 (valores aproximados para 04/2026).",
  },
  {
    n: "06",
    t: "Factor de emisión",
    d: "0,45 kg CO₂ por kWh de la matriz argentina — fuente: Balance Energético Nacional.",
  },
];

export default function Calculadora() {
  return (
    <>
      <PageHero
        eyebrow="Calculadora · Dimensionador"
        title="Cuánta potencia necesitás — y cuánto podés ahorrar."
        lead="Ingresá tu consumo mensual, tarifa y zona geográfica. En segundos tenés potencia sugerida, cantidad de paneles, inversión estimada, payback y CO₂ evitado."
      />

      <section className="py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <Calculator />
        </div>
      </section>

      <section className="py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
                <span className="w-6 h-px bg-orange" />
                Supuestos del cálculo
              </span>
              <h2 className="text-3xl sm:text-4xl mt-4 max-w-md">
                Transparente, auditable.
              </h2>
            </div>
            <p className="text-ink/60 text-sm max-w-md lg:text-right">
              Los resultados son orientativos. Un relevamiento técnico de GESIN
              ajusta el dimensionado al consumo horario real, la estructura
              disponible y las protecciones eléctricas existentes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {ASSUMPTIONS.map((x) => (
              <div
                key={x.n}
                className="p-8 border-gray-200 border-b lg:[&:nth-last-child(-n+3)]:border-b-0 sm:[&:nth-child(2n)]:border-l lg:border-l-0 lg:[&:not(:nth-child(3n+1))]:border-l"
              >
                <div className="text-xs text-ink/40 font-mono tracking-wider">
                  {x.n}
                </div>
                <h3 className="text-lg mt-5">{x.t}</h3>
                <p className="text-ink/60 text-sm mt-2.5 leading-relaxed">
                  {x.d}
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
