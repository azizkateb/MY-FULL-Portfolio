import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import PageSwitcher from "@/components/PageSwitcher";
import PageTransition from "@/components/PageTransition";

export default function PageTwo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="bg-[#0b0b0b] min-h-screen text-[#f5f5f5] selection:bg-crimson selection:text-white">
        <Navigation navDelay={0.2} />

        <main className="relative z-10">
          {/* Hero with Framer Motion onload animations */}
          <Hero animated={true} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <PageSwitcher currentPage={2} />
      </div>
    </PageTransition>
  );
}
