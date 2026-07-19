"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profileConfig } from "@/config/profile";

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center mt-12 mb-10 w-full relative z-10"
    >
      <div className="relative mb-6 group cursor-default">
        {/* Glow halo detrás del avatar */}
        <div 
          className="absolute inset-0 rounded-full scale-125 opacity-70 blur-2xl"
          style={{ background: "radial-gradient(circle at top, #44307A, #221B38 40%, transparent 100%)" }}
        />
        
        <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/10 bg-white/5 p-1 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src={profileConfig.avatarUrl}
              alt={profileConfig.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {profileConfig.status.available && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#171424]/90 px-3 py-1 text-xs font-medium backdrop-blur-md flex items-center gap-1.5 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#63E6A5] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#63E6A5]"></span>
            </span>
            {profileConfig.status.label}
          </div>
        )}
      </div>

      <h1 className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {profileConfig.name}
      </h1>
      <p className="mb-6 max-w-sm text-base text-[#C8C3E6]">
        ☕ Café, código y magia.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4">
        <a 
          href={profileConfig.socials?.find(s => s.name === "GitHub")?.url || "#"} 
          className="btn-primary flex w-full sm:w-auto items-center justify-center px-8 py-3 text-sm font-semibold"
        >
          Ver Portfolio
        </a>
        <a 
          href={`mailto:${profileConfig.contact.email}`}
          className="btn-secondary flex w-full sm:w-auto items-center justify-center px-8 py-3 text-sm font-semibold"
        >
          Contactar
        </a>
      </div>
    </motion.section>
  );
}
