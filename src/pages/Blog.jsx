import PageHero from "../components/common/PageHero";
import CTAStrip from "../components/common/CTAStrip";

const POSTS = [
  {
    cat: "Regulación",
    t: "Balance neto vs. facturación neta: qué cambia para el usuario-generador en 2026",
    e: "Análisis de la resolución ENRE y su impacto real sobre el payback de sistemas residenciales on-grid.",
    d: "18 Abr · 2026",
    r: "6 min",
  },
  {
    cat: "Técnica",
    t: "Por qué los paneles bifaciales ganan terreno en proyectos comerciales",
    e: "Ganancia de producción del 8% al 14% dependiendo del albedo y ángulo de inclinación.",
    d: "02 Abr · 2026",
    r: "4 min",
  },
  {
    cat: "Caso",
    t: "Tambo en Tandil: cómo 60 kWp eliminaron 42.000 L de gasoil anuales",
    e: "Dimensionado, medición y resultado operativo de un caso agroganadero de gran impacto.",
    d: "21 Mar · 2026",
    r: "7 min",
  },
  {
    cat: "Mercado",
    t: "Precio del kWh solar en Argentina: proyección a 2028",
    e: "Qué esperar del LCOE local dados los precios internacionales y el tipo de cambio.",
    d: "05 Mar · 2026",
    r: "5 min",
  },
  {
    cat: "Regulación",
    t: "Ley 27.424 y MATER: guía para grandes usuarios",
    e: "Comparativa de los dos regímenes que aplican a industrias de alta demanda.",
    d: "14 Feb · 2026",
    r: "8 min",
  },
  {
    cat: "Técnica",
    t: "Baterías LiFePO₄ vs. plomo-ácido en instalaciones off-grid",
    e: "TCO a 10 años considerando ciclos, profundidad de descarga y degradación.",
    d: "28 Ene · 2026",
    r: "5 min",
  },
];

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Recursos · Blog técnico"
        title="Lo que escribimos para nuestros clientes."
        lead="Notas técnicas, análisis regulatorio y casos reales. Publicamos en promedio dos artículos por mes, sin contenido promocional."
      />

      <section className="py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-6">
            {POSTS.map((p, i) => (
              <article
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white flex flex-col cursor-pointer hover:border-blue-900 transition-colors"
              >
                <div
                  className="aspect-[16/10] relative flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 12px), linear-gradient(135deg, var(--color-blue-700), var(--color-blue-900))",
                  }}
                >
                  <span className="font-mono text-[11px] text-white/50 border border-dashed border-white/20 rounded px-2.5 py-1.5">
                    Imagen · {p.cat}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-orange">
                    {p.cat}
                  </span>
                  <h4 className="text-lg mt-2.5 leading-snug">{p.t}</h4>
                  <p className="text-ink/60 text-[13.5px] mt-2.5 leading-relaxed flex-1">
                    {p.e}
                  </p>
                  <div className="flex justify-between font-mono text-[11px] text-ink/40 mt-4 pt-4 border-t border-gray-200">
                    <span>{p.d}</span>
                    <span>{p.r} lectura</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
