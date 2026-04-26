import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object | object[];
}

const BASE_URL = "https://zoi-restaurant.vercel.app";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  schema,
}: SEOProps) => {
  useEffect(() => {
    // ── Title ──
    document.title = title;

    // ── Helper to set/create meta tags ──
    const setMeta = (selector: string, content: string, attr = "content") => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        // derive the attribute name from selector
        if (selector.includes("property=")) {
          el.setAttribute("property", selector.match(/property="([^"]+)"/)?.[1] || "");
        } else if (selector.includes("name=")) {
          el.setAttribute("name", selector.match(/name="([^"]+)"/)?.[1] || "");
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // ── Primary meta ──
    setMeta('meta[name="description"]', description);
    if (keywords) setMeta('meta[name="keywords"]', keywords);

    // ── Canonical ──
    if (canonical) setLink("canonical", `${BASE_URL}${canonical}`);

    // ── Open Graph ──
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[property="og:url"]', canonical ? `${BASE_URL}${canonical}` : BASE_URL);
    setMeta('meta[property="og:type"]', ogType);

    // ── Twitter Card ──
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', ogImage);

    // ── Inject page-specific Schema ──
    if (schema) {
      const existing = document.getElementById("page-schema");
      if (existing) existing.remove();

      const script = document.createElement("script");
      script.id = "page-schema";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(
        Array.isArray(schema) ? schema : schema
      );
      document.head.appendChild(script);
    }

    // ── Cleanup schema on unmount ──
    return () => {
      const el = document.getElementById("page-schema");
      if (el) el.remove();
    };
  }, [title, description, keywords, canonical, ogImage, ogType, schema]);
};

export default useSEO;