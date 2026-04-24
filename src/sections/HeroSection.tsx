import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'

const heroImages = [
  '/assets/hero-1.jpg',
  '/assets/hero-2.jpg',
  '/assets/hero-3.jpg',
  '/assets/hero-4.jpg',
  '/assets/hero-5.jpg',
  '/assets/hero-6.jpg',
  '/assets/hero-7.jpg',
  '/assets/hero-8.jpg',
]

const headlines = [
  ['A Table That', 'Feels Like Home'],
  ['Where Every', 'Evening Begins'],
  ['Dine Above', 'The City'],
  ['Crafted Cocktails', 'Unforgettable Nights'],
  ['Romance on', 'Every Table'],
  ['Live Music', 'Live Memories'],
  ['Slow Mornings.', 'Perfect Moments'],
  ['The Night', 'Is Yours'],
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement[]>([])
  const titleRef = useRef<HTMLDivElement>(null)
  const currentRef = useRef(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goToSlide = useCallback((index: number) => {
    const prev = currentRef.current
    if (prev === index) return

    currentRef.current = index
    setCurrentSlide(index)

    // Animate out previous slide
    const prevEl = slidesRef.current[prev]
    if (prevEl) {
      gsap.to(prevEl, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 1,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.set(prevEl, { zIndex: 0 })
        },
      })
    }

    // Animate in new slide
    const nextEl = slidesRef.current[index]
    if (nextEl) {
      gsap.set(nextEl, { zIndex: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' })
      const inner = nextEl.querySelector('.hero-slide-inner') as HTMLElement
      if (inner) {
        gsap.set(inner, { scale: 1.4 })
        gsap.to(inner, { scale: 1, duration: 6, ease: 'sine.out' })
      }
      gsap.to(nextEl, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1,
        ease: 'power3.inOut',
      })
    }

    // Animate title
    animateTitle(index)
  }, [])

  const animateTitle = useCallback((index: number) => {
    if (!titleRef.current) return
    const lines = titleRef.current.querySelectorAll('.hero-title-line')
    lines.forEach((line) => {
      gsap.set(line, { opacity: 0 })
      line.innerHTML = ''
    })

    const textLines = headlines[index]
    textLines.forEach((text, lineIdx) => {
      const line = lines[lineIdx]
      if (!line) return
      line.innerHTML = ''
      const chars = text.split('')
      chars.forEach((char) => {
        const span = document.createElement('span')
        span.className = 'hero-char'
        span.style.display = 'inline-block'
        span.style.opacity = '0'
        span.innerHTML = char === ' ' ? '&nbsp;' : char
        line.appendChild(span)
      })

      const charEls = line.querySelectorAll('.hero-char')
      gsap.to(line, { opacity: 1, duration: 0.05 })
      gsap.fromTo(
        charEls,
        { opacity: 0, y: '100%' },
        {
          opacity: 1,
          y: '0%',
          stagger: 0.02,
          duration: 0.5,
          ease: 'power3.out',
          delay: lineIdx * 0.3,
        }
      )
    })
  }, [])

  useEffect(() => {
    // Initial setup
    slidesRef.current.forEach((el, i) => {
      if (i === 0) {
        gsap.set(el, { zIndex: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' })
        const inner = el.querySelector('.hero-slide-inner') as HTMLElement
        if (inner) gsap.set(inner, { scale: 1 })
      } else {
        gsap.set(el, { zIndex: 0, clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' })
      }
    })

    // Entrance animations
    animateTitle(0)

    const tl = gsap.timeline({ delay: 0.5 })
    tl.fromTo('.hero-label', { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.5)
    tl.fromTo('.hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.8)
    tl.fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 1.0)
    tl.fromTo('.hero-scroll', { opacity: 0 }, { opacity: 0.7, duration: 0.6 }, 1.5)

    // Autoplay
    intervalRef.current = setInterval(() => {
      const next = (currentRef.current + 1) % heroImages.length
      goToSlide(next)
    }, 5000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [goToSlide, animateTitle])

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden" style={{ height: '100vh' }}>
      {/* Background Slides */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) slidesRef.current[i] = el
          }}
          className="absolute inset-0 w-full h-full"
          style={{ overflow: 'hidden' }}
        >
          <div
            className="hero-slide-inner absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.35)', zIndex: 2 }} />

      {/* Content */}
      <div
        className="absolute z-10 flex flex-col justify-end"
        style={{
          bottom: '120px',
          left: '24px',
          maxWidth: '900px',
        }}
      >
        <p
          className="hero-label text-blue-400 text-2xl font-cursive mb-4"
          style={{ letterSpacing: '0.1em', opacity: 0 }}
        >
          Ranchi&apos;s Premier Dining Destination
        </p>

        <div ref={titleRef}>
          <span
            className="hero-title-line block text-white font-title leading-none"
            style={{
              fontSize: 'clamp(40px, 6.5vw, 96px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
              opacity: 0,
            }}
          />
          <span
            className="hero-title-line block text-white font-title leading-none mt-2"
            style={{
              fontSize: 'clamp(40px, 6.5vw, 96px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
              opacity: 0,
            }}
          />
        </div>

        <p
          className="hero-sub mt-6 text-base leading-relaxed max-w-xl"
          style={{ color: 'rgba(255,255,255,0.7)', opacity: 0 }}
        >
          Asian · Italian · Continental · Mediterranean — crafted with passion at the heart of Ranchi.
        </p>

        <div className="hero-cta flex flex-wrap gap-4 mt-10" style={{ opacity: 0 }}>
          <a
            href="#reserve"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#reserve')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-[#2d4990] hover:bg-[#243d7a] text-white text-sm font-medium uppercase tracking-wider px-8 py-4 rounded-pill transition-all duration-300 hover:scale-105"
            style={{ letterSpacing: '0.05em' }}
          >
            Reserve Table
          </a>
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="border text-white text-sm font-medium uppercase tracking-wider px-8 py-4 rounded-pill transition-all duration-300 hover:bg-[#2d4990] hover:border-[#2d4990]"
            style={{ borderColor: 'rgba(255,255,255,0.15)', letterSpacing: '0.05em' }}
          >
            View Menu
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="hero-scroll absolute z-10 flex flex-col items-center gap-2"
        style={{
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0,
        }}
      >
        <span
          className="text-white text-xs uppercase"
          style={{ letterSpacing: '0.1em', opacity: 0.7 }}
        >
          Scroll
        </span>
        <div
          className="w-px bg-white animate-bounce"
          style={{ height: '32px', opacity: 0.5 }}
        />
      </div>

      {/* Slide Indicators */}
      <div
        className="absolute z-10 flex items-center gap-2"
        style={{ bottom: '40px', right: '24px' }}
      >
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (intervalRef.current) clearInterval(intervalRef.current)
              goToSlide(i)
              intervalRef.current = setInterval(() => {
                const next = (currentRef.current + 1) % heroImages.length
                goToSlide(next)
              }, 5000)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentSlide ? 'bg-[#2d4990] w-6' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
