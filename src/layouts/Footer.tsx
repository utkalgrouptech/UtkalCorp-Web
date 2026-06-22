"use client";

import { logo } from "@/asserts/header";
import { ChevronRight } from "lucide-react";
import {
  YouTube,
  LinkedIn,
  Instagram,
  Facebook,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-[#061326] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <img
              src={logo.src}
              alt="Utkal Corporation"
              className="h-12 w-auto mb-3"
            />

            <p className="text-white/70 text-sm leading-6">
              Delivering integrated industrial operations, logistics and
              infrastructure solutions with excellence, safety and integrity.
            </p>

            <div className="flex gap-2 mt-4">
              {[
                <Facebook fontSize="small" />,
                <LinkedIn fontSize="small" />,
                <Instagram fontSize="small" />,
                <YouTube fontSize="small" />,
              ].map((icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#F4B400] hover:text-[#F4B400] transition-all cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

       {/* Quick Links */}
<div>
  <h3 className="text-white font-semibold mb-3 uppercase text-sm">
    Quick Links
  </h3>

  <ul className="space-y-2 text-white/70 text-sm">
    {[
      "Home",
      "About Us",
      "Services",
      "Industries",
      "Projects",
      "Careers",
      "Contact",
    ].map((item) => (
      <li
        key={item}
        className="group flex items-center gap-2 cursor-pointer hover:text-[#F4B400] transition-all"
      >
        <ChevronRight
          size={14}
          className="text-[#F4B400] transition-transform duration-300 group-hover:translate-x-1"
        />
        {item}
      </li>
    ))}
  </ul>
</div>

        {/* Services */}
<div>
  <h3 className="text-white font-semibold mb-3 uppercase text-sm">
    Our Services
  </h3>

  <ul className="space-y-2 text-white/70 text-sm">
    {[
      "Plant O&M",
      "In-Plant Logistics",
      "Railway Logistics",
      "Mining Services",
      "Port Operations",
      "Material Handling",
      "Heavy Equipment Management",
    ].map((service) => (
      <li
        key={service}
        className="group flex items-center gap-2 cursor-pointer hover:text-[#F4B400] transition-all"
      >
        <ChevronRight
          size={14}
          className="text-[#F4B400] transition-transform duration-300 group-hover:translate-x-1"
        />
        {service}
      </li>
    ))}
  </ul>
</div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 uppercase text-sm">
              Contact Us
            </h3>

            <div className="space-y-3 text-sm text-white/70">
              <div className="flex gap-2">
                <LocationOn
                  className="text-[#F4B400] mt-0.5"
                  fontSize="small"
                />
                <p>
                  Arya Surya Enclave, Plot No- K5/475,
                  <br />
                  Khata No 95/937, Fourth Floor,
                  Kalinga Vihar, Patrapada,
                  Bhubaneswar, Odisha 751019
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <Phone
                  className="text-[#F4B400]"
                  fontSize="small"
                />
                <p>+91 98530 94447</p>
              </div>

              <div className="flex gap-2 items-center">
                <Email
                  className="text-[#F4B400]"
                  fontSize="small"
                />
                <p>info@utkalcorporation.in</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
          <p>
            © 2025 Utkal Corporation Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <a
              href="#"
              className="hover:text-[#F4B400] transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-[#F4B400] transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;