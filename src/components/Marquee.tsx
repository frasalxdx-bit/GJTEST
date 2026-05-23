import { motion } from "motion/react";

interface Logo {
  id: string;
  name: string;
  src: string;
  gradient: string;
}

const LOGOS: Logo[] = [
  {
    id: "triglav",
    name: "Zavarovalnica Triglav",
    src: "https://skleni.triglav.si/triglav-web-static/seamless/latest/images/logos/logo-dark-triglav2.svg",
    gradient: "",
  },
  {
    id: "generali",
    name: "Generali",
    src: "https://www.generali.si/o/generali-theme/images/generali-logo-big.svg",
    gradient: "",
  },
  {
    id: "grawe",
    name: "Grawe",
    src: "https://dzuqxtpzvt1cb.cloudfront.net/typo3conf/ext/grawe/Resources/Public/Images/grawe-logo.svg",
    gradient: "",
  },
  {
    id: "allianz",
    name: "Allianz",
    src: "https://www.allianz-slovenija.si/content/dam/onemarketing/system/allianz-logo.svg",
    gradient: "",
  },
  {
    id: "vzajemna",
    name: "Vzajemna",
    src: "https://www.vzajemna.si/images/logo.svg",
    gradient: "",
  },
  {
    id: "groupama",
    name: "Groupama",
    src: "https://www.groupama.si/img/logo.svg",
    gradient: "",
  },
];

function MarqueeItem({ logo, idx }: { logo: Logo, idx: number }) {
  return (
    <div
      id={`marquee-card-${logo.id}-${idx}`}
      className="relative h-20 w-[120px] md:w-[160px] shrink-0 flex items-center justify-center transition-all"
    >
      <div className="relative z-10 w-full h-[32px] md:h-[40px] flex items-center justify-center grayscale opacity-40">
        <img
          src={logo.src}
          alt={logo.name}
          referrerPolicy="no-referrer"
          id={`logo-img-${logo.id}-${idx}`}
          className="w-full h-full object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const fallbackSpan = target.parentElement?.parentElement?.querySelector(".logo-fallback");
            if (fallbackSpan) {
              (fallbackSpan as HTMLElement).style.display = "block";
            }
          }}
        />
        {logo.id === "triglav" && (
          <img
            src={logo.src}
            alt=""
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-contain brightness-0 pointer-events-none"
            style={{ clipPath: "inset(0 0 0 32%)" }}
          />
        )}
      </div>

      <span
        className="logo-fallback hidden relative z-10 text-[13px] text-center px-2 font-bold tracking-tight text-slate-700 transition-colors duration-300"
        style={{ display: "none" }}
      >
        {logo.name}
      </span>
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      id="marquee-section-container"
      className="w-full max-w-[1400px] mx-auto overflow-hidden select-none"
    >
      <div
        id="marquee-scroll-viewport"
        className="marquee-mask relative w-full overflow-hidden py-4"
        style={{
          maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
        }}
      >
        <div id="marquee-track" className="animate-marquee flex items-center gap-10 md:gap-16 w-max">
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
            <MarqueeItem key={`${logo.id}-${idx}`} logo={logo} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
