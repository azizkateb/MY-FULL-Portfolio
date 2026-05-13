import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiTailwindcss, 
  SiSpringboot, 
  SiExpress
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.children;
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, rotateX: -20 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 relative bg-[#111111]/50 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-20 text-center flex flex-col items-center">
          <span className="text-crimson text-sm tracking-[0.3em] font-bold mb-4 uppercase">Arsenal</span>
          <h2 className="heading-font text-4xl md:text-6xl font-bold">
            02 / <span className="text-white">SKILLS</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mt-6"></div>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto perspective-1000"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  rotateX: -10,
                  z: 50
                }}
                className="group relative h-40 glass-panel rounded-lg flex flex-col items-center justify-center p-6 transform-gpu transition-all duration-300 hover:border-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <Icon 
                  className="w-12 h-12 mb-4 text-white/50 group-hover:text-white transition-all duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transform-gpu group-hover:translate-z-10" 
                />
                
                <span className="text-sm font-medium tracking-wide text-white/70 group-hover:text-gold transition-colors duration-300 transform-gpu group-hover:translate-z-5">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
