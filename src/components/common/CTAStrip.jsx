import { Link } from "react-router-dom";
import Eyebrow from "./Eyebrow";
import Arrow from "./Arrow";

export default function CTAStrip() {
  return (
    <section className="py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-900 rounded-[20px] p-10 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 text-white">
          <div>
            <Eyebrow light>Siguiente paso</Eyebrow>
            <h2 className="text-3xl sm:text-4xl mt-4">
              ¿Cuánto podés ahorrar con solar?
            </h2>
            <p className="text-white/70 mt-3 max-w-md">
              Calculamos tu potencia, ahorro y payback a partir del consumo
              mensual. Gratis y sin compromiso.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Link
              to="/calculadora"
              className="inline-flex items-center justify-center gap-2 bg-orange text-white font-semibold text-sm px-5 py-3 rounded-lg hover:brightness-95 transition"
            >
              Abrir calculadora <Arrow />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-semibold text-sm px-5 py-3 rounded-lg hover:bg-white/5 hover:border-white transition"
            >
              Hablar con un especialista
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
