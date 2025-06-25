import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProductsSection from "@/components/products-section"
import GallerySection from "@/components/gallery-section"
import AboutSection from "@/components/about-section"
import VideoShowcaseSection from "@/components/video-showcase-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import BackToTopButton from "@/components/back-to-top-button"
import PdfViewer from "@/components/pdf-section"
import Head from 'next/head'
export default function Home() {
  return (
    <>
        <Head>
          <meta name="description" content="Your one-stop shop for wire saw machines, stone cutting tools, diamond wire saw, quarry cutting tools, concrete cutting, crimping tools, industrial cranes, and more. High-quality products for stone processing and heavy machinery parts." />
          <meta name="keywords" content="activetradecentre diamondwiresawmachine , ATC , atc , diamond wire saw machine, wire saw, stone cutting machine, concrete cutting, crimping tool, aluminium wheel, rubber ring, active trade centre, stone machinery, diamond cutting wire, quarry cutting tools, wire saw parts, diamond tools, industrial cranes, stone processing equipment, wire saw accessories, crimping machine, granite cutting tools, marble cutting equipment, spare parts for wire saw, heavy machinery parts, construction equipment, wire saw for mining, wire saw cable, wire saw crimping sleeves, diamond beads, diamond saw wire, cutting machine parts" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/dfigcriri/image/upload/v1749576524/ATC_LOGO.jpeg_hufwqj.jpg"></link>
          <meta property="og:title" content="Diamond Wire Saw Machines & Cutting Tools - Active Trade Centre" />
          <meta property="og:description" content="Discover high-quality wire saw machines, diamond wire saws, and stone cutting tools at Active Trade Centre. We offer a wide range of industrial cutting solutions." />
          <meta property="og:image" content="https://res.cloudinary.com/dfigcriri/image/upload/v1749576524/ATC_LOGO.jpeg_hufwqj.jpg" />
          <meta property="og:url" content="https://www.diamondwiresawmachines.com" />
          <meta name="twitter:card" content="https://res.cloudinary.com/dfigcriri/image/upload/v1749576524/ATC_LOGO.jpeg_hufwqj.jpg" />
          <meta name="twitter:title" content="Diamond Wire Saw Machines & Cutting Tools - Active Trade Centre" />
          <meta name="twitter:description" content="Top-quality wire saw machines, cutting tools, and industrial parts for stone, concrete, and quarry operations." />
          <meta name="twitter:image" content="https://res.cloudinary.com/dfigcriri/image/upload/v1749576524/ATC_LOGO.jpeg_hufwqj.jpg" />
      </Head>
      <Header />
      <main id="main-content" className="flex-1 relative h-full">
        <HeroSection />
        <ProductsSection />
        <GallerySection />
        <AboutSection />
        {/* <ServicesSection /> */}
        {/* <VideoShowcaseSection /> */}
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  )
}
