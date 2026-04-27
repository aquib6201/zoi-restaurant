import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSEO from "../hooks/useSEO.ts";
import SEOContent from "../components/seo/SEOContent.tsx";
import { SEO_PAGES } from "../lib/seoConfig.ts";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  "/assets/gallery-1.jpg",
  "/assets/gallery-2.jpg",
  "/assets/gallery-3.jpg",
  "/assets/gallery-4.jpg",
  "/assets/gallery-5.jpg",
  "/assets/gallery-6.jpg",
  "/assets/gallery-7.jpg",
  "/assets/gallery-8.jpg",
];

export default function GallerySection() {
  useSEO(SEO_PAGES.gallery);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-label",
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
        ".gallery-heading",
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

      imagesRef.current.forEach((el, i) => {
        if (!el) return;
        const inner = el.querySelector(".gallery-img-inner");

        gsap.fromTo(
          el,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
            delay: i * 0.1,
          },
        );

        if (inner) {
          gsap.fromTo(
            inner,
            { scale: 1.4 },
            {
              scale: 1,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 85%" },
              delay: i * 0.1,
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="bg-black"
      style={{ padding: "clamp(80px, 10vw, 120px) 0" }}
    >
      <SEOContent page="gallery" />

      {/* Header */}
      <div className="container-main text-center mb-16">
        <p
          className="gallery-label text-blue-400   text-3xl font-cursive mb-4"
          style={{ letterSpacing: "0.1em", opacity: 0 }}
        >
          Inside{" "}
          <img
            src="/assets/logo.png"
            alt="Zoi Logo"
            className="inline-block w-auto h-16 -mt-1 mx-1 brightness-0 invert"
          />
        </p>
        <h2
          className="gallery-heading text-white font-title uppercase"
          style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            opacity: 0,
          }}
        >
          A Visual Journey
        </h2>
      </div>

      {/* Gallery Grid - full bleed */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-2">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) imagesRef.current[i] = el;
            }}
            className="relative overflow-hidden rounded cursor-zoom-in group"
            style={{ aspectRatio: "1/1" }}
          >
            <div
              className="gallery-img-inner absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-[1.08]"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
