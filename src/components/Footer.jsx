import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#0b1320] text-white pt-10 px-6 md:px-20 pb-5">

      <div className="grid md:grid-cols-3 gap-10">

        {/* ABOUT US */}
        <div>
          <h2 className="font-bold text-xl mb-3">ABOUT US</h2>
          <p className="text-sm leading-6">
           We are a friendly second-hand bookstore dedicated to giving books a new home. Our mission is to make reading affordable and accessible for everyone. From classic novels to study materials, we handpick quality used books so you can enjoy great reads at low prices. Discover, save, and share the joy of reading with us.
          </p>
        </div>

        {/* NEWS LETTER */}
        <div>
          <h2 className="font-bold text-xl mb-3">NEWS LETTER</h2>
          <p className="text-sm mb-3">Stay updated with our latest trends</p>

          <div className="flex w-full">
            <input type="email" className="w-full p-2 rounded-l-md text-black bg-white"placeholder="Email ID"/>
            <button className="bg-yellow-500 px-4 rounded-r-md font-bold">→</button>
          </div>
        </div>

        {/* FOLLOW US */}
        <div>
          <h2 className="font-bold text-xl mb-3">FOLLOW US</h2>
          <p className="text-sm mb-3">Let us be social</p>

          <div className="flex gap-4 text-xl">
            <FaInstagram className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
            <FaFacebookF className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="text-center mt-10 border-t border-gray-600 pt-4 text-sm">
        Copyright © 2025 All rights reserved |This website is made with ❤️ by Anna
      </div>
    </footer>
  );
}

export default Footer;
