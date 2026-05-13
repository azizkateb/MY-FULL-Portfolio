import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Core Technologies" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const textElements = textRef.current?.children;
    const statCards = statsRef.current?.children;

    if (!section || !textElements || !statCards) return;

    gsap.fromTo(
      textElements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      statCards,
      { opacity: 0, scale: 0.9, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 md:py-48 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(139,0,0,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Decorative Section Title */}
          <div className="lg:col-span-3 flex lg:justify-end">
            <h2 className="heading-font text-5xl md:text-7xl lg:text-[8rem] font-black text-white/5 tracking-tighter leading-none lg:-rotate-90 lg:origin-right whitespace-nowrap pt-12">
              01 / ABOUT
            </h2>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 flex flex-col justify-center relative z-10">
            <div ref={textRef} className="max-w-3xl space-y-8">
              <h3 className="heading-font text-3xl md:text-5xl font-bold text-white leading-tight">
                Forging Digital <span className="text-crimson">Realities</span>
              </h3>
              
              <div className="w-16 h-[2px] bg-gold"></div>

              <p className="text-lg text-white/70 leading-relaxed font-light">
                I am a passionate Full Stack Developer dedicated to crafting immersive, highly performant web experiences. Like a master smith in a digital forge, I blend complex architectural patterns with breathtaking interactive design.
              </p>
              
              <p className="text-lg text-white/70 leading-relaxed font-light">
                My approach transcends traditional web development. Every line of code is written with cinematic intent, ensuring that the applications I build don't just function flawlessly—they captivate. From robust database schemas to fluid frontend animations, I engineer the extraordinary.
              </p>
            </div>

            {/* Stat Cards */}
            <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="glass-panel p-8 flex flex-col items-center text-center group hover:glass-panel-crimson transition-all duration-500 cursor-none"
                >
                  <span className="heading-font text-4xl md:text-5xl font-bold text-gold mb-2 group-hover:text-white transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                    {stat.value}
                  </span>
                  <span className="text-sm tracking-widest uppercase text-white/50 group-hover:text-crimson transition-colors duration-300 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
