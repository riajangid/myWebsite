import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProductsSection from "@/components/products-section"
import GallerySection from "@/components/gallery-section"
import AboutSection from "@/components/about-section"
// import ServicesSection from "@/components/services-section"
import VideoShowcaseSection from "@/components/video-showcase-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import BackToTopButton from "@/components/back-to-top-button"

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 relative h-full">
        <HeroSection />
        <ProductsSection />
        <GallerySection />
        <AboutSection />
        {/* <ServicesSection /> */}
        <VideoShowcaseSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  )
}
