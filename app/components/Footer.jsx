'use client'

import Link from 'next/link';
import Image from 'next/image';

const Footer = () =>   {
  return (
    <footer className="text-white " id="footer" style={{ backgroundColor: '#111c29' }}>
      <div className="py-4 border-b border-gray-700 footer-top">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Contact Info */}
          <div>
            <div className="flex justify-center items-center">
              <Image src="/logo22.png" alt="Resicode logo " width={80}height={50} className=" h-19 w-auto "/>
            </div>
            <p className="text-justify text-md">
              Resicode is a trusted consulting firm committed to delivering impactful strategies and innovative solutions. With a strong focus on digital transformation, business growth, and operational excellence in The Modern Era .
            </p>
          </div>

          {/* Quick Links */}
          <div className="mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-amber-400 ">Quick Links</h4>
            <ul className="text-white mt-7">
              
              {/* Home */}
              <li className="flex items-center space-x-3 mb-3">
                <i className="fa-solid fa-house text-yellow-400 text-lg"></i>
                <Link href="/" className="hover:text-yellow-400 transition font-semibold">Home</Link>
              </li>

              {/* About Us */}
              <li className="flex items-center space-x-3 mb-3">
                <i className="fa-solid fa-user-group text-yellow-400 text-lg"></i>
                <Link href="/about" className="hover:text-yellow-400 transition font-semibold">About Us</Link>
              </li>

              {/* Our Products */}
              <li className="flex items-center space-x-3 mb-3">
                <i className="fa-solid fa-cogs text-yellow-400 text-lg"></i>
                <Link href="/services" className="hover:text-yellow-400 transition font-semibold">Services</Link>
              </li>

              {/* Contact Us */}
              <li className="flex items-center space-x-3">
                <i className="fa-solid fa-users text-yellow-400 text-lg"></i>
                <Link href="/team" className="hover:text-yellow-400 transition font-semibold">Our Team</Link>
              </li>
            </ul>
          </div>



          {/* Essential Links */}
          <div className="mx-auto">
            <h4 className="text-xl font-semibold mb-4  text-amber-400">Essential Links</h4>
            <ul className="text-white mt-7">
              
              {/* rivacy Policy */}
              <li className="flex items-center  space-x-3 mb-3">
                <i className="fa-solid fa-shield-halved text-yellow-400 text-lg"></i>
                <Link href="/privacyPolicy" className="hover:text-yellow-400 transition font-semibold">Privacy Policy</Link>
              </li>

              {/* FAQ / Help */}
              <li className="flex items-center space-x-3 mb-3">
                <i className="fa-solid fa-circle-question text-yellow-400 text-lg"></i>
                <Link href="/faq" className="hover:text-yellow-400 transition font-semibold">FAQ / Help</Link>
              </li>

              {/* Terms & Conditions */}
              <li className="flex items-center space-x-3 mb-3">
                <i className="fa-solid fa-file-contract text-yellow-400 text-lg"></i>
                <Link href="/terms" className="hover:text-yellow-400 transition font-semibold">Terms & Conditions</Link>
              </li>

              {/* Contact Us */}
              <li className="flex items-center space-x-3">
                <i className="fa-solid fa-phone text-yellow-400 text-lg"></i>
                <Link href="/contact" className="hover:text-yellow-400 transition font-semibold ">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Social Networks */}
          <div >
            <h4 className="text-xl font-semibold mb-4 flex justify-center  text-amber-400">Our Social Networks</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex justify-center space-x-4 text-xl mt-5">
            <a href="#" className="inline-block w-9 h-9 bg-gray-700 text-white rounded-full text-center leading-[36px] transition-all duration-500 hover:bg-yellow-400 hover:text-white"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="inline-block w-9 h-9 bg-gray-700 text-white rounded-full text-center leading-[36px] transition-all duration-500 hover:bg-yellow-400 hover:text-white"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="inline-block w-9 h-9 bg-gray-700 text-white rounded-full text-center leading-[36px] transition-all duration-500 hover:bg-yellow-400 hover:text-white"><i className="fa-brands fa-telegram"></i></a>
            <a href="#" className="inline-block w-9 h-9 bg-gray-700 text-white rounded-full text-center leading-[36px] transition-all duration-500 hover:bg-yellow-400 hover:text-white"><i className="fa-brands fa-facebook-f"></i></a>
          </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-5" style={{ backgroundColor: '#131f2d' }}>
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-200">
          © <span className="text-white font-semibold">Resicode 2025</span> | All Rights Reserved.
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;  