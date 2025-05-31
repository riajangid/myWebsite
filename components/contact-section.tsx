"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, X } from "lucide-react"

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false);
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        window.location.href = formData.get('_next') as string;
      } else {
        alert('There was an error submitting the form.');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setFormSubmitted(false)
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team of experts to discuss your stone cutting machinery needs or request a quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          {/* <div className="bg-gray-50 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="quote-request">Request a Quote</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="maintenance-service">Maintenance Service</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Please describe your requirements or questions in detail"
                  required
                ></textarea>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    className="w-4 h-4 text-cherry border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-cherry hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to being contacted regarding my inquiry.
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-cherry hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div> */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
          <form
            action="https://formspree.io/f/mgvywyoy"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="Your Company Email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="product-inquiry">Product Inquiry</option>
                <option value="quote-request">Request a Quotation</option>
                <option value="technical-support">Technical Support</option>
                <option value="maintenance-service">Maintenance Service</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="Please describe your requirements or questions in detail"
                required
              ></textarea>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  className="w-4 h-4 text-cherry border-gray-300 rounded focus:ring-blue-500"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="privacy" className="text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-cherry hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and consent to being contacted regarding my inquiry.
                </label>
              </div>
            </div>

            <input
              type="hidden"
              name="_next"
              value="https://my-website-psi-virid.vercel.app/"
            />
            <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cherry hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10"
                            stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Mail className="h-5 w-5 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </div>
          </form>
        </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1469289759076-d1484757abc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bWFjaGluZXJ5JTI1MjBjdXN0b21lciUyNTIwc2VydmljZSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBpbmR1c3RyaWFsfGVufDB8MHx8fDE3NDc0NjkwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Customer service team"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Customer Support Team</h3>
                <p className="text-gray-600 mb-4">
                  Our dedicated team of experts is available to assist you with any questions or concerns about our
                  stone cutting machinery and tools.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-cherry" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      8A, Vishwakarma Nagar-III, Sarna Dungar Industrial Area, Benar Road, Jhotwara
                      <br />
                      {/* Double Chomu Marwadi
                      <br /> */}
                      Jaipur-12, Rajasthan 
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-cherry" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">
                      Sales: +1 (555) 123-4567
                      <br />
                      Support: +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-cherry" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">
                      Sales:{" "}
                      <a href="mailto:sales@stonecutpro.com" className="text-cherry hover:underline">
                        atc.sales90@gmail.com
                      </a>
                      <br />
                      Support:{" "}
                      <a href="mailto:support@stonecutpro.com" className="text-cherry hover:underline">
                        activetradecentre@yahoo.co.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-cherry" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 8:00 AM - 6:00 PM
                    
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="space-y-4">
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Chat on WhatsApp
              </a>

              <a
                href="mailto:atc.sales90@gmail.com"
                className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 w-full
"
              >
                <Mail className="h-6 w-6 mr-2" />
                Send Email
              </a>h-48 overflow-hidden
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition duration-300 w-full"
              >
                <Phone className="h-6 w-6 mr-2" />
                Call Us
              </a>
            </div>
          </div>
        </div>
        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Visit Our Factory</h3>
          <div className="bg-gray-200 rounded-xl overflow-hidden h-96 shadow-lg">
            <iframe
              title="Visit Our Showroom"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.6630494596893!2d75.68901641172235!3d27.009206676492163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dad53a6edff1b%3A0x56ece1f18f492986!2sActive%20Trade%20Centre!5e0!3m2!1sen!2sin!4v1748537339351!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Success Message Modal */}
      {formSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
          <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={closeModal} />

          <div className="relative bg-white rounded-lg max-w-md w-full mx-4 overflow-hidden shadow-xl transform transition-all">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 z-10 focus:outline-none"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal content */}
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for contacting us. We've received your message and will get back to you shortly.
              </p>
              <button
                className="bg-cherry hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}




// https://stone-cutting-machine-landing-page.vercel.app/