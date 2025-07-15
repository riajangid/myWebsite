"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react"

const galleryItems = [
  {
    image:
      "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749665779/8_hwxve8.jpg",
    title: "Diamond Wire Saw Machine 20HP",
    description:
      "Motor and Spare parts can be customize as per the requirement. Motor available(Alfa, El+mo).",
    category: "machines",
  },
      {
    image:
      "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749661017/D.W.SAW_60_HP_2013_1_aofmq9.jpg",
    title: "Diamond Wire Saw Machine 45kW/60 HP",
    description:
      "Motor and Spare parts can be customize as per the requirement. Motor available(Alfa, El+mo).",
    category: "machines",
  },
    {
    image:
      "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749665880/9_wkv2tz.jpg",
    title: "Our 2010 project bulk customised order processing",
    description:
      "Ready for installation.",
    category: "machines",
  },
    {
    image:
      "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749661018/Elct.Panel_60HP_xtcdhp.jpg",
    title: "Electrical Control Panel",
    description:
      "Our high-grade marble cutting platform provides the perfect surface for precision stone cutting operations. Designed for professional use with superior durability and stability.",
    category: "machines",
  },
    {
    image:
      "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749666030/10_w4voxa.jpg",
    title: "Copper Sleeves",
    description:
      "Our high-grade marble cutting platform provides the perfect surface for precision stone cutting operations. Designed for professional use with superior durability and stability.",
    category: "tools",
  },
  //       {
  //   image:
  //     "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749661440/IMG-20160101-WA0033_-_Copy_odsg5j.jpg",
  //   title: "Remove 2nd picture",
  //   description:
  //     "Our high-grade marble cutting platform provides the perfect surface for precision stone cutting operations. Designed for professional use with superior durability and stability.",
  //   category: "tools",
  // },
    {
    image:
      "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749666229/12_tlodxc.jpg",
    title: "C.I. Hub/Housing DC Gear Box Spare",
    description:
      "Specialized cutting tools and techniques for luxury materials like this premium white quartz. Our equipment ensures clean, precise cuts with minimal waste.",
    category: "tools",
  },
    {
    image:
      "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749661095/CAT41CN80SD_wl8lty.jpg",
    title: "S.P. Chucknut",
    description:
      "Our high-grade marble cutting platform provides the perfect surface for precision stone cutting operations. Designed for professional use with superior durability and stability.",
    category: "tools",
  },
  {
    image:
      "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749661395/CAT49CN70CT_1_j6u4qf.jpg",
    title: "S.P. Chucknut",
    description:
      "Specialized tools for detailed stonework used by master craftsmen. These precision instruments allow for intricate designs and fine finishing work.",
    category: "tools",
  },
    {
    image:
      "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749666110/11_jefjfi.jpg",
    title: "Landscape Project",
    description:
      "A completed custom stone pathway installation using our professional-grade cutting equipment. This project showcases the versatility and precision of our machinery.",
    category: "projects",
  },
  {
    image:
      "https://res.cloudinary.com/dbgrhb2r2/image/upload/v1749665636/7img_nyhsng.jpg",
    title: "Fully tested machine with panel",
    description:
      "Ready for installation",
    category: "projects",
  },
]

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [modalOpen, setModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [loadMoreDisabled, setLoadMoreDisabled] = useState(false)

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  const openModal = (index: number,image:string) => {
    let actualIndex =galleryItems.findIndex(item => item.image === image)
    setCurrentImage(actualIndex)
    setModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryItems.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  const handleLoadMore = () => {
    setLoadMoreDisabled(true)
  }

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container-full px-10 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of high-performance stone cutting machinery and tools in action.
          </p>
        </div>

        {/* Gallery Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            className={`filter-btn px-6 py-2 rounded-full transition duration-300 ${
              activeFilter === "all"
                ? "bg-cherry text-white"
                : "bg-gray-200 text-gray-800 hover:bg-cherry hover:text-white"
            }`}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-btn px-6 py-2 rounded-full transition duration-300 ${
              activeFilter === "machines"
                ? "bg-cherry text-white"
                : "bg-gray-200 text-gray-800 hover:bg-cherry hover:text-white"
            }`}
            onClick={() => setActiveFilter("machines")}
          >
            Machines
          </button>
          <button
            className={`filter-btn px-6 py-2 rounded-full transition duration-300 ${
              activeFilter === "tools"
                ? "bg-cherry text-white"
                : "bg-gray-200 text-gray-800 hover:bg-cherry hover:text-white"
            }`}
            onClick={() => setActiveFilter("tools")}
          >
            Tools
          </button>
          <button
            className={`filter-btn px-6 py-2 rounded-full transition duration-300 ${
              activeFilter === "projects"
                ? "bg-cherry text-white"
                : "bg-gray-200 text-gray-800 hover:bg-cherry hover:text-white"
            }`}
            onClick={() => setActiveFilter("projects")}
          >
            Projects
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-grid">
          {filteredItems.map((item, index) => (
            <div key={index} className={`gallery-item ${item.category}`} data-category={item.category}>
              <div
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                onClick={() => openModal(index,item.image)}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-200">{item.title.split(" ").slice(0, 3).join(" ")}</p>
                  <button className="view-gallery-btn mt-3 bg-cherry text-white py-2 px-4 rounded-lg inline-flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {/* <div className="text-center mt-10">
          <button
            id="load-more"
            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-8 rounded-lg transition duration-300 ${
              loadMoreDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleLoadMore}
            disabled={loadMoreDisabled}
          >
            {loadMoreDisabled ? "No More Items" : "Load More"}
          </button>
        </div>*/}
      </div> 

      {/* Lightbox Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
          <div className="absolute inset-0 bg-black bg-opacity-75 transition-opacity" onClick={closeModal} />

          <div className="relative bg-white rounded-lg max-w-4xl w-full mx-4 overflow-hidden shadow-xl transform transition-all">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 z-10 focus:outline-none"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image container */}
            <div className="relative">
              <Image
                src={galleryItems[currentImage].image || "/placeholder.svg"}
                alt={galleryItems[currentImage].title}
                width={800}
                height={600}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              {/* Navigation arrows */}
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md focus:outline-none"
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md focus:outline-none"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>
            </div>

            {/* Image details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{galleryItems[currentImage].title}</h3>
              <p className="text-gray-600">{galleryItems[currentImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
