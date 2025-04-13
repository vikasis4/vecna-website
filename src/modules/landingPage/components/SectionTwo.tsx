import React from "react";
import language from "@/language";
import Link from "next/link";
import { SlDocs } from "react-icons/sl";
import { PiPlugsConnectedThin } from "react-icons/pi";
import { PiMagicWandLight } from "react-icons/pi";
import { itemDataType } from "../types";

const {
  home: { sectionTwo: CONST },
} = language;

const itemsData: itemDataType[] = [
  [SlDocs, CONST.team],
  [PiPlugsConnectedThin, CONST.integ],
  [PiMagicWandLight, CONST.ai],
];

function SectionTwo() {
  return (
    <main className="mt-36 mb-12">
      <header className="flex flex-col lg:flex-row justify-center gap-6 items-center">
        <section className="flex flex-col font-sans justify-center gap-4 items-start">
          <h1 className="font-bold text-4xl lg:text-6xl">{CONST.title}</h1>
          <p className="font-medium text-lg lg:text-xl text-gray-500">
            {CONST.desc}
          </p>
          <Link
            className="text-blue-500 text-lg lg:text-xl hover:border-b-1 border-black cursor-pointer"
            href="#"
          >
            {CONST.link}
          </Link>
        </section>
        <section className="lg:flex hidden justify-start items-start gap-6">
          {itemsData.map(([Icon, object], index) => (
            <div key={index} className="flex flex-col gap-2">
              <Icon className="text-6xl font-light" />
              <p className="text-xl font-extrabold text-gray-700">
                {object.title}
              </p>
              <p className="font-medium text-md text-gray-500">{object.desc}</p>
            </div>
          ))}
        </section>
      </header>
      <footer className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-auto lg:h-auto overflow-hidden mt-6 lg:mt-8 flex justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full lg:w-auto lg:max-w-full lg:h-auto absolute top-0 left-0 lg:relative rounded-lg 
               object-cover object-left sm:object-cover lg:object-contain"
          src="https://www.notion.com/front-static/pages/product/super-duper/organize/organize-screen-desktop.mp4"
        />
      </footer>
      <section className="flex flex-col lg:hidden justify-start items-start gap-6 mt-6">
        {itemsData.map(([Icon, object], index) => (
          <div key={index} className="flex gap-2">
            <Icon className="text-4xl font-light" />
            <div className="w-full h-full">
              <p className="text-xl font-extrabold text-gray-700">
                {object.title}
              </p>
              <p className="font-medium text-md text-gray-500">{object.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default SectionTwo;
