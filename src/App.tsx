/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CameraDialNav from "./components/CameraDialNav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ReviewsSection from "./components/ReviewsSection";
import CTA from "./components/CTA";

export default function App() {
  return (
    <main
      id="root-container"
      className="min-h-[100dvh] w-full flex flex-col items-center bg-[#f3f4f6]"
    >
      <CameraDialNav />
      <div className="w-full h-[100dvh] flex flex-col px-2 pt-2 pb-2 md:px-4 md:pt-4 md:pb-2">
        <div className="w-full flex-1 min-h-0 relative flex justify-center">
          <Hero />
        </div>
        <div className="w-full h-[15vh] min-h-[100px] flex items-center justify-center shrink-0">
          <Marquee />
        </div>
      </div>

      <div className="w-full bg-[#f3f4f6]">
        <AboutSection />
        <ServicesSection />
        <ReviewsSection />
        <CTA />
      </div>
    </main>
  );
}
