"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react"

const videoData = [
  {
    title: "Professional Stone Cutting Machine Demonstration",
    description:
      "Watch our flagship stone cutting machine in action, showcasing precision cutting on various stone materials.",
    thumbnail:
      "https://images.unsplash.com/photo-1525468568166-6f2cd17c7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBicmlnaHR8ZW58MHwwfHx8MTc0NzQ2ODg4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "3:45",
  },
  {
    title: "Precision Cutting Tools Overview",
    description:
      "Explore our range of specialized cutting tools designed for intricate stone work and detailed finishing.",
    thumbnail:
      "https://images.unsplash.com/photo-1532467411038-57680e3dc0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBicmlnaHR8ZW58MHwwfHx8MTc0NzQ2ODg4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "2:18",
  },
  {
    title: "Installation and Setup Guide",
    description:
      "Step-by-step instructions for setting up and calibrating your new stone cutting machinery for optimal performance.",
    thumbnail:
      "https://images.unsplash.com/photo-1531859663445-5ced1d142f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBicmlnaHR8ZW58MHwwfHx8MTc0NzQ2ODg4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "4:32",
  },
  {
    title: "Maintenance and Care Tips",
    description:
      "Essential maintenance procedures to extend the life of your equipment and ensure consistent cutting quality.",
    thumbnail:
      "https://images.unsplash.com/photo-1509888522721-7e687235ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBicmlnaHR8ZW58MHwwfHx8MTc0NzQ2ODg4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "5:21",
  },
  {
    title: "Advanced Cutting Techniques",
    description:
      "Master craftsmen demonstrate specialized techniques for intricate stone cutting and detailed artistic work.",
    thumbnail:
      "https://images.unsplash.com/photo-1515133356580-c863eed555e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBicmlnaHR8ZW58MHwwfHx8MTc0NzQ2ODg4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "6:47",
  },
  {
    title: "Customer Success Stories",
    description:
      "Hear from satisfied customers about how our stone cutting machinery has transformed their business operations.",
    thumbnail:
      "https://images.unsplash.com/photo-1535448033526-c0e85c9e6968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Nnx8c3RvbmUlMjUyMGN1dHRpbmclMjUyMG1hY2hpbmVyeSUyNTIwcHJvZmVzc2lvbmFsJTI1MjBicmlnaHR8ZW58MHwwfHx8MTc0NzQ2ODg4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "3:58",
  },
]

export default function VideoShowcaseSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(0)
  const [activePage, setActivePage] = useState(1)

  const openModal = (index: number) => {
    setCurrentVideo(index)
    setModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = "auto"
  }

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoData.length)
  }

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videoData.length) % videoData.length)
  }

  const handlePageChange = (page: number) => {
    setActivePage(page)
    // In a real implementation, this would load a new set of videos
  }

  return (
    <section id="video-showcase" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Video Showcase</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See our stone cutting machinery in action with these demonstration videos and product highlights.
          </p>
        </div>

        {/* Main Video Player */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative aspect-w-16 aspect-h-9">
              {/* Video Placeholder */}
              <div id="main-video-container" className="w-full h-0 pb-[56.25%] relative bg-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    id="video-thumbnail"
                    src={videoData[0].thumbnail || "/placeholder.svg"}
                    alt={videoData[0].title}
                    fill
                    className="object-cover"
                  />
                  <button
                    id="play-button"
                    className="absolute bg-cherry hover:bg-cherry-dark text-white rounded-full w-16 h-16 flex items-center justify-center transition duration-300 transform hover:scale-110 focus:outline-none"
                    aria-label="Play video"
                    onClick={() => openModal(0)}
                  >
                    <Play className="h-8 w-8" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 id="video-title" className="text-xl font-semibold text-gray-800 mb-2">
                {videoData[0].title}
              </h3>
              <p id="video-description" className="text-gray-600">
                {videoData[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Video Thumbnails */}
        {/* <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">More Videos</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {videoData.map((video, index) => (
            <div
              key={index}
              className="video-thumbnail bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:shadow-lg hover:-translate-y-1"
              onClick={() => openModal(index)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="bg-white bg-opacity-80 rounded-full w-12 h-12 flex items-center justify-center">
                    <Play className="h-6 w-6 text-cherry" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-cherry text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">{video.title}</h4>
                <p className="text-gray-600 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div> */}

        {/* Pagination */}
        <div className="flex justify-center space-x-2 mb-8">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`pagination-btn w-10 h-10 rounded-full ${
                page === activePage ? "bg-cherry text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } flex items-center justify-center focus:outline-none`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Subscribe for More Videos */}
        <div className="bg-cherry rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Subscribe for New Product Videos</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Stay updated with our latest product demonstrations, tutorials, and industry insights.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none text-gray-800"
                required
              />
              <button
                type="submit"
                className="bg-white text-cherry hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
          <div className="absolute inset-0 bg-black bg-opacity-75 transition-opacity" onClick={closeModal} />

          <div className="relative bg-black rounded-lg max-w-4xl w-full mx-4 overflow-hidden shadow-xl transform transition-all">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 focus:outline-none"
              onClick={closeModal}
            >
              <X className="h-8 w-8" />
            </button>

            {/* Video container */}
            <div className="relative aspect-w-16 aspect-h-9">
              <div id="modal-video-container" className="w-full h-0 pb-[56.25%] relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <Image
                    id="modal-thumbnail"
                    src={videoData[currentVideo].thumbnail || "/placeholder.svg"}
                    alt={videoData[currentVideo].title}
                    fill
                    className="object-contain"
                  />
                  <button
                    id="modal-play-button"
                    className="absolute bg-cherry hover:bg-cherry-dark text-white rounded-full w-20 h-20 flex items-center justify-center transition duration-300 transform hover:scale-110 focus:outline-none"
                    aria-label="Play video"
                  >
                    <Play className="h-10 w-10" />
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 p-2 rounded-full shadow-md focus:outline-none"
              onClick={(e) => {
                e.stopPropagation()
                prevVideo()
              }}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 p-2 rounded-full shadow-md focus:outline-none"
              onClick={(e) => {
                e.stopPropagation()
                nextVideo()
              }}
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Video details */}
            <div className="p-6 bg-white">
              <h3 id="modal-title" className="text-2xl font-bold text-gray-800 mb-2">
                {videoData[currentVideo].title}
              </h3>
              <p id="modal-description" className="text-gray-600">
                {videoData[currentVideo].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
