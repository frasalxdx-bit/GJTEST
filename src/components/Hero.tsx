import { motion, AnimatePresence } from "motion/react";
import { Star, Trophy } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

function AnimatedBadge() {
  const [swapped, setSwapped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSwapped((s) => !s);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const DUR = 0.6;
  const EASE = [0.16, 1, 0.3, 1];

  const primerjam = "Primerjam.si".split("");
  const izbor = "Izbor strank".split("");

  return (
    <div 
      className="relative mb-4 text-[#0a1b33] font-medium bg-white/60 backdrop-blur-md rounded-[24px] border border-slate-200/50 shadow-sm overflow-hidden"
      style={{ width: 176, height: 38 }}
    >
      {/* Moving Pill */}
      <motion.div
        animate={{ x: swapped ? 108 : 4 }}
        transition={{ duration: DUR, ease: EASE }}
        className="absolute top-1 bottom-1 w-[64px] font-semibold rounded-[16px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-slate-200 flex items-center justify-center z-20 overflow-hidden"
      >
        <motion.div 
          animate={{ opacity: swapped ? 0 : 1, y: swapped ? 12 : 0 }} 
          transition={{ duration: 0.4, ease: "easeInOut" }} 
          className="flex items-center gap-1.5 absolute"
        >
          <span className="text-[13px] leading-none">4,9</span>
          <Star className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
        </motion.div>
        
        <motion.div 
          animate={{ opacity: swapped ? 1 : 0, y: swapped ? 0 : -12 }} 
          transition={{ duration: 0.4, ease: "easeInOut" }} 
          className="flex items-center gap-1.5 absolute"
        >
          <span className="text-[13px] leading-none">2024</span>
          <Trophy className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
        </motion.div>
      </motion.div>

      {/* Primerjam Text (on the right) */}
      <div className="absolute top-0 bottom-0 right-[12px] flex items-center justify-center z-10 w-[88px]">
        <div className="flex">
          {primerjam.map((char, i) => (
            <motion.span
              key={`p-${i}`}
              initial={false}
              animate={{ 
                opacity: swapped ? 0 : 1,
                x: swapped ? 2 : 0
              }}
              transition={{ 
                duration: 0.15, 
                delay: swapped ? (i * 0.035) : ((primerjam.length - 1 - i) * 0.035),
                ease: "easeOut"
              }}
              className="text-[#0a1b33] font-semibold text-[13px] tracking-tight whitespace-pre"
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Izbor Text (on the left) */}
      <div className="absolute top-0 bottom-0 left-[12px] flex items-center justify-center z-10 w-[88px]">
        <div className="flex">
          {izbor.map((char, i) => (
            <motion.span
              key={`i-${i}`}
              initial={false}
              animate={{ 
                opacity: swapped ? 1 : 0,
                x: swapped ? 0 : -2
              }}
              transition={{ 
                duration: 0.15, 
                delay: swapped ? (i * 0.035) : ((izbor.length - 1 - i) * 0.035),
                ease: "easeOut"
              }}
              className="text-[#0a1b33] font-semibold text-[13px] tracking-tight whitespace-pre"
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero-container"
      className="relative w-full max-w-[1400px] mx-auto rounded-[24px] md:rounded-[40px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-full flex flex-col"
    >
      {/* Background Video Underlying Layer */}
      <div
        id="video-background-layer"
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
          className="w-full h-full object-cover object-[70%_center] md:object-center scale-105 transition-transform duration-1000"
        />
        {/* Mobile text readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/90 via-white/50 to-transparent md:bg-none md:hidden pointer-events-none mix-blend-lighten" />
        <div className="absolute inset-0 bg-white/30 md:hidden pointer-events-none" />
      </div>

      {/* Hero Text Content Wrapper */}
      <div
        id="hero-text-content"
        className="relative z-20 flex-1 px-6 md:px-16 pt-16 md:pt-28 flex flex-col items-start w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/5 to-transparent pointer-events-none -z-10" />
        <motion.div
          id="animated-text-layer"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-[620px]"
        >
          {/* Mini headline animated */}
          <AnimatedBadge />

          {/* Headline */}
          <h1
            id="hero-headline"
            className="font-display text-[42px] md:text-[56px] leading-[1.05] font-medium tracking-tight text-[#0a1b33] mb-4"
          >
            Od vsakdanjih poti do
            <br />
            dolgoročnih načrtov.
          </h1>

          {/* Subheadline */}
          <p
            id="hero-subheadline"
            className="font-sans text-[15px] md:text-[18px] leading-relaxed text-[#64748b] max-w-[480px] mb-8"
          >
            Primerjamo ponudbe več zavarovalnic, razložimo razlike in vam pomagamo izbrati primerno rešitev.
          </p>
        </motion.div>
      </div>

      {/* Floating Bottom Navbar Wrapper */}
      <Navbar />
    </section>
  );
}
