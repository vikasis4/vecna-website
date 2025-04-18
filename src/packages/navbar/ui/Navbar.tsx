"use client";
import { appName } from "@/config/metadata";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavbarTrail from "./elements/NavbarTrail";
import getImageData from "@/config/imagesLink";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useAppSelector } from "@/store/hooks";
import { useNavbarScroll } from "../hooks/navbarScroll";
import { useNavbarActions } from "../slice/navbarSlice";
import useDimensions from "@/hooks/useDimensions";
import language from "@/language";
import { usePathname } from "next/navigation";
const { nav: CONST } = language;

function Navbar() {
  const { isScrolled, isMenuOpen } = useAppSelector((state) => state.navbar);
  const { setIsMenuOpen } = useNavbarActions();
  const { isMobileView } = useDimensions();
  useNavbarScroll();

  const showNav = usePathname().split("/")[1] === "session" || false;
  if (showNav) return null;

  return (
    <>
      <div
        className={`flex justify-between bg-background fixed z-100 w-full h-[60px] items-center font-[family-name:var(--font-geist-sans)] px-4  ${
          isScrolled && "border-primary/10 border-b-[1px]"
        }`}
      >
        {/* logo and trail */}
        <div className="flex justify-center items-center gap-16">
          <div className="flex justify-center items-center gap-2 ">
            <Image {...getImageData("logo", 30)} alt="" />
            <h1 className="font-semibold text-xl">{appName}</h1>
          </div>
          <NavbarTrail />
        </div>

        {/* login and signup */}
        <div className="hidden lg:flex justify-center items-center gap-4">
          <Link href="#" className="text-md font-medium">
            {CONST.DEMO}
          </Link>
          <p className="w-[1px] h-4 bg-gray-500/40" />
          <Link href="#" className={`text-md font-medium`}>
            {CONST.LOGIN}
          </Link>
          <Button variant="default" size="sm">
            {CONST.SIGNUP}
          </Button>
        </div>

        {/* login and logout for mobile */}
        <Button
          variant="outline"
          className={`${
            isMenuOpen && isMobileView
              ? "fixed bottom-[20] left-1/2 -translate-x-1/2 h-[40px] w-[90%]"
              : "hidden"
          } text-md font-medium`}
        >
          {CONST.LOGIN}
        </Button>

        {/* menu */}
        {isMenuOpen ? (
          <RxCross2
            onClick={() => setIsMenuOpen(false)}
            className="block lg:hidden w-8 h-8 text-black/70"
          />
        ) : (
          <LuMenu
            onClick={() => setIsMenuOpen(true)}
            className="block lg:hidden w-8 h-8 text-black/70"
          />
        )}
      </div>
      <div className="h-[60px] w-full" />
    </>
  );
}

export default Navbar;
