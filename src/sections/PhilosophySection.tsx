import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const featureTags = [
  'Live Music',
  'Karaoke Nights',
  'Full Bar',
  'Rooftop Dining',
  'Private Events',
  'Insta-worthy',
]

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const imageInnerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.philosophy-label',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        }
      )
      gsap.fromTo(
        '.philosophy-heading',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        }
      )
      gsap.fromTo(
        '.philosophy-body',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        }
      )
      gsap.fromTo(
        '.philosophy-tag',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.08,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )

      if (imageRef.current && imageInnerRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: { trigger: imageRef.current, start: 'top 80%' },
          }
        )
        gsap.fromTo(
          imageInnerRef.current,
          { scale: 1.4 },
          {
            scale: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: { trigger: imageRef.current, start: 'top 80%' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-dark"
      style={{ padding: 'clamp(100px, 12vw, 160px) 0 clamp(80px, 10vw, 120px)' }}
    >
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="w-full lg:w-1/2">
            <p
              className="philosophy-label text-blue-400 text-2xl font-cursive mb-4"
              style={{ letterSpacing: '0.1em', opacity: 0 }}
            >
              Our Promise
            </p>
            <h2
              className="philosophy-heading text-white font-title max-w-lg"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                opacity: 0,
              }}
            >
              Every Dish Tells a Story
            </h2>
            <p
              className="philosophy-body mt-6 text-base leading-relaxed max-w-md"
              style={{ color: 'rgba(255,255,255,0.7)', opacity: 0 }}
            >
              At Zoi, we believe dining is more than sustenance — it&apos;s an experience that
              engages all senses. Our chefs source the finest ingredients, our bartenders craft
              cocktails with precision, and our space is designed to make every visit memorable.
              From intimate dinners to lively celebrations, Zoi is where Ranchi comes alive.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 mt-10">
              {featureTags.map((tag) => (
                <span
                  key={tag}
                  className="philosophy-tag text-sm px-5 py-2.5 rounded-pill text-white transition-all duration-300 hover:bg-coral hover:border-coral cursor-default"
                  style={{
                    border: '1px solid rgba(255,255,255,0.15)',
                    opacity: 0,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2">
            <div
              ref={imageRef}
              className="relative overflow-hidden rounded-lg"
              style={{ aspectRatio: '3/4' }}
            >
              <div
                ref={imageInnerRef}
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: 'url(/assets/philosophy.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
