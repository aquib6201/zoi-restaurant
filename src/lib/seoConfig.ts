// ═══════════════════════════════════════════════
// SEO CONFIG — ZOI RESTAURANT
// Central file for all page meta tags & schemas
// Update BASE_URL when domain is purchased
// ═══════════════════════════════════════════════

export const BASE_URL = "https://zoi-restaurant.vercel.app";
// When domain is ready, change to:
// export const BASE_URL = "https://zoiranchi.com";

export const RESTAURANT_INFO = {
  name: "Zoi Restaurant",
  alternateName: "Zoi Ranchi",
  telephone: "+91-XXXXXXXXXX", // ← ADD REAL NUMBER
  email: "info@zoirestaurant.com", // ← ADD REAL EMAIL
  address: {
    street: "4th Floor, JD Hi Street Mall, Mahatma Gandhi Main Road, Hindpiri",
    city: "Ranchi",
    state: "Jharkhand",
    pincode: "834001",
    country: "IN",
  },
  coordinates: {
    lat: 23.3441,
    lng: 85.3096,
  },
  rating: { value: "4.4", count: "863" },
  social: {
    instagram: "https://www.instagram.com/lifeatzoi/",
  },
  hours: "Monday–Sunday: 12:00 PM – 11:00 PM",
  priceRange: "₹₹₹",
};

// ── PAGE SEO DATA ──────────────────────────────

