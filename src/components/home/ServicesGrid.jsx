import { SERVICES } from "../../data/services";
import Eyebrow from "../common/Eyebrow";
import Arrow from "../common/Arrow";

export default function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow>Nuestros servicios</Eyebrow>
            <h2 className="text-3xl sm:text-4xl mt-4 max-w-md">
              Del asesoramiento a la puesta en marcha.
            </h2>
          </div>
          <p className="text-ink/60 text-sm max-w-md lg:text-right">
            Acompañamos el ciclo completo de un proyecto fotovoltaico:
            viabilidad técnica, ingeniería, provisión de equipos, obra civil y
            eléctrica, trámites regulatorios y operación post-venta.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 rounded-2xl overflow-hidden bg-white">
          {SERVICES.map((s) => (
            <div
              key={s.n}
              className="group relative p-8 border-gray-200 border-b lg:[&:nth-last-child(-n+3)]:border-b-0 sm:[&:nth-child(2n)]:border-l lg:border-l-0 lg:[&:not(:nth-child(3n+1))]:border-l hover:bg-bg-tint transition-colors"
            >
              <div className="text-xs text-ink/40 font-mono tracking-wider">
                {s.n}
              </div>
              <div className="w-11 h-11 rounded-lg bg-[#eef3f8] text-blue-900 flex items-center justify-center mt-4">
                <svg width="22" height="22" viewBox="0 0 24 24">
                  {s.icon}
                </svg>
              </div>
              <h3 className="text-lg mt-6">{s.title}</h3>
              <p className="text-ink/60 text-sm mt-2.5 leading-relaxed">
                {s.desc}
              </p>
              <span className="absolute bottom-8 right-8 text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity">
                <Arrow size={16} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
