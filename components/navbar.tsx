"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, ShoppingCart, Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <nav className="container-full px-10 mx-auto flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-slate-800">
            Chomu Website
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-slate-600 hover:text-slate-900">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="text-slate-600 hover:text-slate-900">
            <Search className="h-5 w-5" />
          </button>
          <Link href="/cart" className="text-slate-600 hover:text-slate-900 relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-cherry-dark text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              1
            </span>
          </Link>

          {/* Mobile menu button */}
          <button type="button" className="md:hidden text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-2">
          <div className="container-full px-10 mx-auto space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-slate-600 hover:text-slate-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
