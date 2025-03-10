import React from "react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import navbarTrailLinks from "@/config/navbar/navbarTrailLinks";
import variables from "@/components/navbar/variables";

function NavbarTrail() {
  return (
    <section className="lg:flex hidden justify-center items-center gap-4 font-sans">
      {navbarTrailLinks.map(({ label, submenu }, index) => {
        return (
          <ul
            key={index}
            className={`hover:bg-gray-200/60 relative cursor-pointer flex justify-center px-2 py-1 rounded-md items-center gap-1 font-medium hover:text-primary transition-colors duration-150 group`}
          >
            <p>{label}</p>
            {submenu && (
              <MdOutlineKeyboardArrowDown className="text-xs transition-all duration-200 group-hover:rotate-180" />
            )}

            {/* Dropdown Submenu */}
            <ol className="absolute top-full left-0 min-w-max bg-background rounded-md shadow-md py-2 z-50 transition-all duration-200 transform translate-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              {submenu &&
                submenu.map(
                  ({ Icon, label, href, comingSoon, desc }, subIndex) => (
                    <Link
                      href={href}
                      key={subIndex}
                      className="flex gap-4 py-2 px-4 justify-start items-center hover:bg-gray-200/60 transition-opacity duration-150"
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
