"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const heroImages = [
  // {
  //   src: "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749661282/IMG_20150131_163023_xonnfd.jpg",
  //   alt: "Stone cutting Exhibition",
  // },
  // {
  //   src: "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749661017/D.W.SAW_60_HP_2013_1_aofmq9.jpg",
  //   alt: "White quartz texture",
  // },
  // {
  //   src: "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749665636/7img_nyhsng.jpg",
  //   alt: "Rocky path",
  // }
  {
    src: "https://res.cloudinary.com/dltpv77qp/image/upload/v1752425150/Screenshot_2025-07-13_221426_hufnxk.png",
    alt: "Stone cutting Exhibition",
  },
  {
    src: "https://res.cloudinary.com/dltpv77qp/image/upload/v1752425223/Screenshot_2025-07-13_221649_khyplx.png",
    alt: "White quartz texture",
  },
  {
    src: "https://res.cloudinary.com/dltpv77qp/image/upload/v1752425270/Screenshot_2025-07-13_221735_ouvtlu.png",
    alt: "Rocky path",
  }
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
    <section id="home" className="pt-3 my-3 md:pt-20 pb-12 md:pb-20 overflow-hidden">
      <div className="container-full px-2 mx-auto" >
        <div className="flex flex-col md:flex-row items-center">
          {/* <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 animate-fade-in">
            <h1 className="text-xl font-semibold text-gray-800 mb-6">
              Cutting through stone like a hot knife cut through butter — our machines don’t just cut, they carve your path to perfection.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#products"
                className="bg-cherry hover:bg-cherry-dark text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center hover:shadow-md hover:scale-105"
              >
                Explore Products
              </Link>
              <Link
                href="#contact"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg transition duration-300 text-center hover:shadow-md hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div> */}

          <div className="w-full md:w-full relative">
            <div className="relative h-[300px] md:h-[600px] w-full overflow-hidden rounded-xl shadow-xl">
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
                      className="h-full w-full"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-3xl font-bold text-cherry mb-2">30+ Years</div>
            <p className="text-gray-600">Industry Experience</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-3xl font-bold text-cherry mb-2">500+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-3xl font-bold text-cherry mb-2">24/7</div>
            <p className="text-gray-600">Technical Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
