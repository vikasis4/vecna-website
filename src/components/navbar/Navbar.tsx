"use client";
import { appName } from "@/config/metadata";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import variables from "@/components/navbar/variables";
import NavbarTrail from "./elements/NavbarTrail";
import getImageData from "@/config/imagesLink";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useAppSelector } from "@/store/hooks";
import { useNavbarScroll } from "./hooks/navbarScroll";
import { navbarActions } from "./slice/navbarSlice";

function Navbar() {
  const { isScrolled, isMenuOpen } = useAppSelector((state) => state.navbar);
  const { setIsMenuOpen } = navbarActions();
  useNavbarScroll();

  return (
    <>
      <div
        className={`flex justify-between bg-background fixed w-full h-[60px] items-center font-[family-name:var(--font-geist-sans)] lg:px-4 px-2  ${
          isScrolled && "border-primary/10 border-b-[1px]"
        }`}
      >
        {/* logo and trail */}
        <div className="flex justify-center items-center gap-16">
          <div className="flex justify-center items-center gap-2 ">
            <Image {...getImageData("logo", 30)} />
            <h1 className="font-semibold text-xl">{appName}</h1>
          </div>
          <NavbarTrail />
        </div>

        {/* login and signup */}
        <div className="hidden lg:flex justify-center items-center gap-4">
          <Link href="#" className="text-md font-medium">
            {variables.requestDemo}
          </Link>
          <p className="w-[1px] h-4 bg-gray-500/40" />
          <Link href="#" className="text-md font-medium">
            {variables.login}
          </Link>
          <Button variant="default" size="sm">
            {variables.signup}
          </Button>
        </div>

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
