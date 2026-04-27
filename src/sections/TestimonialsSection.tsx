import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSEO from "../hooks/useSEO.ts";
import SEOContent from "../components/seo/SEOContent.tsx";
import { SEO_PAGES } from "../lib/seoConfig.ts";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Zoi completely redefined what I expect from Ranchi's dining scene. The Truffle Risotto rivals anything I've had in Mumbai or Delhi, and the rooftop ambience under the stars is simply magical. It's become my go-to recommendation for anyone visiting the city.",
    name: "Ananya Sharma",
    role: "Food Blogger, Ranchi",
    avatar: "/assets/avatar-ananya.jpg",
  },
  {
    quote:
      "I've been coming to Zoi since they opened, and they never disappoint. The karaoke nights are legendary, the cocktails are expertly crafted, and the staff treats you like family. It's not just a restaurant — it's where memories are made.",
    name: "Rahul Verma",
    role: "Regular Patron",
    avatar: "/assets/avatar-rahul.jpg",
  },
];

function AnimatedCounter({
  target,
  inView,
}: {
  target: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!inView) return;

    const obj = { value: 0 };
    gsap.to(obj, {
      value: target,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        countRef.current = Math.floor(obj.value);
        setCount(Math.floor(obj.value));
      },
    });
  }, [inView, target]);

  return <span>{count.toLocaleString()}+</span>;
}

export default function TestimonialsSection() {
  useSEO(SEO_PAGES.about);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counterInView, setCounterInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonials-label",
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
        ".testimonials-heading",
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
        ".testimonial-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: { trigger: ".testimonial-card", start: "top 85%" },
        },
      );

      ScrollTrigger.create({
        trigger: ".testimonials-stats",
        start: "top 85%",
        onEnter: () => setCounterInView(true),
      });

      gsap.fromTo(
        ".testimonials-stats",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: ".testimonials-stats", start: "top 85%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-warmgrey"
      style={{ padding: "clamp(80px, 10vw, 120px) 0" }}
    >
      <SEOContent page="about" />
      <div className="container-main max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="testimonials-label text-coral text-2xl font-cursive mb-4"
            style={{ letterSpacing: "0.1em", opacity: 0 }}
          >
            Guest Stories
          </p>
          <h2
            className="testimonials-heading text-dark font-title"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.15,
              opacity: 0,
            }}
          >
            Loved by Foodies, Trusted by Locals.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card bg-white rounded-2xl p-10 md:p-12"
              style={{
                border: "1px solid rgba(0,0,0,0.1)",
                opacity: 0,
              }}
            >
              <span
                className="block text-coral text-6xl font-normal leading-none mb-4"
                style={{ opacity: 0.3 }}
              >
                &ldquo;
              </span>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#111111", lineHeight: 1.7 }}
              >
                {t.quote}
              </p>
              <div
                className="mt-8 pt-8 flex items-center gap-4"
                style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-dark text-lg font-normal">{t.name}</h4>
                  <p className="text-sm" style={{ color: "rgba(0,0,0,0.6)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className="testimonials-stats text-center mt-20"
          style={{ opacity: 0 }}
        >
          <p
            className="font-mono text-coral"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.0 }}
          >
            <AnimatedCounter target={28400} inView={counterInView} />
          </p>
          <p className="text-sm mt-2" style={{ color: "rgba(0,0,0,0.6)" }}>
            Happy Diners
          </p>
        </div>
      </div>
    </section>
  );
}
