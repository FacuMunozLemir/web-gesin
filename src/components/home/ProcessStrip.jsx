import Eyebrow from "../common/Eyebrow";

const STEPS = [
  {
    n: "01",
    t: "Relevamiento",
    d: "Visita técnica, curva de consumo, análisis de factura y estructura disponible.",
  },
  {
    n: "02",
    t: "Ingeniería",
    d: "Dimensionado en PVsyst, selección de equipos, presupuesto y cronograma.",
  },
  {
    n: "03",
    t: "Instalación",
    d: "Obra civil y eléctrica, montaje de planta y puesta en marcha.",
  },
  {
    n: "04",
    t: "Operación",
    d: "Alta como usuario-generador, telemetría 24/7 y mantenimiento preventivo.",
  },
];

export default function ProcessStrip() {
  return (
    <section className="py-16 sm:py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow>Cómo trabajamos</Eyebrow>
            <h2 className="text-3xl sm:text-4xl mt-4 max-w-md">
              Cuatro etapas, una sola empresa.
            </h2>
          </div>
          <p className="text-ink/60 text-sm max-w-md lg:text-right">
            No tercerizamos ingeniería ni instalación. Desde la primera visita
            técnica hasta el mantenimiento anual, el mismo equipo acompaña tu
            proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((s) => (
            <div key={s.n} className="pt-5 border-t-2 border-orange">
              <div className="text-orange text-xs font-semibold tracking-wider">
                {s.n} / 04
              </div>
              <h4 className="text-xl mt-3">{s.t}</h4>
              <p className="text-ink/60 text-sm mt-2.5 leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
