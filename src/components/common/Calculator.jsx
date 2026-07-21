import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "./Arrow";

const IRRADIACION = { norte: 5.6, centro: 4.8, sur: 4.2, cuyo: 5.9 };
const PRECIO_KWH = { "T1-R": 95, T2: 110, T3: 125 };
const USD = 1100;

function PillField({ label, value, onChange, options }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold mb-2.5">{label}</label>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => (
          <button
            key={o.k}
            type="button"
            onClick={() => onChange(o.k)}
            className={`px-3.5 py-2 border rounded-full text-[13px] font-medium transition-colors ${
              value === o.k
                ? "bg-blue-900 text-white border-blue-900"
                : "bg-white text-ink/60 border-gray-200 hover:border-blue-900 hover:text-blue-900"
            }`}
          >
            {o.l}
          </button>
        ))}
      </div>
    </div>
  );
}

function ResultCell({ label, value, unit, sub }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <div className="text-[10px] font-mono uppercase tracking-wider text-ink/60">
        {label}
      </div>
      <div className="text-[26px] font-bold mt-2">
        {value}
        {unit && <span className="text-[13px] text-orange ml-1">{unit}</span>}
      </div>
      <div className="text-[11.5px] font-mono text-ink/60 mt-1.5">{sub}</div>
    </div>
  );
}

export default function Calculator() {
  const [kwh, setKwh] = useState(450);
  const [tarifa, setTarifa] = useState("T1-R");
  const [zona, setZona] = useState("centro");
  const [tipo, setTipo] = useState("on-grid");

  const irradiacion = IRRADIACION[zona];
  const precioKwh = PRECIO_KWH[tarifa];
  const capexKwp = tipo === "on-grid" ? 1100 : 1850;

  const calc = useMemo(() => {
    const consumoAnual = kwh * 12;
    const produccionPorKwp = irradiacion * 365 * 0.78;
    const kwpSugerido = Math.max(
      1.5,
      Math.round((consumoAnual / produccionPorKwp) * 10) / 10,
    );
    const paneles = Math.ceil((kwpSugerido * 1000) / 550);
    const produccionAnual = Math.round(kwpSugerido * produccionPorKwp);
    const ahorroAnual = Math.round(produccionAnual * precioKwh);
    const ahorroMensual = Math.round(ahorroAnual / 12);
    const capexUSD = Math.round(kwpSugerido * capexKwp);
    const capexARS = capexUSD * USD;
    const payback = +(capexARS / ahorroAnual).toFixed(1);
    const co2Anual = Math.round(produccionAnual * 0.45);
    const cobertura = Math.min(
      100,
      Math.round((produccionAnual / consumoAnual) * 100),
    );
    return {
      kwpSugerido,
      paneles,
      produccionAnual,
      ahorroAnual,
      ahorroMensual,
      capexUSD,
      payback,
      co2Anual,
      cobertura,
    };
  }, [kwh, irradiacion, precioKwh, capexKwp]);

  const fmt = (n) => n.toLocaleString("es-AR");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border border-gray-200 rounded-[20px] overflow-hidden bg-white">
      <div className="p-8 sm:p-12 lg:border-r border-gray-200">
        <h3 className="text-2xl mb-2">Dimensionador fotovoltaico</h3>
        <p className="text-ink/60 text-sm mb-8">
          Basado en irradiación local, pérdidas del sistema (PR 78%) y precio
          promedio de tarifa. Resultados orientativos.
        </p>

        <div className="mb-6">
          <label className="flex justify-between items-baseline text-sm font-semibold mb-2.5">
            Consumo mensual promedio
            <span className="font-mono text-blue-900 text-sm font-normal">
              {fmt(kwh)} kWh
            </span>
          </label>
          <input
            type="range"
            min="100"
            max="3000"
            step="50"
            value={kwh}
            onChange={(e) => setKwh(+e.target.value)}
            className="w-full h-1.5 rounded-full bg-gray-200 accent-blue-900 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-ink/40 mt-1.5">
            <span>100 kWh</span>
            <span>3.000 kWh</span>
          </div>
        </div>

        <PillField
          label="Tipo de tarifa"
          value={tarifa}
          onChange={setTarifa}
          options={[
            { k: "T1-R", l: "T1 Residencial" },
            { k: "T2", l: "T2 Comercial" },
            { k: "T3", l: "T3 Industrial" },
          ]}
        />

        <PillField
          label="Zona geográfica"
          value={zona}
          onChange={setZona}
          options={[
            { k: "norte", l: "NOA / NEA" },
            { k: "centro", l: "Centro" },
            { k: "cuyo", l: "Cuyo" },
            { k: "sur", l: "Patagonia" },
          ]}
        />

        <PillField
          label="Tipo de instalación"
          value={tipo}
          onChange={setTipo}
          options={[
            { k: "on-grid", l: "On-grid (inyección)" },
            { k: "off-grid", l: "Off-grid (baterías)" },
          ]}
        />
      </div>

      <div className="p-8 sm:p-12 bg-bg-tint">
        <div className="flex items-center justify-between mb-8">
          <span className="text-[11px] font-mono uppercase tracking-wider text-ink/60">
            Resultado del dimensionado
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-green">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            Calculando en vivo
          </span>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-7 mb-4">
          <div className="text-[11px] font-mono uppercase tracking-wider text-ink/60">
            Potencia sugerida
          </div>
          <div className="text-5xl font-bold text-blue-900 mt-3 tracking-tight">
            {calc.kwpSugerido}
            <span className="text-2xl text-orange ml-1">kWp</span>
          </div>
          <div className="text-ink/60 text-sm mt-2.5">
            ≈ {calc.paneles} paneles de 550 W · cubierta requerida ~
            {Math.round(calc.paneles * 2.6)} m²
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <ResultCell
            label="Ahorro mensual"
            value={`$ ${fmt(calc.ahorroMensual)}`}
            sub={`ARS · a valor tarifa ${tarifa}`}
          />
          <ResultCell
            label="Inversión estimada"
            value={`USD ${fmt(calc.capexUSD)}`}
            sub="Llave en mano"
          />
          <ResultCell
            label="Payback"
            value={calc.payback}
            unit="años"
            sub="Recupero simple"
          />
          <ResultCell
            label="CO₂ evitado"
            value={fmt(calc.co2Anual)}
            unit="kg/año"
            sub={`${(calc.co2Anual / 1000).toFixed(1)} toneladas anuales`}
          />
        </div>

        <div className="mt-5">
          <div className="flex justify-between text-[11px] font-mono uppercase tracking-wider text-ink/60 mb-2">
            <span>Cobertura del consumo</span>
            <span>{calc.cobertura}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green to-orange transition-all duration-500"
              style={{ width: `${calc.cobertura}%` }}
            />
          </div>
        </div>

        <Link
          to="/contacto"
          className="mt-6 w-full flex items-center justify-center gap-2 bg-blue-900 text-white rounded-lg py-3.5 font-semibold text-sm hover:bg-blue-800 transition"
        >
          Solicitar cotización personalizada <Arrow />
        </Link>
      </div>
    </div>
  );
}
