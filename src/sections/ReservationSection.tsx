import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSEO from "../hooks/useSEO.ts";
import SEOContent from "../components/seo/SEOContent.tsx";
import { SEO_PAGES } from "../lib/seoConfig.ts";

gsap.registerPlugin(ScrollTrigger);

const timeOptions = [
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
];
const guestOptions = ["2 Guests", "4 Guests", "6 Guests", "8+ Guests"];
const occasionOptions = [
  "Casual Dining",
  "Birthday",
  "Anniversary",
  "Corporate",
  "Date Night",
  "Other",
];

export default function ReservationSection() {
  useSEO(SEO_PAGES.reservations);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    requests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (imageRef.current && imageInnerRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: { trigger: imageRef.current, start: "top 80%" },
          },
        );
        gsap.fromTo(
          imageInnerRef.current,
          { scale: 1.4 },
          {
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: { trigger: imageRef.current, start: "top 80%" },
          },
        );
      }

      gsap.fromTo(
        ".reserve-label",
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
        ".reserve-heading",
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
        ".reserve-body",
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
      gsap.fromTo(
        ".reserve-field",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".reserve-form", start: "top 85%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const inputClass =
    "w-full bg-transparent border rounded-lg px-4 py-3.5 text-white text-base focus:outline-none focus:border-coral transition-colors duration-300 placeholder:text-white/25";

  return (
    <section
      id="reserve"
      ref={sectionRef}
      className="bg-dark"
      style={{ padding: "clamp(80px, 10vw, 120px) 0" }}
    >
      <SEOContent page="reservations" />
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column - Image */}
          <div className="w-full lg:w-[55%]">
            <div
              ref={imageRef}
              className="relative overflow-hidden rounded-lg"
              style={{ aspectRatio: "16/10" }}
            >
              <div
                ref={imageInnerRef}
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: "url(/assets/reservation.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-[45%]">
            <p
              className="reserve-label text-blue-400 text-2xl font-cursive mb-4"
              style={{ letterSpacing: "0.1em", opacity: 0 }}
            >
              Reserve Your Table
            </p>
            <h2
              className="reserve-heading text-white font-title"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.15,
                opacity: 0,
              }}
            >
              Plan Your Perfect Evening
            </h2>
            <p
              className="reserve-body mt-4 text-base leading-relaxed max-w-md"
              style={{ color: "rgba(255,255,255,0.7)", opacity: 0 }}
            >
              Whether it&apos;s a romantic dinner, a celebration with friends,
              or a corporate gathering, we&apos;d love to host you. Reserve your
              table and let us craft an unforgettable experience.
            </p>

            <form
              onSubmit={handleSubmit}
              className="reserve-form mt-10 max-w-md space-y-5"
            >
              <div className="reserve-field" style={{ opacity: 0 }}>
                <label
                  className="block text-sm mb-1.5"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  style={{ borderColor: "rgba(255,255,255,0.15)" }}
                />
              </div>

              <div className="reserve-field" style={{ opacity: 0 }}>
                <label
                  className="block text-sm mb-1.5"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  style={{ borderColor: "rgba(255,255,255,0.15)" }}
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="reserve-field" style={{ opacity: 0 }}>
                  <label
                    className="block text-sm mb-1.5"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    style={{
                      borderColor: "rgba(255,255,255,0.15)",
                      colorScheme: "dark",
                    }}
                  />
                </div>
                <div className="reserve-field" style={{ opacity: 0 }}>
                  <label
                    className="block text-sm mb-1.5"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    style={{ borderColor: "rgba(255,255,255,0.15)" }}
                  >
                    <option value="" disabled>
                      Select time
                    </option>
                    {timeOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="reserve-field" style={{ opacity: 0 }}>
                  <label
                    className="block text-sm mb-1.5"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    style={{ borderColor: "rgba(255,255,255,0.15)" }}
                  >
                    <option value="" disabled>
                      Select guests
                    </option>
                    {guestOptions.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="reserve-field" style={{ opacity: 0 }}>
                  <label
                    className="block text-sm mb-1.5"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Occasion
                  </label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    style={{ borderColor: "rgba(255,255,255,0.15)" }}
                  >
                    <option value="" disabled>
                      Select occasion
                    </option>
                    {occasionOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="reserve-field" style={{ opacity: 0 }}>
                <label
                  className="block text-sm mb-1.5"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Special Requests
                </label>
                <textarea
                  name="requests"
                  rows={3}
                  placeholder="Any dietary requirements or special requests..."
                  value={formData.requests}
                  onChange={handleChange}
                  className={inputClass}
                  style={{
                    borderColor: "rgba(255,255,255,0.15)",
                    resize: "vertical",
                  }}
                />
              </div>

              <div className="reserve-field pt-2" style={{ opacity: 0 }}>
                <button
                  type="submit"
                  className="w-full bg-coral hover:bg-coral-hover text-white text-sm font-medium uppercase tracking-wider py-4 rounded-pill transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ letterSpacing: "0.05em" }}
                >
                  Reserve My Table
                </button>
              </div>

              {submitted && (
                <p className="text-coral text-sm text-center animate-pulse">
                  Your reservation request has been sent! We&apos;ll confirm
                  shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
