import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SiFacebook } from 'react-icons/si';
import { IoLogoGithub } from 'react-icons/io5';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-200 border-t">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-32" />
          </Link>
          <p className="text-gray-700 text-sm mt-4">
            GreenNest — your trusted eco-store for natural, sustainable, and
            organic lifestyle products.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-[15px] flex flex-col">
            <Link to={'/about'} className="hover:text-green-700 cursor-pointer">
              About Us
            </Link>
            <Link
              to={'/support'}
              className="hover:text-green-700 cursor-pointer"
            >
              Support
            </Link>
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
            <a
              href="https://www.linkedin.com/in/your-link/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-green-700 cursor-pointer" />
            </a>

            <a
              href="https://www.facebook.com/k.m.nazmul.huda.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFacebook className="text-2xl hover:text-green-700 cursor-pointer" />
            </a>

            <a
              href="https://github.com/nazmulHuda121"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub className="text-2xl hover:text-green-700 cursor-pointer" />
            </a>
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
