import React from 'react';
import { GrInstagram } from 'react-icons/gr';
import { SiFacebook } from 'react-icons/si';
import { BsPinterest } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-[#e1dcd7] border-t">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <img src="/logo.png" alt="Logo" className="w-40 mb-4" />
          <p className="text-gray-700 text-sm">
            GreenNest — your trusted eco-store for natural, sustainable, and
            organic lifestyle products.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-[15px]">
            <li className="hover:text-green-700 cursor-pointer">About Us</li>
            <li className="hover:text-green-700 cursor-pointer">Contact</li>
            <li className="hover:text-green-700 cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-[15px]">
            <li className="hover:text-green-700 cursor-pointer">Help Center</li>
            <li className="hover:text-green-700 cursor-pointer">
              Shipping Info
            </li>
            <li className="hover:text-green-700 cursor-pointer">Track Order</li>
            <li className="hover:text-green-700 cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-5">
            <GrInstagram className="text-2xl hover:text-green-700 cursor-pointer" />
            <SiFacebook className="text-2xl hover:text-green-700 cursor-pointer" />
            <BsPinterest className="text-2xl hover:text-green-700 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="border-t py-5 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} GreenNest — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
