import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const projects = [
  {
    title: "NeoChat",
    description: "A highly performant real-time messaging platform with end-to-end encryption. Features presence indicators, typing status, and media sharing within a sleek, dark-themed UI.",
    tech: ["React", "Node.js", "express", "MongoDB" , "qroq"],
    image: `url(${import.meta.env.BASE_URL}NeoChat.png)`,
    link: "https://azizkateb.github.io/NeoChat/",
    github: "https://github.com/azizkateb/NeoChat"
  },
  {
    title: "ECommerce",
    description: "Enterprise-grade e-commerce architecture built for scale. Implements advanced caching, intelligent search, and secure payment processing flows. ||||||NB: REQUEST  IS very slow at first due to backend server sleeping on free hosting.",
    tech: ["Angular", "PostgreSQL", "spring-boot", "TypeScript"],
    image: `url(${import.meta.env.BASE_URL}Ecommerce.png)`,
    link: "https://azizkateb.github.io/ecommerce-frontend/#/",
    github: "https://github.com/azizkateb/ecommerce-frontend"
  },
  {
    title: "Islamic Website",
    description: "AI-powered analytics dashboard that ingests raw data streams and generates actionable predictive insights using custom-trained LLMs.",
    tech: ["React", "OpenAI API", "API Integration", "tailwindcss"],
    image: `url(${import.meta.env.BASE_URL}IslamicWebsite.png)`,
    link: "https://azizkateb.github.io/Qoran/",
    github: "https://github.com/azizkateb/Qoran"
  },
  {
    title: "Black Clover Website",
    description: "This is an anime website that provides comprehensive information about the Black Clover anime series, including episode guides, character profiles, and news updates. It features a sleek design and user-friendly interface for fans to explore the world of Black Clover.",
    tech: ["React", "tailwindcss", "TypeScript", "Next.js"],
    image: `url(${import.meta.env.BASE_URL}BlackClover.png)`,
    link: "https://azizkateb.github.io/blackclover/",
    github: "https://github.com/azizkateb/blackclover"
  },
  {
    title: "Anime Landing Page",
    description: "This is an anime website that provides comprehensive information about the Jujutsu Kaisen anime series, including episode guides, character profiles, and news updates. It features a sleek design and user-friendly interface for fans to explore the world of Black Clover.",
    tech: ["React", "tailwindcss", "TypeScript", "Next.js"],
    image: `url(${import.meta.env.BASE_URL}AnimeLanding.png)`,
    link: "https://azizkateb.github.io/AnimeFrontEndWebsite/",
    github: "https://github.com/azizkateb/AnimeFrontEndWebsite"
  },
  {
    title: "React Portfolio",
    description: "This is a personal portfolio website built with React and Next.js, showcasing my skills and projects. It features a modern design and smooth animations.",
    tech: ["React", "tailwindcss", "TypeScript", "Next.js"],
    image: `url(${import.meta.env.BASE_URL}ReactPortfolio.png)`,
    link: "https://azizkateb.github.io/ReactPortfolio/",
    github: "https://github.com/azizkateb/ReactPortfolio"
  },
  {
    title: "Angular Portfolio",
    description: "This is a personal portfolio website built with Angular and TypeScript, showcasing my skills and projects. It features a modern design and smooth animations.",
    tech: ["Angular", "TypeScript", "tailwindcss"],
    image: `url(${import.meta.env.BASE_URL}AngularPortfolio.png)`,
    link: "https://azizkatebportfolio.netlify.app",
    github: "https://github.com/azizkateb/portfolio2.0"
  }

  
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const projectCards = projectsRef.current?.children;
    if (!projectCards) return;

    gsap.fromTo(
      projectCards,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 md:py-48 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-24 flex flex-col items-start max-w-4xl">
          <span className="text-crimson text-sm tracking-[0.3em] font-bold mb-4 uppercase">Showcase</span>
          <h2 className="heading-font text-4xl md:text-6xl lg:text-7xl font-bold">
            03 / <span className="text-white">PROJECTS</span>
          </h2>
          <p className="mt-6 text-white/50 text-lg font-light max-w-2xl">
            A curated selection of digital realms forged through code. 
            Each project represents a unique challenge conquered.
          </p>
        </div>

        <div ref={projectsRef} className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center group`}
            >
              {/* Project Visual / Placeholder */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-full md:w-1/2 aspect-video rounded-xl relative overflow-hidden glass-panel border border-white/10 group-hover:border-crimson/50 transition-colors duration-500"
              >
                <div 
                  className="absolute inset-0"
                  style={{ 
                    backgroundImage: project.image.startsWith('url') ? project.image : project.image,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>
                
                {/* Abstract graphic representation inside placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="heading-font text-3xl font-black text-white/20 uppercase tracking-widest mix-blend-overlay">
                    {project.title}
                  </h3>
                </div>
              </motion.div>

              {/* Project Info */}
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <span className="text-gold text-xs tracking-widest uppercase mb-4">Featured Work</span>
                <h3 className="heading-font text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-crimson transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="glass-panel p-6 md:p-8 rounded-lg mb-6 relative z-10 -ml-0 md:-ml-12 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-shadow duration-500">
                  <p className="text-white/80 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-8 pl-0 md:pl-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pl-0 md:pl-6">
                  <a href={project.link} className="relative group overflow-hidden pb-2">
                    <span className="text-sm font-bold tracking-widest uppercase text-white group-hover:text-gold transition-colors duration-300">
                      View Live
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-crimson transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href={project.github} className="text-sm font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-300 pb-2 border-b border-transparent hover:border-white/30">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
