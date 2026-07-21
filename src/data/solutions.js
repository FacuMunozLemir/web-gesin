export const SOLUTIONS = [
  {
    id: "residencial",
    title: "Residencial",
    idx: "01",
    sub: "Casas, PH y barrios cerrados",
    lead: "Sistemas on-grid que inyectan excedentes a red bajo Ley 27.424, y off-grid con bancos de baterías de litio para zonas sin conexión.",
    features: [
      {
        t: "On-grid con medidor bidireccional",
        s: "Inyección a red y facturación neta.",
      },
      {
        t: "Off-grid con baterías LiFePO₄",
        s: "Autonomía de 1 a 3 días según diseño.",
      },
      {
        t: "Monitoreo desde app móvil",
        s: "Producción, consumo y ahorro en tiempo real.",
      },
      {
        t: "Financiamiento hasta 24 cuotas",
        s: "Con bancos aliados y leasing verde.",
      },
    ],
    kpis: [
      { v: "3–10 kWp", l: "Rango típico" },
      { v: "4 años", l: "ROI promedio" },
      { v: "70%", l: "Reducción factura" },
      { v: "25 años", l: "Vida útil" },
    ],
  },
  {
    id: "comercial",
    title: "Comercial",
    idx: "02",
    sub: "PyMEs, oficinas y locales",
    lead: "Plantas fotovoltaicas medianas integradas a la actividad comercial. Amortizables vía reducción directa de facturación y generación distribuida.",
    features: [
      {
        t: "Dimensionamiento según curva horaria",
        s: "Maximizamos autoconsumo productivo.",
      },
      {
        t: "Integración arquitectónica",
        s: "Estructuras sobre cubierta, carports o suelo.",
      },
      {
        t: "Cumplimiento tarifa T2/T3",
        s: "Optimización de potencia contratada.",
      },
      {
        t: "Contrato de performance",
        s: "Garantía de producción anual kWh/kWp.",
      },
    ],
    kpis: [
      { v: "10–100 kWp", l: "Rango típico" },
      { v: "3 años", l: "ROI promedio" },
      { v: "60%", l: "Reducción factura" },
      { v: "25 años", l: "Vida útil" },
    ],
  },
  {
    id: "industrial",
    title: "Industrial — Gran demanda",
    idx: "03",
    sub: "Industrias T3 y MATER",
    lead: "Soluciones de escala MW con contratos PPA, participación en el Mercado a Término (MATER) y modelos de autogeneración distribuida para grandes usuarios.",
    features: [
      {
        t: "Proyectos 100 kWp – 5 MW",
        s: "En cubierta, suelo o solar carports.",
      },
      {
        t: "Estudios de impacto en red",
        s: "Coordinación con CAMMESA y distribuidora.",
      },
      {
        t: "Modelo PPA sin CapEx",
        s: "Nosotros invertimos, usted paga el kWh.",
      },
      {
        t: "SCADA y telemetría industrial",
        s: "Integración con BMS y ERP del cliente.",
      },
    ],
    kpis: [
      { v: "100 kWp+", l: "Rango típico" },
      { v: "2.5 años", l: "ROI promedio" },
      { v: "45%", l: "Reducción factura" },
      { v: "30 años", l: "Vida útil" },
    ],
  },
  {
    id: "agro",
    title: "Agroganadero",
    idx: "04",
    sub: "Tambos, feed-lots, riego",
    lead: "Energía solar para operaciones rurales: bombeo, refrigeración de leche, molinos y sistemas de riego presurizado. Alta compatibilidad con consumos diurnos.",
    features: [
      { t: "Bombeo solar directo", s: "Sin baterías, acople a electrobomba." },
      {
        t: "Refrigeración de tambos",
        s: "Autoconsumo coincidente con pico de ordeñe.",
      },
      {
        t: "Estructuras resistentes",
        s: "Diseñadas para vientos patagónicos y pampeanos.",
      },
      { t: "Financiamiento productivo", s: "Líneas PyME-BICE y Ley 27.191." },
    ],
    kpis: [
      { v: "20–500 kWp", l: "Rango típico" },
      { v: "3.5 años", l: "ROI promedio" },
      { v: "55%", l: "Reducción OPEX" },
      { v: "25 años", l: "Vida útil" },
    ],
  },
  {
    id: "offgrid",
    title: "Off-grid",
    idx: "05",
    sub: "Zonas rurales sin conexión",
    lead: "Sistemas aislados con generación, acumulación y respaldo diesel opcional. Diseñados para autonomía plena en campos, puestos y refugios.",
    features: [
      {
        t: "Dimensionado con autonomía ≥ 2 días",
        s: "Banco de baterías LiFePO₄ o Pb-ácido.",
      },
      {
        t: "Inversor híbrido con respaldo",
        s: "Grupo electrógeno como backup invernal.",
      },
      {
        t: "Gestión remota satelital",
        s: "Monitoreo sin dependencia de red celular.",
      },
      { t: "Mantenimiento in-situ", s: "Rondas periódicas programadas." },
    ],
    kpis: [
      { v: "2–30 kWp", l: "Rango típico" },
      { v: "5 años", l: "ROI vs. GE" },
      { v: "100%", l: "Autonomía" },
      { v: "25 años", l: "Vida útil" },
    ],
  },
];
