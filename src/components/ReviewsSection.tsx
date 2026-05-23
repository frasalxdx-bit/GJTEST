import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    author: "Lidija B.",
    role: "na Primerjam.si",
    title: "Jasno in brez zapletov",
    text: "Zelo sem zadovoljna — dobila sem odlično svetovanje, prijazen in oseben pristop ter res hiter odziv. Vse razloženo jasno in brez zapletov, priporočam naprej."
  },
  {
    author: "Robert R.",
    role: "na Primerjam.si",
    title: "Profesionalen pristop",
    text: "Super izkušnja z avtomobilskim zavarovanjem. Delo so opravili res vrhunsko, vse je bilo urejeno brez odvečnih papirjev. Jaka Gerenčer me je vodil skozi možnosti, razložil podrobnosti in s tem pokazal pravi profesionalni pristop. Celoten postopek je bil natančno izpeljan, zato imam občutek, da sem v dobrih rokah in da sem prihranil čas."
  },
  {
    author: "Mojca F.",
    role: "na Primerjam.si",
    title: "Strokovno in pošteno",
    text: "Izjemno sem zadovoljna s storitvijo! Svetovanje je bilo res odlično; svetovalec je bil zelo strokoven in je jasno razložil vse možnosti za premoženjsko zavarovanje. Pošteno so mi svetovali, kaj bi bilo najbolje zame in moje potrebe. Vse sem razumela in sem se počutila varno pri svoji izbiri. Toplo priporočam!"
  },
  {
    author: "Željko H.",
    role: "na Primerjam.si",
    title: "Pošteno in konkurenčno",
    text: "Zelo sem zadovoljen s storitvijo avtomobilskega zavarovanja. Zavarovalni agenti so bili neverjetno prijazni in so mi natančno razložili vse možnosti. Cena, ki so mi jo ponudili, je bila poštena in konkurenčna. Vsekakor priporočam to zavarovalnico, ker so zelo strokovni in ustrežljivi."
  }
];

export default function ReviewsSection() {
  const duplicatedReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews-section" className="w-full bg-[#0a1b33] relative z-30">
      <div className="w-full bg-[#f3f4f6] pt-16 md:pt-24 pb-0 overflow-hidden relative border-b border-black/10">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="max-w-[800px] mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-[40px] md:text-[56px] leading-[1.05] font-semibold text-[#0a1b33] tracking-tight mb-6"
          >
            Zaupanje, zgrajeno na dejanjih
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-[18px] md:text-[20px] text-[#64748b] leading-relaxed max-w-[650px]"
          >
            Prava mera naše strokovnosti se pokaže takrat, ko je podpora najbolj pomembna. Ponosni smo na dolgoročna partnerstva in zadovoljstvo strank, ki so nam že zaupale.
          </motion.p>
        </div>
      </div>

      {/* Edge-to-edge Marquee */}
      <div 
        className="w-full pb-8 md:pb-12 -mb-24 md:-mb-32"
        style={{
          maskImage: "linear-gradient(to right, transparent, white 5%, white 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, white 5%, white 95%, transparent)",
        }}
      >
        <div className="animate-marquee flex items-stretch gap-4 md:gap-6 lg:gap-8 w-max pl-4 md:pl-6 lg:pl-8">
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="w-[85vw] sm:w-[400px] flex-shrink-0 bg-white rounded-[24px] pt-8 px-8 pb-32 md:pt-10 md:px-10 md:pb-40 border border-slate-200/50 shadow-sm flex flex-col relative"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-slate-100" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0a1b33] mb-4 pr-10">
                {review.title}
              </h3>
              
              <p className="text-[15px] md:text-[16px] text-[#64748b] leading-relaxed mb-10 flex-1">
                {review.text}
              </p>
              
              <div className="flex items-center gap-1.5 mt-auto">
                <span className="font-semibold text-[#0a1b33] text-[15px] leading-tight">{review.author}</span>
                <span className="text-[14px] text-slate-500">{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
