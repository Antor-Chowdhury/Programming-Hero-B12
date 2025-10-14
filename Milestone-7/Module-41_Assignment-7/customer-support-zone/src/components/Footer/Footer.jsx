import React from "react";

import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkdin.png";
import facebook from "../../assets/facebook.png";
import gmail from "../../assets/gmail.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-300 px-20 py-12 mt-20">
        <div className="grid md:grid-cols-5 gap-8 mx-auto">
          <div>
            <h3 className="text-white font-semibold mb-4">
              CS — Ticket System
            </h3>
            <p className="text-sm">
              CS Ticket System is a customer support management platform that
              tracks, prioritizes, and resolves user issues efficiently through
              organized tickets, real-time status updates, and streamlined
              communication between support teams and clients.
            </p>
          </div>
          <div className="md:ml-5">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Administrator</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-4 text-sm">
              <li>Product & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Information</h4>
            <ul className="space-y-4  text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Social Links</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <img className="inline w-5 h-5 mr-1" src={twitter} alt="" /> @CS
                — Ticket System
              </li>
              <li>
                <img className="inline w-5 h-5 mr-1" src={linkedin} alt="" />{" "}
                @CS — Ticket System
              </li>
              <li>
                <img className="inline w-5 h-5 mr-1" src={facebook} alt="" />{" "}
                @CS — Ticket System
              </li>
              <li>
                <img className="inline w-5 h-5 mr-1" src={gmail} alt="" />{" "}
                support@cst.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border-1 mt-20 border-gray-800"></div>
        <div className="text-left md:text-center text-gray-500 text-sm mt-8">
          © 2025 CS — Ticket System.
          <br className="block md:hidden" /> All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
