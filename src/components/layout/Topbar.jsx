export default function Topbar() {
  return (
    <div className="bg-blue-900 text-white/85 text-xs">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center sm:text-left">
        <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-1">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            Habilitados como generadores bajo Ley 27.424
          </span>
          <span className="hidden md:inline">
            ARG · Ingeniería eléctrica matriculada
          </span>
        </div>
        <span>+54 9 11 0000-0000 · contacto@gesin.com.ar</span>
      </div>
    </div>
  );
}
