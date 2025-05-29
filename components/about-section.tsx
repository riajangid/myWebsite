import Image from "next/image"
import Link from "next/link"
import { Shield, Zap, LifeBuoy } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn about our journey, expertise, and commitment to providing the highest quality stone cutting machinery
            and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              With over 15 years of experience in the stone cutting industry, we've built a reputation for excellence
              and innovation. Our journey began with a simple mission: to provide professional-grade machinery that
              delivers precision, reliability, and value.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we serve clients across the construction, architecture, and design industries, offering
              cutting-edge solutions for all stone processing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center inline-flex items-center justify-center"
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
                href="#products"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
              >
                Explore Products
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1525468568166-6f2cd17c7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBicmlnaHR8ZW58MHwwfHx8MTc0NzQxNDQwNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Stone cutting surface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <Shield className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Quality Assurance</h4>
              <p className="text-gray-600">
                All our products undergo rigorous testing to ensure they meet the highest standards of performance and
                durability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <Zap className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h4>
              <p className="text-gray-600">
                We continuously invest in research and development to bring you the latest advancements in stone cutting
                technology.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <LifeBuoy className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Expert Support</h4>
              <p className="text-gray-600">
                Our team of specialists provides comprehensive technical support and maintenance services for all our
                products.
              </p>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1532467411038-57680e3dc0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBicmlnaHR8ZW58MHwwfHx8MTc0NzQxNDQwNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Stone cutting process"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Consultation</h4>
                    <p className="text-gray-600">
                      We work closely with you to understand your specific requirements and recommend the best
                      solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Selection</h4>
                    <p className="text-gray-600">
                      Choose from our wide range of machinery and tools, with expert guidance every step of the way.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Implementation</h4>
                    <p className="text-gray-600">
                      We provide comprehensive setup, installation, and training to ensure optimal performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Ongoing Support</h4>
                    <p className="text-gray-600">
                      Our relationship continues with dedicated after-sales service and technical assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Company Stats */}
        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-800">500+</div>
                    <div className="text-gray-600">Satisfied Clients</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-800">30+</div>
                    <div className="text-gray-600">Countries Served</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-800">15+</div>
                    <div className="text-gray-600">Years of Experience</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1531859663445-5ced1d142f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBicmlnaHR8ZW58MHwwfHx8MTc0NzQxNDQwNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our impact"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
