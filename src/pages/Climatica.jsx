import PageHero from "../components/common/PageHero";
import ClimateSection from "../components/common/ClimateSection";
import CTAStrip from "../components/common/CTAStrip";

const STANDARDS = [
  {
    n: "I-REC",
    t: "Certificados de atributo renovable",
    d: "Cada MWh generado genera un I-REC auditable, trazable y negociable internacionalmente.",
  },
  {
    n: "GHG",
    t: "GHG Protocol · Alcance 2",
    d: "Documentación para reducir emisiones contabilizadas por compra de energía eléctrica.",
  },
  {
    n: "SBTi",
    t: "Science Based Targets",
    d: "Soporte técnico para empresas que fijan trayectoria 1,5 °C en su hoja de ruta.",
  },
  {
    n: "MATER",
    t: "Mercado a Término Renovable",
    d: "Asesoramos a grandes usuarios en el cumplimiento de la Ley 27.191.",
  },
  {
    n: "CDP",
    t: "Carbon Disclosure Project",
    d: "Data estandarizada para reporte anual al CDP en sección energía y clima.",
  },
  {
    n: "ISO",
    t: "ISO 14064 · Inventario GHG",
    d: "Huella de carbono corporativa con verificación de tercera parte.",
  },
];

export default function Climatica() {
  return (
    <>
      <PageHero
        eyebrow="Acción climática"
        title="La descarbonización no es futuro. Es contabilidad."
        lead="Cada kWh solar generado en Argentina desplaza emisiones reales. Documentamos, certificamos y reportamos cada tonelada de CO₂ evitada por los proyectos que ponemos en operación."
      />
      <ClimateSection />

      <section className="py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
                <span className="w-6 h-px bg-orange" />
                Compromiso documentado
              </span>
              <h2 className="text-3xl sm:text-4xl mt-4 max-w-md">
                Estándares y marcos de reporte.
              </h2>
            </div>
            <p className="text-ink/60 text-sm max-w-md lg:text-right">
              Integramos los principales marcos de reporte climático, tanto para
              exportaciones como para el Mercado a Término de Energías
              Renovables (MATER).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {STANDARDS.map((x) => (
              <div
                key={x.n}
                className="p-8 border-gray-200 border-b lg:[&:nth-last-child(-n+3)]:border-b-0 sm:[&:nth-child(2n)]:border-l lg:border-l-0 lg:[&:not(:nth-child(3n+1))]:border-l"
              >
                <div className="text-xs text-orange font-mono tracking-wider font-semibold">
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
