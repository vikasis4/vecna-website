import { Button } from "@/packages/ui/button";
import { LuGlobe } from "react-icons/lu";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";
import { appName } from "@/config/metadata";
import getImageData from "@/config/imagesLink";
import Image from "next/image";
import language from "@/language";
const { footer: CONST } = language;

export default function Footer() {
  const isAuthenticated = !true;
  if (isAuthenticated) return null;
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-10">
        {/* Logo and Socials */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-3">
            <Image {...getImageData("logo", 40)} />
            <span className="text-xl font-bold"> {appName}</span>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaInstagram className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            <FaXTwitter className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            <FaFacebook className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            <FaYoutube className="w-5 h-5 cursor-pointer hover:text-gray-600" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-gray-600">
          {CONST.sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-800">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="hover:text-black">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10 text-gray-500 text-sm">
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="text-sm">
              <LuGlobe className="w-4 h-4 mr-2" />
              {CONST.languageButton}
            </Button>
          </div>
          <p className="mt-4 md:mt-0">{CONST.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
