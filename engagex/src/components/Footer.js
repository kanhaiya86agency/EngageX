import React from "react";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 px-4">
      <div className="flex px-5 flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="./engageX_black.png"
            alt="Logo"
            className="lg:w-[200px] w-[120px]"
          />
        </div>
        {/* Social media icons */}
        <div className="flex space-x-4">
          <a href=" " target="_blank" rel="noopener noreferrer" className="">
            <img src="./facebook.png" alt="Facebook" className="w-[32px]" />
          </a>
          <a
            href="https://x.com/EngageX_world"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            <img src="./twitter.png" alt="twitter" className="w-[32px]" />
          </a>
          <a
            href="https://www.instagram.com/engagex.world/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition"
          >
            <img src="./instagram.png" alt="instagram" className="w-[32px]" />
          </a>
          <a
            href="https://www.linkedin.com/company/engagex-world/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700 transition"
          >
            <img src="./linkedin.png" alt="linkedin" className="w-[32px]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
