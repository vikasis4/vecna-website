import React from "react";
import variables from "../../config/variables";
import { Button } from "@/packages/ui/button";
import getImageData, { imageType } from "@/config/imagesLink";
import Image from "next/image";

function HeroSection() {
  return (
    <main className=" flex flex-col lg:flex-row gap-8">
      <section className="flex justify-center items-start flex-col font-sans gap-6 mt-4">
        <h1 className="font-bold text-5xl lg:text-7xl">
          {variables["hero-title"]}
        </h1>
        <p className="font-medium text-xl">{variables["hero-desc"]}</p>
        <div className="flex flex-col lg:flex-row justify-start items-center w-full gap-2">
          <Button variant="default" className="w-full lg:w-max bg-blue-600/80">
            {variables.signup}
          </Button>
          <Button
            variant="outline"
            className="w-full lg:w-max border-blue-600/80"
          >
            {variables.demo}
          </Button>
        </div>
        <blockquote>
          <p className="text-md mt-6 font-medium text-black/70">
            {variables["hero-trust"]}
          </p>
          <ChannelSection />
        </blockquote>
      </section>
      <section className="flex justify-center w-full items-center">
        <Image {...getImageData("hero", 600)} />
      </section>
    </main>
  );
}

const channelLogos: imageType[] = ["mrbeast", "rankboost", "youtube", "beer"];

function ChannelSection() {
  return (
    <section className="flex justify-start flex-wrap items-between gap-2 lg:gap-10 mt-2">
      {channelLogos.map((logo) => {
        const logoData = getImageData(logo, 40);
        return (
          <div
            key={logoData.alt}
            className="flex justify-center lg:flex-col items-center gap-1 pr-2"
          >
            <Image className="rounded-md h-[40px] w-[40px]" {...logoData} />
            <h2 className="font-medium text-sm">{logoData.alt}</h2>
          </div>
        );
      })}
    </section>
  );
}

export default HeroSection;
