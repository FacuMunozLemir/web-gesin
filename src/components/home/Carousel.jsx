import { useEffect, useState } from "react";
import { CAROUSEL } from "../../data/carousel";

export default function Carousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % CAROUSEL.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative mt-10 rounded-2xl overflow-hidden border border-white/10 bg-blue-800/40">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {CAROUSEL.map((s, k) => (
          <div
            key={k}
            className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2"
          >
            <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 min-h-90 text-white/40 text-sm">
              {s.place}
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-between min-h-90">
              <div>
                <span className="text-orange text-xs font-semibold uppercase tracking-wider">
                  {s.tag}
                </span>
                <h3 className="text-white text-2xl mt-3">{s.title}</h3>
                <p className="text-white/70 text-sm mt-3 leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="flex gap-8 mt-8 pt-6 border-t border-white/10">
                {s.specs.map((sp, j) => (
                  <div key={j}>
                    <div className="text-white text-xl font-bold">{sp.v}</div>
                    <div className="text-white/50 text-[10px] uppercase tracking-wider mt-1">
                      {sp.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-6 sm:left-8 flex gap-1.5">
        {CAROUSEL.map((_, k) => (
          <button
            key={k}
            onClick={() => setI(k)}
            aria-label={`Ir al slide ${k + 1}`}
            className={`h-1 rounded-full transition-all ${k === i ? "w-6 bg-orange" : "w-4 bg-white/25"}`}
          />
        ))}
      </div>

      <div className="absolute bottom-5 right-5 flex gap-1.5">
        <button
          onClick={() => setI((i - 1 + CAROUSEL.length) % CAROUSEL.length)}
          aria-label="Anterior"
          className="w-9 h-9 rounded-full border border-white/20 bg-blue-900/50 backdrop-blur flex items-center justify-center text-white hover:bg-orange hover:border-orange transition"
        >
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path
              d="M9 3L5 7l4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
            />
          </svg>
        </button>
        <button
          onClick={() => setI((i + 1) % CAROUSEL.length)}
          aria-label="Siguiente"
          className="w-9 h-9 rounded-full border border-white/20 bg-blue-900/50 backdrop-blur flex items-center justify-center text-white hover:bg-orange hover:border-orange transition"
        >
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path
              d="M5 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
