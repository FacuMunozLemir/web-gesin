import Eyebrow from "../common/Eyebrow";

const BRANDS = [
  "LONGi",
  "JA Solar",
  "Trina",
  "Huawei",
  "Sungrow",
  "Fronius",
  "Victron",
  "BYD",
  "Schneider",
  "ABB",
  "SMA",
  "Canadian",
];

export default function Brands() {
  return (
    <section className="py-16 sm:py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow>Marcas y alianzas</Eyebrow>
            <h2 className="text-3xl sm:text-4xl mt-4 max-w-md">
              Equipos Tier-1, proveedores certificados.
            </h2>
          </div>
          <p className="text-ink/60 text-sm max-w-md lg:text-right">
            Trabajamos exclusivamente con fabricantes clasificados Tier-1 por
            BloombergNEF y homologados para el mercado argentino por el ENRE.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
          {BRANDS.map((b) => (
            <div
              key={b}
              className="bg-white p-6 flex items-center justify-center text-sm font-semibold text-ink/50 hover:text-blue-900 hover:bg-bg-tint transition-colors"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
