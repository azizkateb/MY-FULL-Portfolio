import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import PageSwitcher from "@/components/PageSwitcher";
import PageTransition from "@/components/PageTransition";

// Skip the loading screen if the user has already seen it this session
// (e.g. when navigating back from Page 2)
const hasSeenLoader = () =>
  typeof sessionStorage !== "undefined" &&
  !!sessionStorage.getItem("portfolio_loaded");

export default function Home() {
  const [loading, setLoading] = useState(() => !hasSeenLoader());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoadComplete = () => {
    sessionStorage.setItem("portfolio_loaded", "true");
    setLoading(false);
  };

  return (
    <PageTransition>
      <div className="bg-[#0b0b0b] min-h-screen text-[#f5f5f5] selection:bg-crimson selection:text-white">
        <AnimatePresence mode="wait">
          {loading && (
            <LoadingScreen key="loading" onComplete={handleLoadComplete} />
          )}
        </AnimatePresence>

        {/* Nav delay: long on first load (after loading screen), instant on return */}
        <Navigation navDelay={loading ? 2.5 : 0.1} />

        <main className="relative z-10">
          <Hero animated={false} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <PageSwitcher currentPage={1} />
      </div>
    </PageTransition>
  );
}
