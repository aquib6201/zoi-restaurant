import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark pt-20 pb-10">
      <div className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            {/* <h3
              className="text-[] text-4xl font-normal uppercase mb-4"
              style={{ letterSpacing: '0.1em' }}
            >
              Zoi
            </h3> */}
            <img src="/assets/logo.png" alt="Restaurant Logo" className="brightness-0 invert h-16 w-auto rounded-full mb-4" />
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Life at Zoi — where every night becomes a story.
            </p>
            <a
              href="https://www.instagram.com/lifeatzoi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-sm hover:underline"
            >
              @lifeatzoi
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-blue-400 text-xs font-medium uppercase mb-6"
              style={{ letterSpacing: '0.1em' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Menu', 'Ambience', 'About', 'Gallery', 'Reserve'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault()
                      const el = document.querySelector(`#${link.toLowerCase()}`)
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-sm uppercase transition-colors duration-300 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4
              className="text-blue-400 text-xs font-medium uppercase mb-6"
              style={{ letterSpacing: '0.1em' }}
            >
              Visit Us
            </h4>
            <div className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <p>
                4th Floor, JD Hi Street Mall,<br />
                Mahatma Gandhi Main Road,<br />
                Hindpiri, Ranchi
              </p>
              <a
                href="tel:+917779974888"
                className="block hover:text-blue-400 transition-colors duration-300"
              >
                +91 77799 74888
              </a>
              <p>Daily: 12:00 PM – 11:00 PM</p>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="text-blue-400 text-xs font-medium uppercase mb-6"
              style={{ letterSpacing: '0.1em' }}
            >
              Connect
            </h4>
            <div className="flex items-center gap-4 mb-6">
              <a
                href="https://www.instagram.com/lifeatzoi/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <a
              href="https://wa.me/917779974888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border text-white text-sm font-medium uppercase tracking-wider px-6 py-3 rounded-pill transition-all duration-300 hover:bg-blue-400 hover:border-blue-400"
              style={{ borderColor: 'rgba(255,255,255,0.15)', letterSpacing: '0.05em' }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)' }}
        >
          <p>&copy; 2026 Zoi Restaurant. All rights reserved.</p>
          <p>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/lifeatzoi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              @lifeatzoi
            </a>
          </p>
          <p>Ranchi &middot; Crafted with passion</p>
        </div>
      </div>
    </footer>
  )
}
