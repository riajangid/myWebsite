"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tag, Settings, BookOpen, Puzzle, LayoutGrid, LifeBuoy, X } from "lucide-react"

const services = [
  {
    id: "equipment-sales",
    title: "Equipment Sales",
    description:
      "We offer a wide range of high-quality stone cutting machinery and tools for professionals and businesses of all sizes.",
    image:
      "https://images.unsplash.com/photo-1525468568166-6f2cd17c7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBicmlnaHR8ZW58MHwwfHx8MTc0NzQxNDQwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: <Tag className="h-6 w-6" />,
    details: `
      <p class="mb-4">Our comprehensive equipment sales service includes:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Wide range of stone cutting machinery for various applications</li>
        <li>Professional-grade tools for precision cutting and finishing</li>
        <li>Customized equipment solutions based on your specific requirements</li>
        <li>Competitive pricing and flexible financing options</li>
        <li>Expert guidance to help you select the right equipment</li>
      </ul>
      <p>All our equipment comes with warranty coverage and dedicated after-sales support to ensure optimal performance and longevity.</p>
    `,
  },
  {
    id: "maintenance-repair",
    title: "Maintenance & Repair",
    description:
      "Our expert technicians provide comprehensive maintenance and repair services to keep your equipment running at peak performance.",
    image:
      "https://images.unsplash.com/photo-1532467411038-57680e3dc0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBicmlnaHR8ZW58MHwwfHx8MTc0NzQxNDQwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: <Settings className="h-6 w-6" />,
    details: `
      <p class="mb-4">Our maintenance and repair services include:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Routine maintenance to prevent breakdowns and extend equipment life</li>
        <li>Emergency repair services with quick response times</li>
        <li>Comprehensive diagnostics and troubleshooting</li>
        <li>Genuine replacement parts and components</li>
        <li>Maintenance contracts with scheduled service visits</li>
        <li>Performance optimization to improve efficiency</li>
      </ul>
      <p>Our team of certified technicians has extensive experience with all major brands and models of stone cutting equipment.</p>
    `,
  },
  {
    id: "training-consultation",
    title: "Training & Consultation",
    description:
      "We provide comprehensive training programs and expert consultation to help you maximize efficiency and productivity.",
    image:
      "https://images.unsplash.com/photo-1531859663445-5ced1d142f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBicmlnaHR8ZW58MHwwfHx8MTc0NzQxNDQwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: <BookOpen className="h-6 w-6" />,
    details: `
      <p class="mb-4">Our training and consultation services include:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Comprehensive operator training for new equipment</li>
        <li>Advanced techniques for experienced operators</li>
        <li>Safety protocols and best practices</li>
        <li>Workflow optimization consultation</li>
        <li>Production efficiency analysis</li>
        <li>Custom training programs tailored to your specific needs</li>
      </ul>
      <p>Our expert trainers provide hands-on instruction to ensure your team can maximize the potential of your equipment while maintaining safety standards.</p>
    `,
  },
  {
    id: "custom-solutions",
    title: "Custom Solutions",
    description:
      "We design and implement tailored solutions to meet your specific stone cutting requirements and business needs.",
    image:
      "https://images.unsplash.com/photo-1509888522721-7e687235ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBicmlnaHR8ZW58MHwwfHx8MTc0NzQxNDQwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: <Puzzle className="h-6 w-6" />,
    details: `
      <p class="mb-4">Our custom solutions service includes:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Tailored equipment configurations for unique applications</li>
        <li>Custom tool development for specialized cutting requirements</li>
        <li>Integration of automation and digital controls</li>
        <li>Workflow design and optimization</li>
        <li>Facility layout planning for maximum efficiency</li>
        <li>Scalable solutions that grow with your business</li>
      </ul>
      <p>We work closely with you to understand your specific challenges and develop innovative solutions that address your unique needs.</p>
    `,
  },
  {
    id: "parts-accessories",
    title: "Parts & Accessories",
    description:
      "We supply a comprehensive range of genuine parts and accessories to enhance the performance of your equipment.",
    icon: <LayoutGrid className="h-6 w-6" />,
    details: `
      <p class="mb-4">Our parts and accessories service includes:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Genuine replacement parts for all major equipment brands</li>
        <li>Specialized cutting blades and tools</li>
        <li>Performance-enhancing accessories</li>
        <li>Consumables and maintenance supplies</li>
        <li>Fast shipping and delivery options</li>
        <li>Inventory management assistance</li>
      </ul>
      <p>We maintain a comprehensive inventory of parts and accessories to minimize downtime and keep your operations running smoothly.</p>
    `,
  },
  {
    id: "warranty-support",
    title: "Warranty & Support",
    description:
      "We offer comprehensive warranty coverage and 24/7 technical support to ensure your operations run smoothly.",
    icon: <LifeBuoy className="h-6 w-6" />,
    details: `
      <p class="mb-4">Our warranty and support services include:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Comprehensive warranty coverage for new equipment</li>
        <li>Extended warranty options for additional protection</li>
        <li>24/7 technical support via phone and email</li>
        <li>Remote diagnostics and troubleshooting</li>
        <li>Expedited service for warranty claims</li>
        <li>Detailed documentation and support resources</li>
      </ul>
      <p>Our dedicated support team is committed to resolving issues quickly and efficiently to minimize disruption to your operations.</p>
    `,
  },
]

