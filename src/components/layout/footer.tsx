"use client";

import { motion } from "framer-motion";
import { Moon } from "lucide-react";

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="mt-auto py-8 w-full flex flex-col items-center justify-center gap-4 relative z-10"
    >
      <div className="flex flex-col items-center group cursor-pointer">
        <div className="relative mb-2 transition-transform duration-300 group-hover:-translate-y-1">
          {/* Neko durmiendo (representación minimalista con emoji/texto) */}
          <span className="text-2xl" role="img" aria-label="Neko sleeping">🐈‍⬛💤</span>
          <Moon className="absolute -top-1 -right-2 w-3 h-3 text-[#FFD166] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <p className="text-sm font-medium text-[#9A93B8] transition-colors group-hover:text-[#C89BFF]">
          Made with ❤️ by CinloDev
        </p>
      </div>
    </motion.footer>
  );
}
