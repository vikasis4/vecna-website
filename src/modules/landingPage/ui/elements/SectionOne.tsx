"use client";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import useCarosoul from "../../hooks/useCarosoul";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

function SectionOne() {
  const imgNumber = useAppSelector(
    (state) => state.landingPage.sectionone.carosoulNo
  );
  useCarosoul();

  return (
    <main className="mt-8 mb-8 relative z-0">
      <div className="relative w-full h-[400px] md:h-auto overflow-hidden md:overflow-visible border border-gray-200/80 shadow-md shadow-gray-400/80 rounded-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={imgNumber}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full absolute md:relative top-0 left-0"
          >
            <Image
              src={`/hero/secone/img${imgNumber}.png`}
              alt="hi"
              className="w-full h-full object-left object-cover md:object-contain"
              width={1200}
              height={1200}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <FeaturesName />
    </main>
  );
}

import { useLandingPageActions } from "../../slice/landingPageSlice";
import { carosoulNoType } from "../../types";
import { secOneBoxData } from "../../config";

function FeaturesName() {
  const imgNumber = useAppSelector(
    (state) => state.landingPage.sectionone.carosoulNo
  );
  const { setCarosoulNo } = useLandingPageActions();

  return (
    <main className="flex flex-wrap justify-center items-center gap-2 lg:gap-4 mt-8">
      {secOneBoxData.map(([number, name, Icon]) => (
        <div
          key={number as React.Key}
          onClick={() => setCarosoulNo(number as carosoulNoType)}
          className={`flex ${
            imgNumber == number ? "bg-gray-300/80" : "bg-white/80"
          } justify-center items-center gap-2 px-4 py-2 border-[1px] border-gray-300/60  rounded-sm shadow-md transition-all duration-1000 cursor-pointer`}
        >
          <Icon className={`text-md text-black/80`} />
          <h1 className="font-medium text-md">{name as string}</h1>
        </div>
      ))}
    </main>
  );
}
export default SectionOne;
