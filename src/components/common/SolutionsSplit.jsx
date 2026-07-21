import { useState } from "react";
import { SOLUTIONS } from "../../data/solutions";
import Eyebrow from "./Eyebrow";

export default function SolutionsSplit() {
  const [active, setActive] = useState("residencial");
  const s = SOLUTIONS.find((x) => x.id === active);

  return (
    <section className="py-16 sm:py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow>Soluciones por segmento</Eyebrow>
            <h2 className="text-3xl sm:text-4xl mt-4 max-w-md">
              Una respuesta para cada tipo de demanda.
            </h2>
          </div>
          <p className="text-ink/60 text-sm max-w-md lg:text-right">
            Cada proyecto se dimensiona a partir de la curva de carga real del
            usuario, la irradiación local y la tarifa vigente. Elegí un segmento
            para ver el enfoque.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] border border-gray-200 rounded-2xl bg-white overflow-hidden">
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-r border-gray-200 bg-bg-tint py-2 lg:py-6">
            {SOLUTIONS.map((sol) => (
              <button
                key={sol.id}
                onClick={() => setActive(sol.id)}
                className={`text-left shrink-0 lg:shrink px-6 py-4 lg:px-7 lg:py-5 border-l-4 transition-colors ${
                  active === sol.id
                    ? "bg-white border-orange"
                    : "border-transparent hover:bg-black/[0.03]"
                }`}
              >
                <div className="flex items-center gap-2.5 font-semibold text-[15px] text-ink whitespace-nowrap lg:whitespace-normal">
                  <span className="text-ink/40 font-mono text-[10px]">
                    {sol.idx}
                  </span>
                  {sol.title}
                </div>
                <div className="text-xs text-ink/60 mt-1 lg:ml-[26px] hidden sm:block">
                  {sol.sub}
                </div>
              </button>
            ))}
          </div>

          <div className="p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl">{s.title}</h3>
              <p className="text-ink/60 mt-3 leading-relaxed">{s.lead}</p>
              <div className="flex flex-col gap-4 mt-8">
                {s.features.map((f, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="w-4.5 h-4.5 rounded-full bg-green text-white flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10">
                        <path
                          d="M2 5l2 2 4-4"
                          stroke="white"
                          strokeWidth="1.8"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <div>
                      <div className="text-sm font-medium text-ink">{f.t}</div>
                      <div className="text-xs text-ink/60 mt-0.5">{f.s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-900 rounded-xl p-8 text-white flex flex-col justify-between min-h-70">
              <span className="text-white/40 text-sm">Render · {s.title}</span>
              <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-white/10">
                {s.kpis.map((k, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold">{k.v}</div>
                    <div className="text-white/60 text-xs mt-1">{k.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
