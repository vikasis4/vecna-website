import React from "react";
import HeroSection from "./elements/HeroSection";
import SectionOne from "./elements/SectionOne";
import SectionTwo from "./elements/SectionTwo";

function LandingPage() {
  return (
    <div className="w-[86%] xl:w-[80%] lg:mt-8 mx-auto">
      <HeroSection />
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

export default LandingPage;
