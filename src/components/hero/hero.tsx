"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Image from "next/image";
import { WhatsappIcon } from "@/components/common/icons";
import { profileConfig } from "@/config/profile";

export function Hero() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
			className="flex flex-col items-center text-center mt-12 mb-10 w-full px-4 relative z-10"
		>
			<div className="relative mb-6 group cursor-default">
				{/* Glow halo detrás del avatar - Más fuerte e inmersivo */}
				<div
					className="absolute inset-[-100px] rounded-full scale-150 opacity-90 blur-3xl pointer-events-none"
					style={{
						background:
							"radial-gradient(circle at center, rgba(68, 48, 122, 0.4), rgba(34, 27, 56, 0.2) 50%, transparent 100%)",
					}}
				/>

				<div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-white/10 bg-white/5 p-1 shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:scale-[1.02] z-10">
					<div className="relative h-full w-full overflow-hidden rounded-full">
						<Image
							src={profileConfig.avatarUrl}
							alt={profileConfig.name}
							fill
							sizes="128px"
							className="object-cover"
							priority
						/>
					</div>
				</div>
				{profileConfig.status.available && (
					<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-md flex items-center gap-1.5 shadow-lg z-20">
						<span className="relative flex h-2 w-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
							<span className="relative inline-flex h-2 w-2 rounded-full bg-success"></span>
						</span>
						{profileConfig.status.label}
					</div>
				)}
			</div>

			<h1 className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
				{profileConfig.name}
			</h1>
			<p className="mb-6 max-w-sm text-base text-muted-foreground-hover">
				Frontend Developer especializada en React, Next.js y productos SaaS.
			</p>

			<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4">
				<a
					href="https://portfolio.cinlodev.com"
					target="_blank"
					rel="noopener noreferrer"
					className="btn-primary flex w-full sm:w-auto items-center justify-center gap-2.5 px-8 py-3 text-sm font-semibold"
				>
					<Briefcase className="w-5 h-5" />
					Ver Portfolio
				</a>
				<a
					href="https://wa.me/5492212024901"
					target="_blank"
					rel="noopener noreferrer"
					className="btn-secondary flex w-full sm:w-auto items-center justify-center gap-2.5 px-8 py-3 text-sm font-semibold"
				>
					<WhatsappIcon className="w-5 h-5" />
					Trabajemos juntos
				</a>
			</div>

			<p className="mt-8 text-sm font-medium text-muted-foreground flex items-center justify-center gap-1.5 opacity-80">
				<span>🚀</span> Disponible para proyectos remotos.
			</p>
		</motion.section>
	);
}
