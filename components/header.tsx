"use client"

import { useState, useEffect } from "react"
import Link from "next/link"  
import Brochure from "@/pages/brochure"
import { Menu, X } from "lucide-react"
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <header
      id="header"
      className={`bg-white shadow-md fixed w-full z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
    >
      <div className="container-full px-10 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="https://res.cloudinary.com/dfigcriri/image/upload/v1749576524/ATC_LOGO.jpeg_hufwqj.jpg" alt="Logo" className="h-14 w-16 mr-2" />
            <Link href="#">
              <h1 className="text-2xl md:text-3xl font-dmSerif font-extrabold text-gray-800">Active Trade Centre<sup>®</sup></h1> 
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-gray-900 font-medium">
              Products
            </Link>
            {/* <Link href="#services" className="text-gray-700 hover:text-gray-900 font-medium">
              Services
            </Link> */}
            <Link href="#gallery" className="text-gray-700 hover:text-gray-900 font-medium">
              Gallery
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">
              Contact
            </Link>
            <Link href="/pdf/brochure.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 font-medium">
              Brochure
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* <button className="text-gray-700 hover:text-gray-900">
              <Search className="h-6 w-6" />
            </button>
            <Link href="#cart" className="text-gray-700 hover:text-gray-900 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-cherry-dark text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link> */}
            <button
              className="md:hidden text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white border-t border-gray-200 ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="container-full px-10 mx-auto py-3">
          <nav className="flex flex-col space-y-3">
 
            <Link href="#home" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-gray-900 font-medium">
              Products
            </Link>
            <Link href="#gallery" className="text-gray-700 hover:text-gray-900 font-medium">
              Gallery
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">
              Contact
            </Link>
            <Link href="/brochure" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 font-medium">
              Brochure
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
