"use client";
import React from "react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import navbarTrailLinks from "@/config/navbar/navbarTrailLinks";
import variables from "@/packages/navbar/variables";
import { useAppSelector } from "@/store/hooks";
import { useNavbarActions } from "../slice/navbarSlice";
import useDimensions from "@/hooks/useDimensions";
import { useRouter } from "next/navigation";

function NavbarTrail() {
  const { trailIndex, isMenuOpen } = useAppSelector((state) => state.navbar);
  const { setTrailIndex } = useNavbarActions();
  const { isMobileView } = useDimensions();
  const router = useRouter();

  return (
    <section
      className={`lg:flex w-full bg-background h-[calc(100vh-120px)] lg:h-full lg:w-max px-4 lg:px-0 right-0 ${
        isMenuOpen ? "fixed block" : "hidden"
      } lg:relative z-50 top-[60px] lg:top-0 justify-start lg:justify-center items-center gap-4 font-sans`}
    >
      {navbarTrailLinks.map(({ label, submenu, href }, index) => {
        const isTrailOpen = trailIndex === index;
        return (
          <ul
            key={index}
            onClick={() => {
              if (isMobileView && submenu)
                setTrailIndex(isTrailOpen ? -1 : index);
              router.push(href);
            }}
            className={`hover:bg-gray-200/60 relative border-t-[2px] border-gray-200/60 lg:border-none cursor-pointer flex flex-col lg:flex-row lg:justify-center justify-start px-2 py-4 lg:py-1 lg:rounded-md items-start lg:items-center gap-1 font-medium hover:text-primary transition-colors duration-150 group`}
          >
            <div className="flex justify-center items-center gap-2">
              <p>{label}</p>
              {submenu && (
                <MdOutlineKeyboardArrowDown
                  className={`text-xs transition-all duration-200 ${
                    isTrailOpen && "rotate-180"
                  } group-hover:rotate-180`}
                />
              )}
            </div>

            {/* Dropdown Submenu */}
            <ol
              className={`min-w-max bg-background rounded-md lg:shadow-md py-2 z-50 lg:transition-all lg:duration-200 transform   ${
                isTrailOpen
                  ? "visible opacity-100"
                  : "invisible left-0 absolute top-full opacity-0 translate-y-2"
              } group-hover:opacity-100 group-hover:visible group-hover:translate-y-0`}
            >
              {submenu &&
                submenu.map(
                  ({ Icon, label, href, comingSoon, desc }, subIndex) => (
                    <Link
                      href={href}
                      onClick={(e) => e.stopPropagation()}
                      key={subIndex}
                      className="flex gap-4 py-2 px-4 relative z-50 justify-start items-center hover:bg-gray-200/60 transition-opacity duration-150"
                    >
                      {Icon && <Icon />}
                      <div className="flex flex-col justify-center items-start">
                        <section className="flex justify-center items-center gap-2">
                          <h1
                            className={`text-md transition-colors duration-150`}
                          >
                            {label}
                          </h1>
                          {comingSoon && (
                            <span className="text-xs text-black/80 bg-gray-200/60 rounded-md px-2 py-[1.4px]">
                              {variables.comingSoon}
                            </span>
                          )}
                        </section>
                        <p className="text-xs text-black/60">{desc}</p>
                      </div>
                    </Link>
                  )
                )}
            </ol>
          </ul>
        );
      })}
    </section>
  );
}

export default NavbarTrail;
