'use client'; // Add this at the very top of the file

import { logo } from '@/asserts/header';
// import logo from '@/asserts/header/Artboard 4 copy 2.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex h-24 justify-between w-full main-container items-center sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bgColor' : 'bg-transparent'
      }`}
    >
      <div className="w-full h-full flex items-center justify-start">
        {logo ? (
          <img src={logo.src} alt="Logo" className="w-34 h-28 " />
        ) : (
          <p>Loading logo...</p>
        )}
      </div>
      <div
        className={`flex h-full w-full font-bold font-serif items-center uppercase justify-evenly gap-6 transition-colors duration-300 ${
          scrolled ? 'text-white' : 'text-blue-900'
        }`}
      >
        <Link href={"/"}>
          <p>Home</p>
        </Link>
        <Link href={"/services"}>
          <p>Services</p>
        </Link>
        <Link href={"/program"}>
          <p>Program</p>
        </Link>
        <Link href={"/contact"}>
          <p>Contact</p>
        </Link>
      </div>
    </header>
  );
}
