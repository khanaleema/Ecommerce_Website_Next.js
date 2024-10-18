import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"; // Social media icons
import { FaGlobe } from "react-icons/fa"; // Portfolio icon

const Footer = () => {
  return (
    <div className="bg-accent text-blackish-500 text-center py-4 pb-16 md:pb-4">
      <div className="container">
        <div className="flex justify-center gap-4 mb-4">
          {/* Social media icons with links */}
          <div className="footer_icon_wrapper">
            <a href="https://my-portfolio-com-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-black">
              <FaGlobe size={24} />
            </a>
          </div>
          <div className="footer_icon_wrapper">
            <a href="https://github.com/khanaleema" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-black">
              <BsGithub size={24} />
            </a>
          </div>
          <div className="footer_icon_wrapper">
            <a href="https://www.instagram.com/i._.aleemakhan/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-black">
              <BsInstagram size={24} />
            </a>
          </div>
          <div className="footer_icon_wrapper">
            <a href="https://www.linkedin.com/in/aleemakhan17/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-black">
              <BsLinkedin size={24} />
            </a>
          </div>
        </div>
        <div>
          Copyright 0 Logo <br /> All Rights Reserved 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
