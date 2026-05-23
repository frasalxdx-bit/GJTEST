import React, { useRef } from "react";
import { ArrowUpRight, Car, Home, HeartPulse, PiggyBank, FileCheck2, BriefcaseBusiness, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const services = [
  {
    eyebrow: "MOBILNOST",
    count: "01 / 04",
    title: "Vozila in transport",
    headerLabel: "Avtomobilska zavarovanja",
    description: "Prihranite čas in denar ob iskanju idealnega avtomobilskega zavarovanja. Z ustreznim kasko kritjem in asistenco bo vaša pot vedno povsem brezskrbna.",
    features: [
      "Prilagoditev AO in AO+ kritja",
      "Optimizacija kasko opcij in franšiz",
      "Prenos in uveljavljanje bonusov",
    ],
    tags: ["Obvezno z.", "Kasko", "Asistenca"],
    accent: "bg-sky-300",
    Icon: Car,
    image: "radial-gradient(circle at 28% 24%, rgba(186,230,253,.15), transparent 15%), radial-gradient(circle at 72% 70%, rgba(14,165,233,.1), transparent 18%), linear-gradient(135deg, #0f172a, #020617 48%, #000000)",
  },
  {
    eyebrow: "PREMOŽENJE",
    count: "02 / 04",
    title: "Nepremičnine in dom",
    headerLabel: "Zavarovanje doma",
    description: "Zaščitite svoj dom in dragocenosti pred nepredvidenimi naravnimi pojavi in dnevnimi tveganji, da boste tudi ob nezgodi ostali finančno stabilni.",
    features: [
      "Zavarovanje strogo na novo vrednost",
      "Kritje potresa in izliva vode",
      "Zaščita dragocenosti in opreme",
    ],
    tags: ["Hiša & Dom", "Oprema", "Odgovornost"],
    accent: "bg-emerald-300",
    Icon: Home,
    image: "radial-gradient(circle at 22% 68%, rgba(52,211,153,.15), transparent 16%), radial-gradient(circle at 74% 28%, rgba(255,255,255,.05), transparent 12%), linear-gradient(135deg, #064e3b, #0f766e 43%, #020617)",
  },
  {
    eyebrow: "ZDRAVJE",
    count: "03 / 04",
    title: "Življenje in zdravje",
    headerLabel: "Osebna zavarovanja",
    description: "Zdravje je na prvem mestu. Poskrbite za hiter dostop do zasebnih specialistov in neprecenljivo finančno varnost ob najhujših diagnozah.",
    features: [
      "Preskok čakalnih vrst s specialisti",
      "Izplačila ob hudih boleznih",
      "Nezgodna invalidnost in rente",
    ],
    tags: ["Specialisti", "Nezgoda", "Bolezni"],
    accent: "bg-amber-300",
    Icon: HeartPulse,
    image: "linear-gradient(115deg, rgba(255,255,255,.05) 0 1px, transparent 1px 18px), radial-gradient(circle at 74% 30%, rgba(251,191,36,.15), transparent 16%), linear-gradient(35deg, #92400e, #292524 50%, #020617)",
  },
  {
    eyebrow: "FINANCE",
    count: "04 / 04",
    title: "Prihodnost in naložbe",
    headerLabel: "Varčevanja & Odgovornost",
    description: "Pametno razpršite prihranke ter zaščitite sebe pred visokimi odškodninskimi zahtevki tretjih oseb z ustreznim zavarovanjem splošne odgovornosti.",
    features: [
      "Strukturirano dolgoročno varčevanje",
      "Zavarovanje osebne odgovornosti",
      "Namenska in pokojninska varčevanja",
    ],
    tags: ["Varčevanje", "Skladi", "Odgovornost"],
    accent: "bg-violet-300",
    Icon: PiggyBank,
    image: "radial-gradient(circle at 50% 38%, rgba(216,180,254,.15), transparent 18%), radial-gradient(circle at 76% 72%, rgba(129,140,248,.1), transparent 15%), linear-gradient(135deg, #312e81, #111827 45%, #020617)",
  },
];

function InsuranceVisual({ service }: { service: any }) {
  const Icon = service.Icon;

  return (
    <div className="relative min-h-[220px] md:min-h-[300px] h-full w-full overflow-hidden bg-[#050b14]">
      <div className="absolute inset-0" style={{ background: service.image }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent,rgba(10,27,51,.8)_85%)]" />

      <div className="absolute left-6 top-6 z-20 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 shadow-lg shadow-black/20 backdrop-blur-md">
        {service.headerLabel}
      </div>

      <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/40 backdrop-blur-xl md:h-48 md:w-48 transition-transform duration-500 hover:scale-105">
        <Icon className="h-16 w-16 text-white md:h-20 md:w-20 opacity-90" strokeWidth={1.5} />
      </div>
    </div>
  );
}

