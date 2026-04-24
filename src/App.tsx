import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import AmbienceSection from './sections/AmbienceSection'
import MenuHighlightsSection from './sections/MenuHighlightsSection'
import PhilosophySection from './sections/PhilosophySection'
import TestimonialsSection from './sections/TestimonialsSection'
import ReservationSection from './sections/ReservationSection'
import GallerySection from './sections/GallerySection'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000)
      })
    }
  }, [])

  return (
    <div className="relative">
      <Header />
      <main>
        <HeroSection />
        <AmbienceSection />
        <MenuHighlightsSection />
        <PhilosophySection />
        <TestimonialsSection />
        <ReservationSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  )
}
