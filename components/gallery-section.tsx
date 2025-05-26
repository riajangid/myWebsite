"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react"

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1525468568166-6f2cd17c7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBpbmR1c3RyaWFsfGVufDB8MHx8fDE3NDc0Njg1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Precision Cutting Surface",
    description:
      "Our high-grade marble cutting platform provides the perfect surface for precision stone cutting operations. Designed for professional use with superior durability and stability.",
    category: "machines",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532467411038-57680e3dc0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBpbmR1c3RyaWFsfGVufDB8MHx8fDE3NDc0Njg1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Premium White Quartz",
    description:
      "Specialized cutting tools and techniques for luxury materials like this premium white quartz. Our equipment ensures clean, precise cuts with minimal waste.",
    category: "tools",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531859663445-5ced1d142f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBpbmR1c3RyaWFsfGVufDB8MHx8fDE3NDc0Njg1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Landscape Project",
    description:
      "A completed custom stone pathway installation using our professional-grade cutting equipment. This project showcases the versatility and precision of our machinery.",
    category: "projects",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509888522721-7e687235ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBpbmR1c3RyaWFsfGVufDB8MHx8fDE3NDc0Njg1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Industrial Cutter",
    description:
      "Our heavy-duty stone processing equipment in action. This industrial-grade machine is designed for high-volume production with consistent quality results.",
    category: "machines",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515133356580-c863eed555e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBpbmR1c3RyaWFsfGVufDB8MHx8fDE3NDc0Njg1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Artisan Tools",
    description:
      "Specialized tools for detailed stonework used by master craftsmen. These precision instruments allow for intricate designs and fine finishing work.",
    category: "tools",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535448033526-c0e85c9e6968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Nnx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBpbmR1c3RyaWFsfGVufDB8MHx8fDE3NDc0Njg1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Architectural Project",
    description:
      "A completed custom stone facade installation for a commercial building. Our cutting machinery was used to create precise, uniform stone elements for this impressive structure.",
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

  const openModal = (index: number) => {
    setCurrentImage(index)
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
      <div className="container mx-auto px-4">
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
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white"
            }`}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-btn px-6 py-2 rounded-full transition duration-300 ${
              activeFilter === "machines"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white"
            }`}
            onClick={() => setActiveFilter("machines")}
          >
            Machines
          </button>
          <button
            className={`filter-btn px-6 py-2 rounded-full transition duration-300 ${
              activeFilter === "tools"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white"
            }`}
            onClick={() => setActiveFilter("tools")}
          >
            Tools
          </button>
          <button
            className={`filter-btn px-6 py-2 rounded-full transition duration-300 ${
              activeFilter === "projects"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white"
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
                onClick={() => openModal(index)}
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
                  <button className="view-gallery-btn mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg inline-flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10">
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
        </div>
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
