import React from 'react';
import { BsPinterest } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { SiFacebook } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="w-full p-12 bg-gradient-to-b from-green-950 via-black to-green-950">
      <div className="flex flex-col items-center gap-6">
        {/* Links */}
        <nav className="flex flex-wrap gap-8 justify-center">
          <a className="text-green-200 font-medium hover:text-white hover:underline cursor-pointer transition-all duration-300">
            About us
          </a>
          <a className="text-green-200 font-medium hover:text-white hover:underline cursor-pointer transition-all duration-300">
            Contact
          </a>
          <a className="text-green-200 font-medium hover:text-white hover:underline cursor-pointer transition-all duration-300">
            Privacy Policy
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center mt-4">
          <GrInstagram className="text-3xl text-[#E1306C] hover:text-green-400 hover:scale-125 transition-all duration-300 cursor-pointer" />
          <SiFacebook className="text-3xl text-[#1877F2] hover:text-green-400 hover:scale-125 transition-all duration-300 cursor-pointer" />
          <BsPinterest className="text-3xl text-[#E60023] hover:text-green-400 hover:scale-125 transition-all duration-300 cursor-pointer" />
        </div>

        {/* Copyright */}
        <p className="mt-6 text-gray-400 text-center">
          Copyright © {new Date().getFullYear()} - GreenNest. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
