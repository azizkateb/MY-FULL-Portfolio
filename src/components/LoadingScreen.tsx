import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const scanlinesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    tl.fromTo(logoRef.current, 
      { opacity: 0, scale: 0.8, filter: "blur(10px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.5, ease: "power3.out" }
    )
    .to(logoRef.current, {
      textShadow: "0 0 20px rgba(139, 0, 0, 0.8), 0 0 40px rgba(139, 0, 0, 0.4)",
      duration: 0.5,
      yoyo: true,
      repeat: 1
    })
    .to(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut"
    }, "+=0.5");

  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[1000] bg-[#0b0b0b] flex items-center justify-center scanline"
    >
      <div ref={scanlinesRef} className="absolute inset-0 pointer-events-none opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-overlay"></div>
      <h1 
        ref={logoRef}
        className="heading-font text-6xl md:text-8xl tracking-widest text-[#f5f5f5] select-none"
      >
        AE
      </h1>
    </div>
  );
}
