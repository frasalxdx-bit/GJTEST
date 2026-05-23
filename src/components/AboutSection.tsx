import { motion } from "motion/react";
import { Phone, Mail, Award, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about-section" className="w-full max-w-[1400px] mx-auto px-6 md:px-16 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Biography Content */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-[40px] md:text-[56px] leading-[1.05] font-semibold text-[#0a1b33] tracking-tight mb-8">
              Pravi ljudje za resne odločitve
            </h2>
            <p className="font-sans text-[18px] md:text-[20px] text-[#64748b] leading-relaxed mb-6">
              Smo ekipa strokovnjakov pod vodstvom <strong>Jake Gerenčerja</strong> (GJ Insurance Consulting s.p.), z več kot desetletjem izkušenj v največjih zavarovalnicah na trgu. Razumemo, kje sistem odpove in kje so skrite pasti.
            </p>
            <p className="font-sans text-[18px] md:text-[20px] text-[#64748b] leading-relaxed mb-8">
              Zato smo ustvarili neodvisno agencijo. Brez korporativnih zidov, brez skrivanja za klicnimi centri. Ko nas potrebujete, smo tu. Neposredno, transparentno in strokovno.
            </p>
          </motion.div>


        </div>

        {/* Visual / Awards Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-[32px] overflow-hidden bg-slate-100 aspect-square md:aspect-[4/3] lg:aspect-square flex flex-col justify-center items-center text-center p-8 border border-slate-200/50"
        >
          {/* Placeholder for real portrait */}
          <div className="absolute inset-0 bg-[#0a1b33]/5 z-0" />
          
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-white/60 backdrop-blur-md rounded-[24px] border border-white/50 p-8 shadow-xl shadow-slate-200/50">
            <Award className="w-16 h-16 text-amber-500 mb-6" />
            <h3 className="font-display text-[24px] md:text-[32px] font-semibold text-[#0a1b33] tracking-tight mb-4">
              Priznana Odličnost
            </h3>
            <p className="text-slate-600 font-medium leading-relaxed max-w-[280px]">
              Agencija GJ Insurance Consulting s.p. je prepoznana kot najhitreje rastoča v regiji z izjemno oceno strank.
            </p>
            
            <div className="mt-8 flex flex-col gap-3 w-full max-w-[240px]">
              <div className="flex items-center gap-3 text-left">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-[14px] text-slate-700 font-medium">10+ let izkušenj</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-[14px] text-slate-700 font-medium">500+ rešenih škod</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-[14px] text-slate-700 font-medium">100% Neodvisni nasveti</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
