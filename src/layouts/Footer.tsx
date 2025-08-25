import { logo } from '@/asserts/header';
import {
  YouTube,
  LinkedIn,
  Instagram,
  Facebook,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-orange-200 text-black">
      <div className="main-container max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 py-12 flex flex-col lg:flex-row justify-between text-sm gap-10">
        {/* LOGO */}
        <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/5 text-center lg:text-left">
          {logo ? (
            <img src={logo.src} alt="Logo" className="w-36 h-28 object-contain" />
          ) : (
            <p>Loading logo...</p>
          )}
        </div>

        {/* MENU */}
        <div className="w-full lg:w-1/5">
          <h3 className="text-lg font-bold text-[#400000] mb-4">MENU</h3>
          <ul className="space-y-2 text-gray-700 hover:[&>li:hover]:text-[#400000] transition-all">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Contact us</li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div className="w-full lg:w-1/5 border-l border-gray-300 pl-5">
          <h3 className="text-lg font-bold text-[#400000] mb-4">PRODUCTS</h3>
          <ul className="space-y-2 text-gray-700 hover:[&>li:hover]:text-[#400000] transition-all">
            <li className="cursor-pointer">Copper</li>
            <li className="cursor-pointer">Aluminium</li>
            <li className="cursor-pointer">Iron</li>
          </ul>
        </div>

        {/* REGISTERED OFFICE */}
        <div className="w-full lg:w-1/5 border-l border-gray-300 pl-5">
          <h3 className="text-lg font-bold text-[#400000] mb-4">REGISTERED OFFICE</h3>
          <div className="space-y-1 text-gray-700">
            <p>Arya Surya Enclave,Fourth Floor,</p>
            <p> Plot No- K5/475,Kalinga Vihar,</p>
            <p>Bhuabneswar,Odisha, India-751019.</p>
          </div>
        </div>

        {/* FOR MORE DETAILS */}
        <div className="w-full lg:w-1/5 border-l border-gray-300 pl-5">
          <h3 className="text-lg font-bold text-[#400000] mb-4">FOR MORE DETAILS</h3>
          <p className="text-gray-700">
            Phone: <span className="font-medium">+91 9777098999</span>,<span> +91 9777063999</span>
                      </p>
          <p className="text-gray-700">
            Email: <span className="font-medium">info@utkalcorporation.in</span>
          </p>

          <h3 className="text-lg font-bold text-[#400000] mt-6 mb-3">FOLLOW US</h3>
          <div className="flex gap-4">
            <YouTube className="text-gray-500 hover:text-red-600 transition-colors cursor-pointer" fontSize="large" />
            <LinkedIn className="text-gray-500 hover:text-blue-700 transition-colors cursor-pointer" fontSize="large" />
            <Instagram className="text-gray-500 hover:text-pink-500 transition-colors cursor-pointer" fontSize="large" />
            <Facebook className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer" fontSize="large" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 text-center py-5 text-sm font-semibold flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-gray-700">
          COPYRIGHT © 2025 Utkal Corporation  PVT LTD. ALL RIGHTS RESERVED.
        </p>
        <p className="flex items-center gap-2 text-gray-700 mt-3 md:mt-0">
          DESIGNED BY <span className="text-red-600 text-lg">🧠</span> Utkal Corporation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