export const SEO_PAGES = {

  home: {
    title: "Zoi Restaurant Ranchi | Fine Dining, Bar & Live Events | JD Hi Street Mall",
    description:
      "Zoi Restaurant — Ranchi's premier fine dining destination at JD Hi Street Mall, Hindpiri. Asian, Continental & Mediterranean cuisine, craft cocktails, live music & DJ nights. Book now.",
    keywords:
      "Zoi restaurant Ranchi, fine dining Ranchi, best restaurant Ranchi, luxury restaurant Ranchi, bar Ranchi, restaurant Hindpiri Ranchi, JD Hi Street Mall restaurant",
    canonical: "/",
    schema: {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "Zoi Restaurant",
      description:
        "Ranchi's premier fine dining destination with Asian, Italian, Continental, and Mediterranean cuisines, craft cocktails, live music, and DJ nights.",
      url: BASE_URL,
      image: `${BASE_URL}/og-image.jpg`,
      telephone: "+91-XXXXXXXXXX",
      servesCuisine: ["Asian", "Italian", "Continental", "Mediterranean"],
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4th Floor, JD Hi Street Mall, Mahatma Gandhi Main Road, Hindpiri",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        postalCode: "834001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.3441,
        longitude: 85.3096,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.4",
        reviewCount: "863",
        bestRating: "5",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "12:00",
          closes: "23:00",
        },
      ],
      hasMenu: `${BASE_URL}/menu`,
      acceptsReservations: "True",
      sameAs: ["https://www.instagram.com/lifeatzoi/"],
    },
  },

  menu: {
    title: "Menu | Zoi Restaurant Ranchi — Asian, Continental & Mediterranean Cuisine",
    description:
      "Explore Zoi Restaurant's full menu — featuring Asian, Italian, Continental & Mediterranean dishes, signature cocktails, mocktails, and more. Fine dining in Ranchi.",
    keywords:
      "Zoi restaurant menu Ranchi, fine dining menu Ranchi, Asian cuisine menu, Continental food Ranchi, Mediterranean food Ranchi, cocktail menu Ranchi, restaurant menu Hindpiri",
    canonical: "/menu",
    schema: {
      "@context": "https://schema.org",
      "@type": "Menu",
      name: "Zoi Restaurant Menu",
      description: "Full dining menu featuring Asian, Continental, Mediterranean and more",
      url: `${BASE_URL}/menu`,
      hasMenuSection: [
        { "@type": "MenuSection", name: "Starters", description: "Signature starters and small plates" },
        { "@type": "MenuSection", name: "Mains", description: "Main course dishes from Asian, Continental & Mediterranean cuisines" },
        { "@type": "MenuSection", name: "Desserts", description: "Handcrafted desserts and sweet finishes" },
        { "@type": "MenuSection", name: "Beverages", description: "Hot and cold beverages, juices, and mocktails" },
        { "@type": "MenuSection", name: "Cocktails", description: "Craft cocktails and premium spirits" },
      ],
    },
  },

  events: {
    title: "Events at Zoi Restaurant Ranchi | DJ Nights, Live Music & Special Dinners",
    description:
      "Upcoming events at Zoi Restaurant Ranchi — DJ nights, live acoustic performances, themed brunches, and exclusive dining events. Reserve your spot at JD Hi Street Mall.",
    keywords:
      "Zoi events Ranchi, DJ night Ranchi, live music restaurant Ranchi, events Ranchi, special dinner Ranchi, brunch Ranchi, entertainment restaurant Ranchi",
    canonical: "/events",
    schema: {
      "@context": "https://schema.org",
      "@type": "EventSeries",
      name: "Zoi Restaurant Events",
      description: "Regular events at Zoi Restaurant including DJ nights, live music and special dining experiences",
      url: `${BASE_URL}/events`,
      location: {
        "@type": "Place",
        name: "Zoi Restaurant",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4th Floor, JD Hi Street Mall, Hindpiri",
          addressLocality: "Ranchi",
          addressRegion: "Jharkhand",
          postalCode: "834001",
          addressCountry: "IN",
        },
      },
    },
  },

  gallery: {
    title: "Gallery | Zoi Restaurant Ranchi — Ambience, Food & Events Photography",
    description:
      "Browse Zoi Restaurant's gallery — stunning photos of our elegant interiors, signature dishes, vibrant bar, and live events. Experience Ranchi's finest dining visually.",
    keywords:
      "Zoi restaurant gallery, Zoi Ranchi photos, fine dining ambience Ranchi, restaurant interior Ranchi, food photography Ranchi",
    canonical: "/gallery",
    schema: {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      name: "Zoi Restaurant Gallery",
      description: "Photos of Zoi Restaurant Ranchi — food, ambience, bar, and events",
      url: `${BASE_URL}/gallery`,
    },
  },

  about: {
    title: "About Zoi Restaurant Ranchi | Our Story, Philosophy & Team",
    description:
      "Discover the story behind Zoi Restaurant — Ranchi's finest dining experience. Learn about our culinary philosophy, our team, and what makes Zoi the city's most beloved restaurant.",
    keywords:
      "about Zoi restaurant Ranchi, Zoi restaurant story, fine dining philosophy Ranchi, Zoi restaurant team",
    canonical: "/about",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Zoi Restaurant",
      description: "The story and philosophy behind Zoi Restaurant, Ranchi",
      url: `${BASE_URL}/about`,
      mainEntity: {
        "@type": "Restaurant",
        name: "Zoi Restaurant",
        url: BASE_URL,
      },
    },
  },

  reservations: {
    title: "Book a Table | Zoi Restaurant Ranchi — Online Reservations",
    description:
      "Reserve your table at Zoi Restaurant Ranchi online. Book for fine dining, private events, or special occasions at JD Hi Street Mall, Hindpiri. Easy and instant confirmation.",
    keywords:
      "book table Zoi restaurant Ranchi, restaurant reservation Ranchi, table booking fine dining Ranchi, reserve Zoi Ranchi, online booking restaurant Ranchi",
    canonical: "/reservations",
    schema: {
      "@context": "https://schema.org",
      "@type": "ReservationPackage",
      name: "Zoi Restaurant Table Reservation",
      description: "Book your table at Zoi Restaurant Ranchi for fine dining and special events",
      url: `${BASE_URL}/reservations`,
      provider: {
        "@type": "Restaurant",
        name: "Zoi Restaurant",
        telephone: "+91-XXXXXXXXXX",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4th Floor, JD Hi Street Mall, Hindpiri",
          addressLocality: "Ranchi",
          addressRegion: "Jharkhand",
          postalCode: "834001",
          addressCountry: "IN",
        },
      },
    },
  },

  contact: {
    title: "Contact Zoi Restaurant Ranchi | Location, Hours & Phone Number",
    description:
      "Get in touch with Zoi Restaurant Ranchi. Find us at 4th Floor, JD Hi Street Mall, Hindpiri, Ranchi. Call us, email us, or get directions. Open daily 12 PM – 11 PM.",
    keywords:
      "Zoi restaurant contact Ranchi, Zoi restaurant address, JD Hi Street Mall restaurant, restaurant phone number Ranchi, Zoi restaurant location, Hindpiri restaurant",
    canonical: "/contact",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Zoi Restaurant",
      url: `${BASE_URL}/contact`,
      mainEntity: {
        "@type": "Restaurant",
        name: "Zoi Restaurant",
        telephone: "+91-XXXXXXXXXX",
        email: "info@zoirestaurant.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4th Floor, JD Hi Street Mall, Mahatma Gandhi Main Road, Hindpiri",
          addressLocality: "Ranchi",
          addressRegion: "Jharkhand",
          postalCode: "834001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.3441,
          longitude: 85.3096,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            opens: "12:00",
            closes: "23:00",
          },
        ],
      },
    },
  },
};