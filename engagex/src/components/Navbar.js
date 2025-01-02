"use client"; 

import { RiMenu3Fill } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-4 z-50">
      <img src="/engagex-logo.png" alt="EngageX" className="w-[200px]" />
      <div className="flex space-x-6">
        <button className="px-6 py-2 bg-transparent text-white text-sm font-medium border border-white rounded-full hover:bg-white hover:text-black transition">
          Log in
        </button>
        <button className="px-6 py-2 bg-white text-black text-sm font-medium border border-white rounded-full flex items-center space-x-2 hover:bg-white hover:text-black transition">
          <span>Menu</span>
          <RiMenu3Fill size={20} />
        </button>
      </div>
    </div>
  );
}
