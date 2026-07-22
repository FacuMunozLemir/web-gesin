import PageHero from "../components/common/PageHero";
import ClimateSection from "../components/common/ClimateSection";
import CTAStrip from "../components/common/CTAStrip";

const VALUES = [
  {
    n: "01",
    t: "Ingeniería, no catálogo",
    d: "Cada sistema se dimensiona a partir de la curva de carga real, no de potencias prefijadas.",
  },
  {
    n: "02",
    t: "Eficiencia energética",
    d: "Con pequeños cambios podés optimizar el uso de energía en tu hogar o empresa.",
  },
  {
    n: "03",
    t: "Ajuste al cliente",
    d: "Cada proyecto se ajusta a las necesidades del cliente.",
  },
  {
    n: "04",
    t: "Transparencia financiera",
    d: "Modelo de payback auditable. Sin letras chicas, sin comisiones ocultas.",
  },
  {
    n: "05",
    t: "Plataforma propia",
    d: "Telemetría y panel de control desarrollados internamente, sin depender del fabricante de turno.",
  },
  {
    n: "06",
    t: "Trazabilidad ambiental",
    d: "Cada proyecto emite I-REC. Cada tonelada de CO₂ evitada queda certificada.",
  },
];

export default function Nosotros() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Gestión integral de demanda energética argentina."
        lead="GESIN S.A.S. nació para resolver un problema concreto: optimizar la demanda energética de tu hogar o empresa. Combinamos eficiencia energética con gestión de proyectos y fuentes de financiamiento para que puedas contar con seguridad energética sin gastar de más."
      />

      <section className="py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
                <span className="w-6 h-px bg-orange" />
                Valores operativos
              </span>
              <h2 className="text-3xl sm:text-4xl mt-4 max-w-md">
                En qué nos diferenciamos.
              </h2>
            </div>
            <p className="text-ink/60 text-sm max-w-md lg:text-right">
              No somos una empresa de marketing con instaladores tercerizados.
              Operamos como una gestora integral de demanda: análisis,
              financiamiento y responsabilidad sobre cada kWh ahorrado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.n}
                className="p-8 border border-gray-200 rounded-xl bg-white"
              >
                <div className="text-orange text-xs font-mono font-semibold tracking-wider">
                  {v.n}
                </div>
                <h4 className="text-lg mt-4">{v.t}</h4>
                <p className="text-ink/60 text-sm mt-2.5 leading-relaxed">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClimateSection />
      <CTAStrip />
    </>
  );
}
