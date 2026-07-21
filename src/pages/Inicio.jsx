import Hero from "../components/home/Hero";
import ServicesGrid from "../components/home/ServicesGrid";
import ProcessStrip from "../components/home/ProcessStrip";
import Brands from "../components/home/Brands";
import CTAStrip from "../components/common/CTAStrip";

export default function Inicio() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      {/* TODO: <SolutionsSplit /> — se agrega en el paso "página Soluciones" */}
      {/* TODO: <Calculator /> — se agrega en el paso "página Calculadora" */}
      <ProcessStrip />
      {/* TODO: <ClimateSection /> — se agrega en el paso "página Acción climática" */}
      <Brands />
      <CTAStrip />
    </>
  );
}
