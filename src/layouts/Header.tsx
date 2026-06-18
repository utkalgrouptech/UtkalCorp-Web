'use client';

import { Newlogo } from '@/asserts/header';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/section' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Projects', href: '/projects' },
    { label: 'Careers', href: '/carrer' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#071427]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/">
            <img
              src={Newlogo.src}
              alt="Utkal Corporation"
              className="h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white uppercase text-sm tracking-wider font-medium hover:text-[#f4b400] transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-[#f4b400] text-black font-semibold px-6 py-3 rounded-md hover:scale-105 transition"
            >
              REQUEST PROPOSAL
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#071427] border-t border-white/10">
          <div className="flex flex-col px-6 py-5 gap-5">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-white uppercase text-sm"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="bg-[#f4b400] text-black text-center py-3 rounded-md font-semibold"
            >
              REQUEST PROPOSAL
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}