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

export default function Footer() {
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
          <div>
            <h3 className="font-semibold text-gray-800">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Terms & privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Download</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  iOS & Android
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Mac & Windows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Calendar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Web Clipper
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Affiliates
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Notion for</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Small business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Personal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10 text-gray-500 text-sm">
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="text-sm">
              <LuGlobe className="w-4 h-4 mr-2" />
              English
            </Button>
          </div>
          <p className="mt-4 md:mt-0">© 2025 Vecna Labs Pvt Ltd</p>
        </div>
      </div>
    </footer>
  );
}
