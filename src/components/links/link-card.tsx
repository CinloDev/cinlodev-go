"use client";

import { motion } from "framer-motion";
import type { LinkItem } from "@/config/links";
import { ArrowUpRight } from "lucide-react";

export function LinkCard({ link, index }: { link: LinkItem; index: number }) {
  const Icon = link.icon;

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex items-center justify-between rounded-2xl p-4 transition-all duration-300 glass-card hover:glass-card-hover"
    >
      <div className="flex items-center gap-4 relative z-10">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#C89BFF] transition-colors duration-300 group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:border-transparent">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-white">
            {link.title}
          </h2>
          <p className="text-sm text-[#9A93B8] line-clamp-1 group-hover:text-[#C8C3E6] transition-colors duration-300">
            {link.description}
          </p>
        </div>
      </div>
      
      <div className="shrink-0 pl-2 text-[#4A3A73] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#FFB26B]">
        <ArrowUpRight className="h-5 w-5" />
      </div>
    </motion.a>
  );
}
