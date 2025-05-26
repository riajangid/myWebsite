"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Robert Johnson",
    company: "Stone Works Inc.",
    image:
      "https://images.unsplash.com/photo-1525468568166-6f2cd17c7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMHRlc3RpbW9uaWFsJTI1MjBwcm9mZXNzaW9uYWwlMjUyMHNhZmV0eXxlbnwwfDB8fHwxNzQ3NDY5MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    quote:
      "The precision and reliability of the stone cutting machinery we purchased has transformed our production process. We've increased output by 40% while maintaining exceptional quality. The customer support team has been outstanding throughout the entire process.",
  },
  {
    name: "Sarah Martinez",
    company: "Architectural Designs Co.",
    image:
      "https://images.unsplash.com/photo-1532467411038-57680e3dc0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMHRlc3RpbW9uaWFsJTI1MjBwcm9mZXNzaW9uYWwlMjUyMHNhZmV0eXxlbnwwfDB8fHwxNzQ3NDY5MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    quote:
      "As a small architectural firm, we needed precision tools that could handle delicate stone work. The equipment we purchased exceeded our expectations. The cuts are flawless, and the tools are incredibly durable. Their training program was comprehensive and got our team up to speed quickly.",
  },
  {
    name: "Michael Thompson",
    company: "Thompson Landscaping",
    image:
      "https://images.unsplash.com/photo-1531859663445-5ced1d142f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8c3RvbmUlMjUyMGN1dHRpbmclMjUyMHRlc3RpbW9uaWFsJTI1MjBwcm9mZXNzaW9uYWwlMjUyMHNhZmV0eXxlbnwwfDB8fHwxNzQ3NDY5MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    quote:
      "We've been in the landscaping business for over 20 years, and these are by far the best stone cutting tools we've ever used. The durability is impressive, and the precision allows us to create unique designs for our clients. Their maintenance service is prompt and professional.",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)

    return () => {
      window.removeEventListener("resize", updateWidth)
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`
    }
  }, [currentIndex, slideWidth])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our customers have to say about our stone cutting machinery and tools.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-5xl mx-auto" ref={containerRef}>
          <div id="testimonial-slider" className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              id="testimonial-container"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={`${testimonial.name}'s project`}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover md:h-80"
                        />
                      </div>
                      <div className="md:w-2/3 p-8">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <blockquote className="text-gray-700 text-lg italic mb-6">"{testimonial.quote}"</blockquote>
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                          <div>
                            <div className="font-semibold text-gray-800">{testimonial.name}</div>
                            <div className="text-gray-600">{testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <button
            id="prev-testimonial"
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 ml-2 focus:outline-none"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            id="next-testimonial"
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 mr-2 focus:outline-none"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              } focus:outline-none`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Testimonial Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">Satisfied Customers</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-gray-600">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
