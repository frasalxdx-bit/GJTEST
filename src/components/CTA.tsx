import { motion, useScroll, useTransform } from "motion/react";
import { Phone, Mail, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function CTA() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  
  // Parallax effect on the content for depth
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0.5, 1]);

  return (
    <section 
      ref={containerRef}
      id="cta-section" 
      className="w-full bg-[#0a1b33] relative z-20 overflow-hidden py-32 md:py-48 flex items-center justify-center"
    >
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-500/10 to-transparent blur-[100px] pointer-events-none" />

      {/* Abstract floating circles for tech/modern vibe */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"
      />
      <motion.div 
        animate={{ 
          y: [0, 40, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"
      />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-[1000px] mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 sm:mb-10 backdrop-blur-md shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-blue-300" />
          <span className="text-xs sm:text-sm font-medium text-slate-200 tracking-[0.2em] uppercase">Tukaj smo za vas</span>
        </motion.div>

        <h2 className="font-display text-[52px] sm:text-[80px] lg:text-[110px] font-semibold text-white tracking-tighter leading-[1] mb-6 sm:mb-8">
          Potrebujete <br className="md:hidden" />
          <span className="italic font-light text-slate-300 pr-2">nasvet?</span>
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-[550px] mx-auto mb-12 sm:mb-16 font-light leading-relaxed">
          Naši izkušeni strokovnjaki so vam na voljo za popolnoma neobvezujoč posvet za varno prihodnost.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-3 w-full sm:w-[240px] h-[64px] sm:h-[72px] bg-white text-[#0a1b33] rounded-full font-semibold text-[17px] transition-all shadow-[0_10px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.2)]"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
            <span>Pokličite nas</span>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-3 w-full sm:w-[240px] h-[64px] sm:h-[72px] bg-transparent text-white border-2 border-white/20 hover:border-white/50 hover:bg-white/10 rounded-full font-semibold text-[17px] transition-all"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span>Pišite nam</span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
