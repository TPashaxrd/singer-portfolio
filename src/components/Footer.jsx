import React from 'react';
import { FaApple, FaFacebook, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left section - Logo */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="flex items-center">
              <img
                src="http://www.yalinonline.com/assets/images/logo/logo.png"
                alt="Logo"
                className="h-12 mr-4"
              />
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex gap-6 justify-center">
            <a href="https://facebook.com/" className="text-2xl hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="https://x.com/" className="text-2xl hover:text-gray-400">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/toprak.altins" className="text-2xl hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@motive.basarim" className="text-2xl hover:text-gray-400">
              <FaYoutube />
            </a>
            <a href="https://open.spotify.com/user/315yeswf4qqxbacj5xhkmwy553ei?si=2a7b12fa0bcb4db7" className="text-2xl hover:text-gray-400">
              <FaSpotify />
            </a>
            <a href="https://music.apple.com/tr/artist/" className="text-2xl hover:text-gray-400">
              <FaApple />
            </a>
          </div>
        </div>

        {/* Bottom section - Copyright or additional links */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Toprak. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
