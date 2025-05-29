"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1525468568166-6f2cd17c7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwaW5kdXN0cmlhbCUyNTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDc0MTQxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Stone cutting surface",
  },
  {
    src: "https://images.unsplash.com/photo-1532467411038-57680e3dc0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwaW5kdXN0cmlhbCUyNTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDc0MTQxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "White quartz texture",
  },
  {
    src: "https://images.unsplash.com/photo-1531859663445-5ced1d142f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwaW5kdXN0cmlhbCUyNTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDc0MTQxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Rocky path",
  },
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Active Trade Centre
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              High-performance machinery and tools for precision stone cutting, designed for professionals who demand
              excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#products"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
              >
                Explore Products
              </Link>
              <Link
                href="#contact"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Hero Image Slider */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-xl">
              {/* Image Slider */}
              <div id="hero-slider" className="w-full h-full">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item absolute inset-0 transition-opacity duration-1000 ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Slider Navigation */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full bg-white ${
                      index === currentIndex ? "opacity-100" : "opacity-50"
                    } focus:outline-none`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+ Years</div>
            <p className="text-gray-600">Industry Experience</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-gray-600">Technical Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
