import HeroSection from "@/modules/landingPage/components/HeroSection";
import PricingHome from "@/modules/landingPage/components/Pricings";
import SectionOne from "@/modules/landingPage/components/SectionOne";
import SectionTwo from "@/modules/landingPage/components/SectionTwo";
import Testimonial from "@/modules/landingPage/components/Testimonial";
// import { ComboboxDemo } from "@/packages/Filter";
// import { DefaultMenuDemo } from "@/packages/Menu";
// import TableUser from "@/packages/Table";
import React from "react";

function Home() {
  return (
    <div className="w-[86%] xl:w-[80%] lg:mt-8 mx-auto">
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <PricingHome />
      <Testimonial />
      {/* <ComboboxDemo /> */}
      {/* <TableUser /> */}
      {/* <DefaultMenuDemo /> */}
    </div>
  );
}

export default Home;
