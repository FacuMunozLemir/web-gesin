export default function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider ${light ? "text-green" : "text-blue-700"}`}
    >
      <span className="w-6 h-px bg-orange" />
      {children}
    </span>
  );
}
