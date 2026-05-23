import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "motion/react";

const SECTIONS = [
  { id: "hero-container", label: "Domov" },
  { id: "about-section", label: "O nas" },
  { id: "services-faq-section", label: "Storitve" },
  { id: "reviews-section", label: "Mnenja" },
  { id: "cta-section", label: "Kontakt" },
];

const ITEM_WIDTH = 110;
const HEIGHT = 52;

export default function CameraDialNav() {
  const [showNav, setShowNav] = useState(false);
  const activeIndex = useMotionValue(0);

  useEffect(() => {
    let ticking = false;

    const updateNavVis = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const navEl = document.getElementById("floating-nav");
          if (navEl) {
            const rect = navEl.getBoundingClientRect();
            setShowNav(rect.top < 0);
          } else {
            setShowNav(window.scrollY > 300);
          }

          const scrollPos = window.scrollY + 120;
          let currentIdx = 0;
          for (let i = 0; i < SECTIONS.length; i++) {
            const el = document.getElementById(SECTIONS[i].id);
            if (el) {
              const rect = el.getBoundingClientRect();
              const absoluteTop = window.scrollY + rect.top;
              if (absoluteTop <= scrollPos) {
                currentIdx = i;
              }
            }
          }
          if (activeIndex.get() !== currentIdx) {
            activeIndex.set(currentIdx);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    updateNavVis();
    window.addEventListener("scroll", updateNavVis, { passive: true });
    window.addEventListener("resize", updateNavVis, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateNavVis);
      window.removeEventListener("resize", updateNavVis);
    };
  }, []);

  const smoothFluidIndex = useSpring(activeIndex, { stiffness: 300, damping: 30, mass: 1 });
  const trackX = useTransform(smoothFluidIndex, (index) => -index * ITEM_WIDTH - (ITEM_WIDTH / 2));

  return (
    <motion.div
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: showNav ? 1 : 0, y: showNav ? 0 : -60 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-[100] flex justify-center drop-shadow-2xl ${showNav ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <div 
        className="w-full max-w-6xl flex justify-center bg-white/95 backdrop-blur-md border-b border-black/10 transition-all font-sans"
        style={{ height: HEIGHT }}
      >
        <div className="relative w-full max-w-[500px]">
          {/* Top Center Indicator Accent */}
          <div className="absolute top-[0px] left-1/2 -translate-x-1/2 w-[2px] h-[8px] bg-amber-500 rounded-b-full z-20 pointer-events-none shadow-[0_0_8px_rgba(245,158,11,0.4)]" />

          {/* Dial Track Mask Container */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              maskImage: "linear-gradient(to right, transparent 5%, black 30%, black 70%, transparent 95%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 5%, black 30%, black 70%, transparent 95%)"
            }}
          >
            {/* Dial Track */}
            <motion.div 
              className="absolute left-1/2 flex items-center h-full pointer-events-auto"
              style={{ x: trackX }}
            >
              {SECTIONS.map((sec, i) => {
                return (
                  <DialItem 
                    key={sec.id} 
                    sectionId={sec.id}
                    label={sec.label} 
                    index={i} 
                    fluidIndex={smoothFluidIndex} 
                  />
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DialItem({ sectionId, label, index, fluidIndex }: { sectionId: string, label: string, index: number, fluidIndex: any }) {
  const distance = useTransform(fluidIndex, (f: number) => Math.abs(f - index));
  
  // Quick dropoff to ensure max 3 items display cleanly
  const opacity = useTransform(distance, [0, 0.8, 1.5], [1, 0.3, 0]);
  const scale = useTransform(distance, [0, 1], [1.02, 0.92]);
  const color = useTransform(distance, [0, 0.5], ["#0f172a", "#94a3b8"]);
  
  const pointerEvents = useTransform(distance, (d: number) => d > 1.5 ? "none" : "auto");

  const handleClick = () => {
    const el = document.getElementById(sectionId);
    if (el) {
      const rect = el.getBoundingClientRect();
      window.scrollTo({
        top: window.scrollY + rect.top - 60,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      className="flex items-center justify-center cursor-pointer transition-colors relative group"
      style={{ width: ITEM_WIDTH, height: '100%', opacity, pointerEvents }}
      onClick={handleClick}
    >
      <motion.span 
        style={{ scale, color }}
        className="font-sans font-medium text-[11px] md:text-[12px] uppercase tracking-[0.1em] md:tracking-[0.15em] whitespace-nowrap select-none transition-colors group-hover:text-black"
      >
        {label}
      </motion.span>
    </motion.div>
  );
}