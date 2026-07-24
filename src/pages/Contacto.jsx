import PageHero from "../components/common/PageHero";

const WHATSAPP_CHANNELS = [
  { region: "Jujuy", phone: "+54 9 3883 29-4962", wa: "5493883294962" },
  { region: "Chaco", phone: "+54 9 362 486-6554", wa: "5493624866554" },
];

const SOCIALS = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <>
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="4.2"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <>
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
        <path
          d="M7 10v7M7 6.6v.01M11 17v-4.5a2 2 0 014-.3V17M11 10v7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
      </>
    ),
  },
];

function WhatsAppIcon({ className }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.24 8.24 0 01-1.27-4.38c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.77-1.84-.2-.48-.41-.41-.56-.42-.15-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.3 3.82.6.26 1.07.42 1.44.53.6.19 1.15.16 1.59.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.15-.47-.27z" />
    </svg>
  );
}

export default function Contacto() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Contanos tu proyecto."
        lead="Escribinos por WhatsApp según tu zona y te respondemos en el momento. También podés seguirnos en nuestras redes."
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            {WHATSAPP_CHANNELS.map((c) => (
              <a
                key={c.region}
                href={`https://wa.me/${c.wa}`}
                target="_blank"
                rel="noreferrer"
                className="group p-8 border border-gray-200 rounded-2xl bg-white hover:border-green transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-green/10 text-green flex items-center justify-center">
                  <WhatsAppIcon />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-ink/40 mt-5">
                  WhatsApp · {c.region}
                </div>
                <div className="text-xl font-bold text-blue-900 mt-1.5">
                  {c.phone}
                </div>
                <div className="inline-flex items-center gap-1.5 text-green text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all">
                  Escribir ahora
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <path
                      d="M3 7h8M7 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      fill="none"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-14">
            <div className="text-xs font-mono uppercase tracking-wider text-ink/40 mb-4">
              Seguinos
            </div>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-12 h-12 rounded-full border border-gray-200 text-ink/60 flex items-center justify-center hover:border-blue-900 hover:text-blue-900 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
