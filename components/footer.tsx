import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-full px-10 mx-auto">
        {/* Footer Top Section with Logo and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Logo and Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-white">ATC</h2>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Premium stone cutting machinery and tools for professionals. Delivering precision, reliability, and
              exceptional performance for over 30+ years.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              {/* <a
                href="#"
                className="bg-cherry-dark hover:bg-cherry-dark text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a> */}
              <a
                href="#"
                className="bg-blue-700 hover:bg-blue-800 hover:scale-105 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_activetradecentre?igsh=MTZ1aDNuMDQyam12eg=="
                className="bg-pink-600 hover:bg-pink-700 text-white hover:scale-105 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          {/* <div>
            <h3 className="text-xl font-semibold text-white mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Stay updated with our latest products, industry news, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-cherry hover:bg-cherry-dark text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#products" className="text-gray-400 hover:text-white transition duration-300">
                  Stone Cutting Machines
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-400 hover:text-white transition duration-300">
                  Precision Tools
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-400 hover:text-white transition duration-300">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-400 hover:text-white transition duration-300">
                  Replacement Parts
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-400 hover:text-white transition duration-300">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-400 hover:text-white transition duration-300">
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition duration-300">
                  Maintenance & Repair
                </Link>
              </li>
              {/* <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition duration-300">
                  Training & Consultation
                </Link>
              </li> */}
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition duration-300">
                  Custom Solutions
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition duration-300">
                  Parts & Accessories
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition duration-300">
                  Warranty & Support
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition duration-300">
                  Service Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-400 hover:text-white transition duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/pdf/brochure.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  Brochure
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                  User Manuals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Warranty Information
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg h-40">
                <Image
                  src="https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749666694/14_se1gxi.jpg"
                  alt="Industrial machinery"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-40">
                <Image
                  src="https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749666693/15_v8dqpm.jpg"
                  alt="Industrial equipment"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                  <span className="text-gray-400">
                    8A, Vishwakarma Nagar-III, Sarna Dungar Industrial Area, Benar Road, Jhotwara
                    <br />
                    Jaipur-12, Rajasthan
                  </span>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                  <span className="text-gray-400">+91 9001544899</span>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                  <span className="text-gray-400">atc.sales93@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                  <span className="text-gray-400">
                    Monday - Saturday: 8:00 AM - 6:00 PM
                    
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; 2025 Active Trade Centre<sup>®</sup>. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://privacy-policy.diamondwiresawmachines.com/" className="text-gray-500 hover:text-gray-400 text-sm transition duration-300">
                Privacy Policy
              </Link>
              <Link href="https://terms-conditions.diamondwiresawmachines.com/" className="text-gray-500 hover:text-gray-400 text-sm transition duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm transition duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}







