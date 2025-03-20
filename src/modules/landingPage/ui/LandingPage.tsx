import React from "react";
import HeroSection from "./elements/HeroSection";
import SectionOne from "./elements/SectionOne";
import SectionTwo from "./elements/SectionTwo";
import PricingHome from "./elements/Pricings";
import Testimonial from "./elements/Testimonial";
import { ComboboxDemo } from "../../../packages/Filter";
import TableUser from "@/packages/Table";
import { DefaultMenuDemo } from "@/packages/Menu";

function LandingPage() {
  return (
    <div className="w-[86%] xl:w-[80%] lg:mt-8 mx-auto">
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <PricingHome />
      <Testimonial />
      {/* //-------------- */}
      <ComboboxDemo />
      <TableUser />
      <DefaultMenuDemo />
      
    </div>
  );
}

export default LandingPage;
