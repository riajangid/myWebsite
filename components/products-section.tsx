"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const featuredProducts = [
  {
    title: "Diamond Wire Saw Machine 15kW/20 HP",
    description: "Professional-grade stone cutting machines for precision work.",
    price: 649,
    originalPrice: 799,
    image:
      "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749665779/8_hwxve8.jpg",
  },
  {
    title: "Diamond Wire Saw Machine 45kW/60 HP",
    description: "Specialized tools for detailed stone cutting and finishing.",
    price: 649,
    originalPrice: 799,
    image:
      "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749661017/D.W.SAW_60_HP_2013_1_aofmq9.jpg",
  },
  {
    title: "Seamless pipe rod 4” LD4",
    description: "Essential accessories to enhance your stone cutting operations.",
    price: 649,
    originalPrice: 799,
    image:
      "https://res.cloudinary.com/dltpv77qp/image/upload/v1750869524/WhatsApp_Image_2025-06-25_at_22.05.26_c3397544_tz8qlr.jpg",
  }
  ,{
    title: "Diamond Wire Saw Machine 45kW/60 HP commercial quality",
    description: "High-precision industrial stone cutting machine with advanced features.",
    price: 2499,
    image:
      "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749666110/11_jefjfi.jpg",
    badge: { text: "New", color: "blue" },
  },
  {
    title: "C.I. Hub/Housing DC Gear Box Spare",
    description: "Professional-grade diamond blade set for precise cutting of various stone types.",
    price: 899,
    image:
      "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749666229/12_tlodxc.jpg",
    badge: { text: "Best Seller", color: "green" },
  },
  {
    title: "S.P. Chucknut",
    description: "Versatile and powerful stone grinding tool for detailed finishing work.",
    price: 649,
    originalPrice: 799,
    image:
      "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749661095/CAT41CN80SD_wl8lty.jpg",
    badge: { text: "Sale", color: "red" },
  }
]


export default function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [carouselWidth, setCarouselWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
    const chunkedProducts = (arr:any, chunkSize:number) => {
    const result = []
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize))
    }
    return result
  }

  const productChunks = chunkedProducts(featuredProducts, 3)
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setCarouselWidth(containerRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)

    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < featuredProducts.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const updateCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * carouselWidth}px)`
    }
  }

  useEffect(() => {
    updateCarousel()
  }, [currentIndex, carouselWidth])

  return (
    <section id="products" className="py-16 bg-gray-50 ">
          <div className="relative w-full overflow-hidden">
          <div className=" marquee flex animate-marquee">
              {featuredProducts.map((product, index) => (
                <div key={index} className="flex-shrink-0 w-1/2 md:w-1/3 px-4 h-full p-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className=" h-32 md:h-64 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover transition duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <Link href='#contact' className="text-red-800 font-semibold">Contact Us for best price</Link>
                      {/* {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )} */}
                    </div>
                  </div>
                </div>
              ))}
      </div>
      </div>
      {/* <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of stone cutting machinery and tools designed for precision, durability, and
            performance.
          </p>
        </div>

        
        
        
          <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-hidden w-full"
          >
            <div
              ref={carouselRef}
              className="flex transition-transform duration-300"
            >
              {featuredProducts.map((product, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-4 h-full p-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="h-64 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover transition duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <Link href='#contact' className="text-red-800 font-semibold">Contact Us for best price</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>

        <div className="flex justify-center mt-6 space-x-2">
          {productChunks.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-cherry" : "bg-gray-300"
              } focus:outline-none`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="#gallery"
            className="hover:scale-105 hover:shadow-lg inline-block bg-gray-800 hover:bg-gray-950 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            View All Products
          </Link>
        </div>
      </div> */}
    </section>
  )
}
