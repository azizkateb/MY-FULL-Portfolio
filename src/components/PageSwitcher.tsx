import { motion } from "framer-motion";
import { Link } from "wouter";

interface PageSwitcherProps {
  currentPage: 1 | 2;
}

export default function PageSwitcher({ currentPage }: PageSwitcherProps) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: currentPage === 2 ? 1.6 : 4.5, ease: [0.33, 1, 0.68, 1] }}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2"
    >
      <span className="text-[10px] uppercase tracking-widest text-white/30 mr-1">View</span>

      <Link href={`${base}/`}>
        <motion.button
          data-testid="button-page-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative px-4 py-2 text-[11px] heading-font uppercase tracking-widest transition-all duration-300 ${
            currentPage === 1
              ? "text-gold border border-gold/60"
              : "text-white/40 border border-white/10 hover:text-white/70 hover:border-white/30"
          }`}
        >
          {currentPage === 1 && (
            <motion.div
              layoutId="page-indicator"
              className="absolute inset-0 bg-crimson/10"
            />
          )}
          Page 1
        </motion.button>
      </Link>

      <Link href={`${base}/two`}>
        <motion.button
          data-testid="button-page-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative px-4 py-2 text-[11px] heading-font uppercase tracking-widest transition-all duration-300 ${
            currentPage === 2
              ? "text-gold border border-gold/60"
              : "text-white/40 border border-white/10 hover:text-white/70 hover:border-white/30"
          }`}
        >
          {currentPage === 2 && (
            <motion.div
              layoutId="page-indicator"
              className="absolute inset-0 bg-crimson/10"
            />
          )}
          Page 2
        </motion.button>
      </Link>
    </motion.div>
  );
}
