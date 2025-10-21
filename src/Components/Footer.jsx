import React from 'react';
import { BsPinterest } from 'react-icons/bs';
import { FaAddressBook, FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { SiFacebook } from 'react-icons/si';

const Footer = () => {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-base-300 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <GrInstagram className="text-3xl text-[#DD2A7B] " />
            <SiFacebook className="text-3xl text-[#1877F2]" />
            <BsPinterest className="text-3xl text-[#E60023]" />
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - GreenNest. All rights
            reserved.
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
