import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useSEO from "../hooks/useSEO.ts";
import SEOContent from "../components/seo/SEOContent.tsx";
import { SEO_PAGES } from "../lib/seoConfig.ts";


gsap.registerPlugin(ScrollTrigger)

export default function AmbienceSection() {
  useSEO(SEO_PAGES.about);

  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const imageInnerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Text animations
      gsap.fromTo(
        '.ambience-label',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      )
      gsap.fromTo(
        '.ambience-heading',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      )
      gsap.fromTo(
        '.ambience-body',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      )
      gsap.fromTo(
        '.ambience-stat',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )

      // Image reveal
      if (imageRef.current && imageInnerRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 80%',
            },
          }
        )
        gsap.fromTo(
          imageInnerRef.current,
          { scale: 1.4 },
          {
            scale: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 80%',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="ambience"
      ref={sectionRef}
      className="bg-warmgrey"
      style={{ padding: 'clamp(80px, 10vw, 120px) 0' }}
    >
      <SEOContent page="about" />
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="w-full lg:w-[45%]">
            <p
              className="ambience-label text-coral text-2xl font-cursive mb-4"
              style={{ letterSpacing: '0.1em', opacity: 0 }}
            >
              The Experience
            </p>
            <h2
              className="ambience-heading text-dark font-title"
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                lineHeight: 1.15,
                opacity: 0,
              }}
            >
              Where Ambience Meets Culinary Art
            </h2>
            <p
              className="ambience-body mt-6 text-base leading-relaxed max-w-md"
              style={{ color: 'rgba(0,0,0,0.7)', opacity: 0 }}
            >
              Step into Zoi and leave the ordinary behind. Nestled on the 4th floor of JD Hi Street
              Mall, our space is designed to captivate — from intimate candlelit corners to our
              vibrant rooftop under the stars. Every detail, from the curated playlist to the
              handcrafted cocktails, is orchestrated to create unforgettable evenings.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-12 mt-12">
              {[
                { value: '4.4', label: 'Dining Rating' },
                { value: '8', label: 'Cuisines' },
                { value: '12PM-11PM', label: 'Daily Hours' },
              ].map((stat) => (
                <div key={stat.label} className="ambience-stat" style={{ opacity: 0 }}>
                  <p
                    className="font-mono text-coral"
                    style={{
                      fontSize: 'clamp(36px, 5vw, 56px)',
                      lineHeight: 1.0,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm mt-1" style={{ color: 'rgba(0,0,0,0.6)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-[55%]">
            <div
              ref={imageRef}
              className="relative overflow-hidden rounded-lg"
              style={{ aspectRatio: '4/3' }}
            >
              <div
                ref={imageInnerRef}
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: 'url(/assets/ambience-main.jpg)',
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
