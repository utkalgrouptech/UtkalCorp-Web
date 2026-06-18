"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Newlogo } from "@/asserts/header";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/program" },
    { name: "SERVICES", href: "/infra" },
    { name: "INDUSTRIES", href: "/industries" },
    { name: "PROJECTS", href: "/projects" },
    { name: "CAREERS", href: "/carrer" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
        scrolled
          ? "bg-[#071427]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="h-24 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <img
              src={Newlogo.src}
              alt="Utkal Corporation"
              className="h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8">

            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-white text-sm font-medium tracking-wide uppercase hover:text-[#F4B400] transition"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/enquire"
              className="ml-2 bg-[#F4B400] text-black px-6 py-3 rounded-md font-semibold text-sm uppercase hover:scale-105 transition"
            >
              ENQUIRY NOW
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#071427] border-t border-white/10">
          <div className="flex flex-col p-6 gap-4">

            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-white uppercase"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/enquire"
              onClick={() => setMobileOpen(false)}
              className="bg-[#F4B400] text-black text-center py-3 rounded-md font-semibold"
            >
              ENQUIRY NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}