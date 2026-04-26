// ═══════════════════════════════════════════════
// SEOContent Component
// Renders visually hidden but crawlable text
// Google reads this to understand the page topic
// ═══════════════════════════════════════════════

interface SEOContentProps {
  page: "home" | "menu" | "events" | "gallery" | "about" | "reservations" | "contact";
}

const seoText = {
  home: {
    h1: "Fine Dining Restaurant in Ranchi",
    paragraphs: [
      "Zoi Restaurant is Ranchi's most sophisticated dining destination, located on the 4th Floor of JD Hi Street Mall, Mahatma Gandhi Main Road, Hindpiri, Ranchi. We offer an exceptional fine dining experience with a curated menu featuring Asian, Italian, Continental, and Mediterranean cuisines crafted to perfection.",
      "Beyond the food, Zoi is a complete experience — a premium bar with craft cocktails, live acoustic music performances, vibrant DJ nights, and themed events that make every visit unforgettable. Whether it's a romantic dinner, family celebration, or corporate gathering, Zoi Restaurant in Ranchi sets the perfect stage.",
      "Rated 4.4 stars with over 800 reviews, Zoi is consistently recognized as the best restaurant in Ranchi for fine dining and nightlife. Book your table online for an evening you will never forget.",
    ],
    h2s: [
      "Book a Table at Zoi Restaurant Ranchi",
      "Best Fine Dining Experience in Ranchi",
    ],
  },
  menu: {
    h1: "Zoi Restaurant Menu — Ranchi's Finest Cuisine",
    paragraphs: [
      "Explore the full menu at Zoi Restaurant, Ranchi's premier fine dining destination. Our menu features carefully crafted dishes spanning Asian, Italian, Continental, and Mediterranean cuisines — each prepared by our expert culinary team using the finest ingredients.",
      "From light starters and artisan breads to indulgent main courses, handcrafted desserts, and an extensive cocktail menu — every item at Zoi is designed to deliver an extraordinary dining experience in Ranchi.",
    ],
    h2s: ["Starters, Mains & Desserts", "Craft Cocktails & Beverages"],
  },
  events: {
    h1: "Events at Zoi Restaurant Ranchi",
    paragraphs: [
      "Zoi Restaurant hosts some of Ranchi's most exciting dining events — from intimate live acoustic music evenings to high-energy DJ nights, themed brunches, and exclusive private dining experiences.",
      "Check our upcoming events calendar and book your spot early. Events at Zoi Restaurant in Ranchi fill up quickly — reserve online or call us to confirm your place at Jharkhand's most sought-after dining events.",
    ],
    h2s: ["DJ Nights & Live Music in Ranchi", "Special Dining Events at Zoi"],
  },
  gallery: {
    h1: "Zoi Restaurant Gallery — Fine Dining in Ranchi",
    paragraphs: [
      "Step inside Zoi Restaurant through our gallery. Browse stunning photographs of our elegantly designed interiors, signature dishes, vibrant bar, and memorable events — all captured from Ranchi's most prestigious dining destination at JD Hi Street Mall.",
    ],
    h2s: ["Restaurant Ambience & Interiors", "Food, Bar & Events Photography"],
  },
  about: {
    h1: "About Zoi Restaurant — Ranchi's Premier Fine Dining Destination",
    paragraphs: [
      "Zoi — meaning 'life' in Greek — was founded with a singular vision: to create Ranchi's most refined and memorable dining experience. Located at JD Hi Street Mall, Hindpiri, Zoi brings together world-class cuisine, elegant design, live entertainment, and warm hospitality under one roof.",
      "Our culinary philosophy centres on quality, creativity, and authenticity — sourcing the finest ingredients to craft dishes that celebrate global flavours while remaining deeply connected to the joy of sharing a great meal.",
    ],
    h2s: ["Our Story & Philosophy", "Dining Excellence in Ranchi"],
  },
  reservations: {
    h1: "Reserve a Table at Zoi Restaurant Ranchi",
    paragraphs: [
      "Book your table at Zoi Restaurant, Ranchi's finest dining destination, directly online. Whether you're planning a romantic dinner for two, a family celebration, or a corporate dinner, our reservations team ensures your experience is seamless and exceptional.",
      "We are located at the 4th Floor, JD Hi Street Mall, Hindpiri, Ranchi. For group bookings and private dining enquiries, please mention your requirements in the special requests field and our team will be in touch.",
    ],
    h2s: ["Online Table Booking — Zoi Ranchi", "Private Dining & Group Reservations"],
  },
  contact: {
    h1: "Contact Zoi Restaurant Ranchi",
    paragraphs: [
      "Find us at the 4th Floor, JD Hi Street Mall, Mahatma Gandhi Main Road, Hindpiri, Ranchi, Jharkhand — 834001. We are open daily from 12:00 PM to 11:00 PM.",
      "For reservations, event enquiries, or general information, reach out to us via phone, email, or the contact form. Our team is happy to assist you plan your next visit to Ranchi's most acclaimed fine dining restaurant.",
    ],
    h2s: ["Location & Directions", "Opening Hours & Contact Details"],
  },
};

const SEOContent = ({ page }: SEOContentProps) => {
  const content = seoText[page];
  if (!content) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0,0,0,0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      <h1>{content.h1}</h1>
      {content.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {content.h2s.map((h, i) => (
        <h2 key={i}>{h}</h2>
      ))}
    </div>
  );
};

export default SEOContent;