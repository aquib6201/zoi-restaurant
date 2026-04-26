import { useState } from "react";
import "../App.css";
import useSEO from "../hooks/useSEO.ts";
import SEOContent from "../components/seo/SEOContent.tsx";
import { SEO_PAGES } from "../lib/seoConfig.ts";

export default function Home() {
  useSEO(SEO_PAGES.home);
  const [count, setCount] = useState(0);

  return (
    <>
      <SEOContent page="home" />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}
