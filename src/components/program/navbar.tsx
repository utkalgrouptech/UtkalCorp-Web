"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { logo } from "@/asserts/header"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleMouseEnter = (name: string) => setActiveDropdown(name)
  const handleMouseLeave = () => setActiveDropdown(null)

  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => (prev === name ? null : name))
  }

  const closeMobileMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  const desktopMenus = [
    {
      name: "business",
      label: "BUSINESS VERTICALS",
      items: [
        { href: "/recycling", label: "Recycling" },
        { href: "/manufacturing", label: "Manufacturing" },
        { href: "/trading", label: "Trading" },
      ],
    },
    {
      name: "products",
      label: "PRODUCTS",
      items: [
        { href: "/alluminium", label: "Aluminum" },
        { href: "/services", label: "Copper" },
        { href: "/iron", label: "Iron" },
      ],
    },
    {
      name: "media",
      label: "MEDIA",
      items: [
        { href: "/pressreleases", label: "Press Releases" },
        { href: "/news", label: "News" },
      ],
    },
  ]

  const mobileMenus = [
    {
      name: "mobile-business",
      label: "BUSINESS VERTICALS",
      items: [
        { href: "/recycling", label: "Recycling" },
        { href: "/manufacturing", label: "Manufacturing" },
        { href: "/trading", label: "Trading" },
      ],
    },
    {
      name: "mobile-products",
      label: "PRODUCTS",
      items: [
        { href: "/alluminium", label: "Aluminum" },
        { href: "/services", label: "Copper" },
        { href: "/iron", label: "Iron" },
      ],
    },
    {
      name: "mobile-media",
      label: "MEDIA",
      items: [
        { href: "/pressreleases", label: "Press Releases" },
        { href: "/news", label: "News" },
      ],
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-16 w-32">
              <img src={logo.src} alt="Logo" className="object-contain h-full w-full" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            <Link
              href="/program"
              className="px-3 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-100 rounded-md transition-colors"
            >
              ABOUT US
            </Link>

            {desktopMenus.map(({ name, label, items }) => (
              <div
                className="relative"
                key={name}
                onMouseEnter={() => handleMouseEnter(name)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-3 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-100 rounded-md flex items-center gap-1 transition-colors">
                  {label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-xl z-50 animate-fade-in-down">
                    <div className="py-1">
                      {items.map(({ href, label }) => (
                        <Link
                          key={label}
                          href={href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 transition-colors"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-100 rounded-md transition-colors"
            >
              CONTACT US
            </Link>

            <Link
              href="/enquire"
              className="ml-4 px-5 py-2 text-sm font-semibold text-white bg-yellow-500 hover:bg-yellow-600 rounded-full transition-colors"
            >
              ENQUIRE NOW
            </Link>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="px-4 py-4 space-y-2">
            <Link
              href="/program"
              onClick={closeMobileMenu}
              className="block text-base font-medium text-gray-900 hover:bg-yellow-50 px-3 py-2 rounded-md"
            >
              ABOUT US
            </Link>

            {mobileMenus.map(({ name, label, items }) => (
              <div key={name}>
                <button
                  className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-900 hover:bg-yellow-50 rounded-md"
                  onClick={() => toggleDropdown(name)}
                >
                  {label}
                  <ChevronDown className="h-5 w-5" />
                </button>
                {activeDropdown === name && (
                  <div className="pl-6 mt-1 space-y-1">
                    {items.map(({ href, label }) => (
                      <Link
                        key={label}
                        href={href}
                        onClick={closeMobileMenu}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-yellow-50 rounded-md"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block text-base font-medium text-gray-900 hover:bg-yellow-50 px-3 py-2 rounded-md"
            >
              CONTACT US
            </Link>

            <Link
              href="/enquire"
              onClick={closeMobileMenu}
              className="block w-full text-center text-white bg-yellow-500 hover:bg-yellow-600 font-medium px-4 py-2 rounded-md"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
