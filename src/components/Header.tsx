import { useState, useEffect, useCallback } from 'react'
import { gsap } from 'gsap'

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Ambience', href: '#ambience' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reserve', href: '#reserve' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = useCallback((href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      const links = document.querySelectorAll('.mobile-nav-link')
      gsap.fromTo(
        links,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.3, ease: 'power2.out' }
      )
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 h-20 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
        style={{ padding: '0 24px' }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="text-white text-2xl font-normal uppercase tracking-widest z-50"
          style={{ letterSpacing: '0.08em' }}
        >
        <img src="/assets/zoi.jpg" alt="Restaurant Logo" className="h-12 w-auto rounded-full" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
              className="group relative text-white text-sm uppercase tracking-wider hover:text-coral transition-colors duration-300"
              style={{ letterSpacing: '0.05em' }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 bg-coral w-0 group-hover:w-full transition-all duration-300 origin-left" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#reserve"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('#reserve')
          }}
          className="hidden lg:inline-block bg-coral hover:bg-coral-hover text-white text-sm font-medium uppercase tracking-wider px-7 py-3 rounded-pill transition-all duration-300 hover:scale-105"
          style={{ letterSpacing: '0.05em' }}
        >
          Reserve Table
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden z-50 flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-coral transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-coral transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-coral transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-dark flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
              className="mobile-nav-link text-white text-4xl hover:text-coral transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reserve"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#reserve')
            }}
            className="mobile-nav-link mt-4 bg-coral text-white text-sm font-medium uppercase tracking-wider px-8 py-4 rounded-pill"
          >
            Reserve Table
          </a>
        </div>
      )}
    </>
  )
}
