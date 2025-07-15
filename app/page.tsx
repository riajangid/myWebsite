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
          <title>Diamond Wire Saw Machines & Cutting Tools - Active Trade Centre</title>
          <meta name="description" content="Discover high-quality stone cutting machinery, tools, and equipment at ATC. Professional-grade solutions for marble, granite, and stone processing industries." />
          <meta name="robots" content="index, follow"/>
          <link rel="canonical" href="https://www.diamondwiresawmachines.com/"/>
          <link rel="icon" href="https://res.cloudinary.com/dfigcriri/image/upload/v1749576524/ATC_LOGO.jpeg_hufwqj.jpg"/>
          <meta property="og:title" content="Diamond Wire Saw Machines & Cutting Tools - Active Trade Centre"/>
          <meta property="og:description" content="Discover high-quality wire saw machines, diamond wire saws, and stone cutting tools at Active Trade Centre. We offer a wide range of industrial cutting solutions." />
          <meta property="og:image" content="https://res.cloudinary.com/dfigcriri/image/upload/v1749576524/ATC_LOGO.jpeg_hufwqj.jpg"/>
          <meta property="og:url" content="https://www.diamondwiresawmachines.com"/>
          <meta property="og:type" content="website"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content="Diamond Wire Saw Machines & Cutting Tools - Active Trade Centre"/>
          <meta name="twitter:description" content="Top-quality wire saw machines, cutting tools, and industrial parts for stone, concrete, and quarry operations."/>
          <meta name="twitter:image" content="https://res.cloudinary.com/dfigcriri/image/upload/v1749576524/ATC_LOGO.jpeg_hufwqj.jpg"/>
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Active Trade Centre",
              "url": "https://www.diamondwiresawmachines.com",
              "logo": "https://res.cloudinary.com/dltpv77qp/image/upload/v1751908981/ATC_LOGO-removebg-preview_b6am7t.png"
            }),
          }}
        />
      </Head>
      <Header />
      <main id="main-content" className="flex-1 relative h-full ">
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
