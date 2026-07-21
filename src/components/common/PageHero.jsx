import Eyebrow from "./Eyebrow";

export default function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="relative bg-blue-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 70% 30%, black 30%, transparent 75%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-12">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] max-w-3xl mt-6">
          {title}
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mt-6 leading-relaxed">
          {lead}
        </p>
      </div>
    </section>
  );
}
