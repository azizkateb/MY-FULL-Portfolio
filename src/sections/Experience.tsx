import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experiences = [
  {
    year: "2026–Present",
    role: "Full Stack Developer",
    company: "Freelance",
    description: "Architecting scalable backend microservices and crafting highly interactive, cinematic frontend experiences for high-profile clients."
  },
  {
    year: "2021–2024",
    role: "Etudiant en LHBG",
    company: "Lycee Houcine Bouzaiene Gafsa",
    description: "Graduated with a science degree, excelling in mathematics and computer science. Developed strong problem-solving skills and a passion for software development."
  },
  {
    year: "2024–2025",
    role: "Junior Web Developer",
    company: "Tunisie Telecom",
    description: "Developed and maintained responsive user interfaces using React and Tailwind CSS. Integrated RESTful APIs and managed MongoDB databases."
  },
  {
    year: "2025–2026",
    role: "Software Engineer Intern",
    company: "Iset Gafsa",
    description: "Mastered core algorithms, data structures, and software engineering principles. Graduated with Honors."
  }
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = gsap.utils.toArray('.timeline-item');
    const line = document.querySelector('.timeline-line');

    if (!sectionRef.current) return;

    gsap.to(line, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 60%",
        end: "bottom 80%",
        scrub: 1,
      }
    });

    items.forEach((item: any, i) => {
      gsap.fromTo(item,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50, filter: "blur(10px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          }
        }
      );
    });
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="py-32 relative bg-[#111111]/30">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-24 text-center">
          <h2 className="heading-font text-4xl md:text-6xl font-bold">
            04 / <span className="text-white">JOURNEY</span>
          </h2>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Glowing Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
            <div className="timeline-line absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-crimson via-gold to-crimson shadow-[0_0_15px_#8b0000]"></div>
          </div>

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#0b0b0b] border-2 border-gold -translate-x-1/2 mt-1 md:mt-0 z-10 shadow-[0_0_10px_#d4af37]"></div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <div className="glass-panel p-8 rounded-lg group hover:border-crimson/50 transition-colors duration-300">
                    <span className="text-gold font-mono text-sm tracking-widest">{exp.year}</span>
                    <h3 className="heading-font text-2xl font-bold text-white mt-2 mb-1 group-hover:text-crimson transition-colors duration-300">{exp.role}</h3>
                    <h4 className="text-white/50 text-sm uppercase tracking-wider mb-4">{exp.company}</h4>
                    <p className="text-white/70 font-light text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
