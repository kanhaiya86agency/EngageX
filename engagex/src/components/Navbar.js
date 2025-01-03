"use client";

import Image from "next/image";
import hamburger from "../../public/Hamburger.png";
import logo from "../../public/engagex-logo.png";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-4 z-50">
      <Image src={logo} alt="EngageX" className="w-[200px]" />
      <div className="flex space-x-6">
        <button className="px-6 py-2 bg-transparent text-white text-sm font-medium border border-white rounded-full transition ">
          Log in
        </button>
        <button className="px-6 py-2 bg-white text-black text-sm font-medium border border-white rounded-full flex items-center space-x-2 transition">
          <span>Menu</span>
          <Image src={hamburger} alt="hamburger" className="w-[20px]" />
        </button>
      </div>
    </div>
  );
}
