import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 0, 0, ${p.opacity})`;
        ctx.fill();
      }
      animationId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

interface HeroProps {
  animated?: boolean;
}

export default function Hero({ animated = false }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(containerRef.current, { x, y, duration: 2, ease: "power2.out" });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const title = "AZIZ ELKATEB".split("");

  // Shared ease curve — snappy entrance like in the tutorial
  const easeOut = [0.33, 1, 0.68, 1] as const;

  return (
    <section
      id="top"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center scanline"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b0b]/50 to-[#0b0b0b]" />
        <div className="absolute inset-0 bg-gradient-radial from-crimson/5 via-transparent to-transparent" />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 text-center flex flex-col items-center px-6 w-full max-w-5xl"
      >
        {/* ── WIDTH REVEAL BAR (only on animated page) ── */}
        {animated && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
            className="h-[1px] bg-gradient-to-r from-transparent via-crimson to-transparent mb-10 mx-auto"
          />
        )}

        {/* ── TITLE ── */}
        <h1 className="heading-font text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 flex overflow-hidden">
          {title.map((char, index) =>
            animated ? (
              <motion.span
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.04,
                  ease: easeOut,
                }}
                className={char === " " ? "w-4 md:w-8" : "inline-block"}
                style={{ textShadow: "0 0 40px rgba(139,0,0,0.4)" }}
              >
                {char}
              </motion.span>
            ) : (
              <motion.span
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 2.5 + index * 0.05,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className={char === " " ? "w-4 md:w-8" : "inline-block"}
                style={{ textShadow: "0 0 40px rgba(139,0,0,0.4)" }}
              >
                {char}
              </motion.span>
            )
          )}
        </h1>

        {/* ── SUBTITLE + DESCRIPTION + CTA ── */}
        <motion.div
          initial={animated ? { y: 50, opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ y: 0, opacity: 1 }}
          transition={
            animated
              ? { duration: 0.8, delay: 0.75, ease: easeOut }
              : { duration: 1, delay: 3.5 }
          }
          className="flex flex-col items-center"
        >
          <h2 className="text-sm md:text-xl font-medium tracking-[0.3em] text-white/80 uppercase mb-6 relative">
            Full Stack Developer
            {/* ── WIDTH UNDERLINE (only on animated page) ── */}
            {animated ? (
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 1.0, ease: easeOut }}
                className="absolute -bottom-2 left-0 h-[1px] bg-crimson block"
              />
            ) : (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-crimson" />
            )}
          </h2>

          <motion.p
            initial={animated ? { y: 30, opacity: 0 } : false}
            animate={animated ? { y: 0, opacity: 1 } : undefined}
            transition={animated ? { duration: 0.7, delay: 1.1, ease: easeOut } : undefined}
            className="text-white/60 max-w-lg mb-12 text-sm md:text-base font-light"
          >
            Building modern immersive digital experiences.
          </motion.p>

          <motion.button
            data-testid="button-enter-portfolio"
            initial={animated ? { y: 30, opacity: 0 } : undefined}
            animate={animated ? { y: 0, opacity: 1 } : undefined}
            transition={animated ? { duration: 0.7, delay: 1.25, ease: easeOut } : undefined}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-4 bg-transparent overflow-hidden"
          >
            <div className="absolute inset-0 border border-gold/30 group-hover:border-gold transition-colors duration-500" />
            <div className="absolute inset-0 bg-crimson/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
            <span className="relative z-10 heading-font uppercase tracking-widest text-sm text-gold group-hover:text-white transition-colors duration-300">
              Enter Portfolio
            </span>
            <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-crimson group-hover:w-full transition-all duration-500 ease-out" />
          </motion.button>
        </motion.div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={
          animated
            ? { delay: 1.5, duration: 0.8, ease: easeOut }
            : { delay: 4, duration: 1 }
        }
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-crimson to-transparent"
        />
      </motion.div>
    </section>
  );
}