export default function ServicesSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentService, setCurrentService] = useState<(typeof services)[0] | null>(null)

  const openModal = (serviceId: string) => {
    const service = services.find((s) => s.id === serviceId)
    if (service) {
      setCurrentService(service)
      setModalOpen(true)
      document.body.style.overflow = "hidden"
    }
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solutions for all your stone cutting needs, from equipment sales to maintenance and
            training.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                {service.image ? (
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-cherry bg-opacity-80 flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 mx-auto mb-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        <p className="text-lg font-semibold">{service.title}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-cherry">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  className="text-cherry hover:text-blue-800 font-medium flex items-center transition duration-300"
                  onClick={() => openModal(service.id)}
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Service Process</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cherry text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Consultation</h4>
              <p className="text-gray-600">We discuss your specific needs and requirements</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cherry text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Assessment</h4>
              <p className="text-gray-600">Our experts evaluate your current setup and challenges</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cherry text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Implementation</h4>
              <p className="text-gray-600">We deliver and implement the optimal solution</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cherry text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Follow-up</h4>
              <p className="text-gray-600">Ongoing support and maintenance to ensure success</p>
            </div>
          </div>
        </div>

        {/* Service Packages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Service Packages</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform transition duration-300 hover:shadow-xl">
              <div className="bg-gray-100 p-6 text-center">
                <h4 className="text-xl font-bold text-gray-800">Basic Package</h4>
                <div className="text-3xl font-bold text-cherry my-4">
                  $499<span className="text-sm text-gray-600 font-normal">/year</span>
                </div>
                <p className="text-gray-600">For small businesses and startups</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Annual equipment inspection
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Basic maintenance service
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Phone and email support
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    10% discount on parts
                  </li>
                </ul>
                <button className="w-full bg-cherry hover:bg-cherry-dark text-white font-medium py-2 px-4 rounded-lg transition duration-300 mt-6">
                  Get Started
                </button>
              </div>
            </div>

            {/* Professional Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-500 transform transition duration-300 hover:shadow-xl scale-105">
              <div className="bg-cherry p-6 text-center">
                <h4 className="text-xl font-bold text-white">Professional Package</h4>
                <div className="text-3xl font-bold text-white my-4">
                  $999<span className="text-sm text-blue-200 font-normal">/year</span>
                </div>
                <p className="text-blue-100">For growing businesses</p>
                <div className="bg-yellow-400 text-blue-800 text-xs font-bold px-2 py-1 rounded-full inline-block mt-2">
                  MOST POPULAR
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Bi-annual equipment inspection
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Comprehensive maintenance service
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Priority phone and email support
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    20% discount on parts
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    4 hours of operator training
                  </li>
                </ul>
                <button className="w-full bg-cherry hover:bg-cherry-dark text-white font-medium py-2 px-4 rounded-lg transition duration-300 mt-6">
                  Get Started
                </button>
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform transition duration-300 hover:shadow-xl">
              <div className="bg-gray-100 p-6 text-center">
                <h4 className="text-xl font-bold text-gray-800">Enterprise Package</h4>
                <div className="text-3xl font-bold text-cherry my-4">
                  $1,999<span className="text-sm text-gray-600 font-normal">/year</span>
                </div>
                <p className="text-gray-600">For large operations</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Quarterly equipment inspection
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Premium maintenance service
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    30% discount on parts
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    8 hours of operator training
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Annual process optimization
                  </li>
                </ul>
                <button className="w-full bg-cherry hover:bg-cherry-dark text-white font-medium py-2 px-4 rounded-lg transition duration-300 mt-6">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-cherry rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Elevate Your Stone Cutting Operations?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact our team today to discuss your specific needs and discover how our services can help you achieve
            better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-white text-cherry hover:bg-cherry-dark font-medium py-3 px-6 rounded-lg transition duration-300 inline-flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Contact Us
            </Link>
            <Link
              href="#"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cherry font-medium py-3 px-6 rounded-lg transition duration-300 inline-flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              Download Brochure
            </Link>
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      {modalOpen && currentService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
          <div className="absolute inset-0 bg-black bg-opacity-75 transition-opacity" onClick={closeModal} />

          <div className="relative bg-white rounded-lg max-w-3xl w-full mx-4 overflow-hidden shadow-xl transform transition-all">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 z-10 focus:outline-none"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{currentService.title}</h3>
              <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: currentService.details }} />

              <div className="mt-6 flex justify-end">
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-300"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