function StackCard({ 
  service, 
  index, 
  total, 
  progress 
}: { 
  service: any; 
  index: number; 
  total: number; 
  progress: any;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const y = useTransform(
    progress,
    [start, end],
    index === 0 ? [0, 0] : [1200, 0]
  );

  const opacity = useTransform(
    progress,
    [start, Math.min(start + 0.05, end), end],
    index === 0 ? [1, 1, 1] : [0.95, 1, 1]
  );
  
  const scale = useTransform(
    progress,
    [start, end],
    index === 0 ? [1, 1] : [0.98, 1]
  );

  return (
    <motion.article
      className="absolute inset-x-0 top-0 h-full w-full overflow-hidden rounded-[2rem] border border-slate-700/50 bg-[#0a1b33] shadow-2xl shadow-black/50 flex flex-col"
      style={{ y, opacity, scale, zIndex: index + 1 }}
    >
      <div className="flex h-full flex-col md:flex-row">
        {/* Visual section on left on desktop, top on mobile */}
        <div className="h-[35%] w-full shrink-0 md:h-full md:w-1/2 lg:w-[55%]">
          <InsuranceVisual service={service} />
        </div>

        {/* Content section on right on desktop, bottom on mobile */}
        <div className="flex flex-grow w-full flex-col overflow-hidden bg-[#0a1b33] border-l border-white/5 md:h-full md:w-1/2 lg:w-[45%]">
          <div className="flex flex-col flex-grow justify-between p-4 sm:p-6 lg:p-12 h-full">
            <div>
              <div className="mb-4 lg:mb-6 flex items-center gap-3 lg:gap-4 text-[10px] md:text-xs font-medium uppercase tracking-[0.25em]">
                <span className={`rounded-full ${service.accent} px-3 py-1 text-[#0a1b33] font-bold`}>
                  {service.eyebrow}
                </span>
                <span className="text-slate-400 font-mono">{service.count}</span>
              </div>

              <h3 className="mb-2 lg:mb-4 text-xl sm:text-2xl font-semibold tracking-tight text-white lg:text-3xl xl:text-4xl">
                {service.title}
              </h3>
              <p className="max-w-md text-[12px] sm:text-[13px] leading-relaxed text-slate-300 md:text-sm lg:text-[15px] mb-3 lg:mb-6">
                {service.description}
              </p>

              <ul className="space-y-1.5 lg:space-y-3 mb-4 lg:mb-6">
                {service.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-1.5 lg:gap-3">
                    <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white/50 shrink-0 mt-0.5" />
                    <span className="text-[12px] lg:text-sm text-slate-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-2 lg:mt-4 pt-3 lg:pt-5 border-t border-white/5 shrink-0">
              <button className="group inline-flex items-center gap-2 lg:gap-3 rounded-[16px] bg-white px-4 lg:px-5 py-3 lg:py-3.5 text-xs lg:text-sm font-semibold text-[#0a1b33] transition-all hover:bg-slate-100 hover:shadow-lg hover:-translate-y-1">
                Preveri možnosti
                <ArrowUpRight className="h-3.5 w-3.5 lg:h-4 lg:w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ServicesSection() {
  const stackRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="services-faq-section" ref={stackRef} className="relative h-[480vh] bg-[#050b14] w-full">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-3 sm:px-6 md:px-12 pt-16 md:pt-20 pb-32 md:pb-40 lg:pb-48">
        
        <div className="mb-6 w-full max-w-6xl text-center shrink-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Pravo kritje za<br className="hidden md:block"/> vsako obdobje
          </motion.h2>
        </div>

        <div className="relative h-full flex-grow w-full max-w-6xl max-h-[800px] min-h-[0]">
          {services.map((service, index) => (
            <StackCard
              key={service.title}
              service={service}
              index={index}
              total={services.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
