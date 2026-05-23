import { motion } from "motion/react";
import { Phone, Mail, Shield } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div 
        id="navbar-wrapper" 
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 w-[calc(100vw-4rem)] md:w-max max-w-[480px]"
      >
        <motion.nav
          id="floating-nav"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1], // Custom ultra-smooth cubic bezier easing
          }}
          className="flex items-center justify-between gap-3 md:gap-5 bg-white backdrop-blur-2xl px-3 py-2.5 rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-slate-200/50 w-full"
        >
          {/* Left circular logo placeholder */}
          <div
            id="nav-logo"
            className="w-12 h-12 shrink-0 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 relative rounded-[12px] overflow-hidden bg-white"
          >
            <img 
              src="/logo.png" 
              alt="GJ Consulting Logo" 
              className="w-full h-full object-contain p-1"
            />
          </div>

          {/* Links */}
          <div id="nav-links" className="flex items-center gap-2 md:gap-3 flex-1 md:flex-initial justify-end pr-1">
            <button
              id="nav-btn-call"
              className="text-[14px] md:text-[15px] font-semibold text-[#0a1b33] hover:bg-slate-100 px-4 md:px-5 py-2.5 rounded-[12px] transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Pokliči nas</span>
            </button>
            <button
              id="nav-btn-email"
              className="text-[14px] md:text-[15px] font-semibold bg-[#0a1b33] text-white hover:bg-slate-800 px-5 md:px-6 py-2.5 rounded-[12px] transition-colors duration-200 cursor-pointer whitespace-nowrap shadow-sm flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Piši nam</span>
            </button>
          </div>
        </motion.nav>
      </div>
    </>
  );
}
