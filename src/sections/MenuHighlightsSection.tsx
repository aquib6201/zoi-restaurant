import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSEO from "../hooks/useSEO.ts";
import SEOContent from "../components/seo/SEOContent.tsx";
import { SEO_PAGES } from "../lib/seoConfig.ts";

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  {
    name: "Truffle Mushroom Risotto",
    description: "Arborio rice, wild mushrooms, truffle oil, parmesan crisp",
    price: "₹549",
    cuisine: "Italian",
    badge: "Bestseller",
    image: "/assets/menu-risotto.jpg",
  },
  {
    name: "Thai Basil Chicken",
    description: "Stir-fried chicken, Thai basil, chili, jasmine rice",
    price: "₹479",
    cuisine: "Asian",
    badge: "Spicy",
    image: "/assets/menu-thai.jpg",
  },
  {
    name: "Mediterranean Mezze Platter",
    description: "Hummus, baba ganoush, falafel, pita, olives, feta",
    price: "₹599",
    cuisine: "Mediterranean",
    badge: "New",
    image: "/assets/menu-mezze.jpg",
  },
  {
    name: "Tandoori Salmon",
    description: "Yogurt-marinated salmon, mint chutney, saffron rice",
    price: "₹649",
    cuisine: "North Indian",
    badge: "Chef's Pick",
    image: "/assets/menu-salmon.jpg",
  },
  {
    name: "Kung Pao Prawns",
    description: "Sichuan pepper, peanuts, dried chili, wok-tossed prawns",
    price: "₹579",
    cuisine: "Chinese",
    badge: "Spicy",
    image: "/assets/menu-prawns.jpg",
  },
  {
    name: "Burrata & Heirloom Tomato",
    description: "Fresh burrata, balsamic reduction, basil oil, sourdough",
    price: "₹499",
    cuisine: "Italian",
    badge: "New",
    image: "/assets/menu-burrata.jpg",
  },
];

export default function MenuHighlightsSection() {
  useSEO(SEO_PAGES.menu);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".menu-header-label",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        },
      );
      gsap.fromTo(
        ".menu-header-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        },
      );
      gsap.fromTo(
        ".menu-header-sub",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        },
      );

      // Card animations
      const cards = sectionRef.current!.querySelectorAll(".menu-card");
      cards.forEach((card, i) => {
        const img = card.querySelector(".menu-card-img");
        const content = card.querySelector(".menu-card-content");

        if (img) {
          gsap.fromTo(
            img,
            { clipPath: "inset(100% 0 0 0)" },
            {
              clipPath: "inset(0% 0 0 0)",
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: { trigger: card, start: "top 80%" },
              delay: i * 0.15,
            },
          );
          const inner = img.querySelector(".menu-card-img-inner");
          if (inner) {
            gsap.fromTo(
              inner,
              { scale: 1.4 },
              {
                scale: 1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: { trigger: card, start: "top 80%" },
                delay: i * 0.15,
              },
            );
          }
        }

        if (content) {
          gsap.fromTo(
            content,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: { trigger: card, start: "top 80%" },
              delay: i * 0.15 + 0.3,
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="bg-dark"
      style={{ padding: "clamp(80px, 10vw, 120px) 0" }}
    >
      <SEOContent page="menu" />
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p
              className="menu-header-label text-blue-400 text-2xl font-cursive mb-4"
              style={{ letterSpacing: "0.1em", opacity: 0 }}
            >
              Chef&apos;s Selection
            </p>
            <h2
              className="menu-header-title text-white font-title uppercase"
              style={{
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                opacity: 0,
              }}
            >
              Today&apos;s Specials
            </h2>
            <p
              className="menu-header-sub mt-4"
              style={{
                fontSize: "clamp(18px, 2vw, 24px)",
                color: "rgba(255,255,255,0.7)",
                opacity: 0,
              }}
            >
              Crafted with passion, plated to perfection.
            </p>
          </div>
          <span className="text-blue-400 text-base cursor-default">
            View Full Menu &rarr;
          </span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="menu-card group rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {/* Image */}
              <div
                className="menu-card-img relative overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <div
                  className="menu-card-img-inner absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Badge */}
                <span
                  className="absolute top-4 left-4 bg-coral text-white text-xs font-medium uppercase px-3 py-1.5 rounded-pill"
                  style={{ letterSpacing: "0.05em" }}
                >
                  {item.badge}
                </span>
              </div>

              {/* Content */}
              <div className="menu-card-content p-6" style={{ opacity: 0 }}>
                <h4 className="text-white text-xl font-normal">{item.name}</h4>
                <p
                  className="text-sm mt-2 line-clamp-2"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-mono text-blue-400 text-lg">
                    {item.price}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {item.cuisine}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
