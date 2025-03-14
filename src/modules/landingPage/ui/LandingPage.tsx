import React from "react";
import HeroSection from "./elements/HeroSection";
import SectionOne from "./elements/SectionOne";

function LandingPage() {
  return (
    <div className="w-[86%] xl:w-[80%] lg:mt-8 mx-auto">
      <HeroSection />
      <SectionOne />
    </div>
  );
}

export default LandingPage;
