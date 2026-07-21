import Hero from "../components/home/Hero";
import ServicesGrid from "../components/home/ServicesGrid";
import ProcessStrip from "../components/home/ProcessStrip";
import Brands from "../components/home/Brands";
import CTAStrip from "../components/common/CTAStrip";
import SolutionsSplit from "../components/common/SolutionsSplit";
import Calculator from "../components/common/Calculator";

export default function Inicio() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <SolutionsSplit />
      <section className="py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <Calculator />
        </div>
      </section>

      <ProcessStrip />
      {/* TODO: <ClimateSection /> — se agrega en el paso "página Acción climática" */}
      <Brands />
      <CTAStrip />
    </>
  );
}
