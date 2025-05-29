"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"

const productCategories = [
  {
    title: "Cutting Machines",
    description: "Professional-grade stone cutting machines for precision work.",
    image:
      "https://images.unsplash.com/photo-1525468568166-6f2cd17c7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwaW5kdXN0cmlhbCUyNTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDc0MTQzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Precision Tools",
    description: "Specialized tools for detailed stone cutting and finishing.",
    image:
      "https://images.unsplash.com/photo-1532467411038-57680e3dc0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwaW5kdXN0cmlhbCUyNTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDc0MTQzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Accessories",
    description: "Essential accessories to enhance your stone cutting operations.",
    image:
      "https://images.unsplash.com/photo-1531859663445-5ced1d142f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwaW5kdXN0cmlhbCUyNTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDc0MTQzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
]

const featuredProducts = [
  {
    title: "Stone Cutter Pro X5",
    description: "High-precision industrial stone cutting machine with advanced features.",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1509888522721-7e687235ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwaW5kdXN0cmlhbCUyNTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDc0MTQzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: { text: "New", color: "blue" },
  },
  {
    title: "Diamond Blade Set",
    description: "Professional-grade diamond blade set for precise cutting of various stone types.",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1515133356580-c863eed555e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwaW5kdXN0cmlhbCUyNTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDc0MTQzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: { text: "Best Seller", color: "green" },
  },
  {
    title: "Compact Stone Grinder",
    description: "Versatile and powerful stone grinding tool for detailed finishing work.",
    price: 649,
    originalPrice: 799,
    image:
      "https://images.unsplash.com/photo-1535448033526-c0e85c9e6968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Nnx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwaW5kdXN0cmlhbCUyNTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDc0MTQzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: { text: "Sale", color: "red" },
  },
]

export default function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [carouselWidth, setCarouselWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of stone cutting machinery and tools designed for precision, durability, and
            performance.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link
                  href="#"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              } focus:outline-none`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
