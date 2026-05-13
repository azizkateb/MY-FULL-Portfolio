import { useRef } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiX } from "react-icons/si";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission visually
    const btn = document.getElementById("submit-btn");
    if (btn) {
      const originalText = btn.innerText;
      btn.innerText = "Transmitting...";
      setTimeout(() => {
        btn.innerText = "Message Sent";
        btn.classList.add("bg-gold", "text-[#0b0b0b]", "border-gold");
        setTimeout(() => {
          btn.innerText = originalText;
          btn.classList.remove("bg-gold", "text-[#0b0b0b]", "border-gold");
          (e.target as HTMLFormElement).reset();
        }, 3000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-32 md:py-48 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h2 className="heading-font text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            LET'S BUILD SOMETHING <span className="text-crimson block mt-2">LEGENDARY.</span>
          </h2>
          <p className="text-white/50 font-light max-w-xl mx-auto">
            My forge is currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="w-full max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10 glass-panel p-8 md:p-12 rounded-xl">
            <div className="scanline rounded-xl pointer-events-none"></div>
            
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-white/50 font-bold ml-1">Identity</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-[#0b0b0b]/50 border border-white/10 rounded px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-crimson focus:shadow-[0_0_15px_rgba(139,0,0,0.3)] transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/50 font-bold ml-1">Transmission Vector (Email)</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-[#0b0b0b]/50 border border-white/10 rounded px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-crimson focus:shadow-[0_0_15px_rgba(139,0,0,0.3)] transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/50 font-bold ml-1">Payload</label>
              <textarea 
                id="message" 
                required
                rows={5}
                className="w-full bg-[#0b0b0b]/50 border border-white/10 rounded px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-crimson focus:shadow-[0_0_15px_rgba(139,0,0,0.3)] transition-all duration-300 resize-none"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <motion.button
              id="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-transparent border border-crimson text-crimson font-bold tracking-widest uppercase hover:bg-crimson hover:text-white transition-all duration-300 rounded shadow-[0_0_10px_rgba(139,0,0,0.2)] hover:shadow-[0_0_20px_rgba(139,0,0,0.6)]"
            >
              Initiate Transfer
            </motion.button>
          </form>

          <div className="mt-16 flex justify-center gap-8">
            <a href="#" className="text-white/50 hover:text-gold hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-300">
              <SiGithub size={24} />
            </a>
            <a href="#" className="text-white/50 hover:text-gold hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-white/50 hover:text-gold hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-300">
              <SiX size={24} />
            </a>
            <a href="#" className="text-white/50 hover:text-gold hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-300">
              <FaEnvelope size={24} />
            </a>
          </div>
          
          <div className="mt-20 text-center text-white/30 text-xs tracking-widest font-mono">
            <p>&copy; {new Date().getFullYear()} AZIZ ELKATEB. ALL RIGHTS RESERVED.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
