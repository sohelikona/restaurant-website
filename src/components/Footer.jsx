import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white px-6 py-16 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 text-[10rem] sm:text-[15rem] lg:text-[20rem] text-white/5 font-bold select-none pointer-events-none leading-none">
        Kofeo
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
        <div className="space-y-4 text-center sm:text-left">
          <h4 className="font-semibold text-sm uppercase">About Kofeo</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Washington Ave. Manchester,<br />
            Kentucky 39495
          </p>
          <p className="text-sm text-gray-300">+(378) 555-0108</p>
          <p className="text-sm text-gray-300">kofeo.restaurant@example.com</p>

          <div className="flex space-x-4 mt-4 justify-center sm:justify-start">
            <FaXTwitter className="w-5 h-5 hover:text-gray-400 cursor-pointer transition-colors duration-200" />
            <FaFacebookF className="w-5 h-5 hover:text-gray-400 cursor-pointer transition-colors duration-200" />
            <FaYoutube className="w-5 h-5 hover:text-gray-400 cursor-pointer transition-colors duration-200" />
            <FaInstagram className="w-5 h-5 hover:text-gray-400 cursor-pointer transition-colors duration-200" />
          </div>
        </div>

        <div className="space-y-4 text-center sm:text-left">
          <h4 className="font-semibold text-sm uppercase">Pages</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Our Story</li>
            <li>Our Menu</li>
            <li>Reservation</li>
            <li>Gallery</li>
            <li>Our Chef’s</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div className="hidden md:block" />

        <div className="flex flex-col sm:flex-col md:flex-col items-center sm:items-start md:items-end gap-4">
          <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors duration-200 w-full sm:w-auto">
            Explore Our Menu
          </button>
          <button className="bg-white text-black px-6 py-2 flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200 w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h7.5M5.25 4.5h13.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V5.25a.75.75 0 01.75-.75z" />
            </svg>
            Reserve a Table
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;