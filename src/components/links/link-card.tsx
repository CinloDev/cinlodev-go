"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { LinkItem } from "@/config/links";

export function LinkCard({ link, index }: { link: LinkItem; index: number }) {
	const Icon = link.icon;
	const isFeatured = link.featured;
	const hasNeko = link.peekingNeko;

	if (isFeatured) {
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
					ease: [0.22, 1, 0.36, 1],
				}}
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				className="group relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 glass-card hover:glass-card-hover col-span-1 min-h-[280px]"
			>
				{/* Neko asomándose escondido */}
				{hasNeko && (
					<div className="absolute -top-11 right-6 -z-10 transform translate-y-8 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-y-0 group-hover:opacity-100 drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]">
						<Image
							src="/assets/neko.svg"
							alt="Neko asomándose"
							width={64}
							height={64}
							className="w-16 h-16 object-contain"
						/>
					</div>
				)}

				<div className="flex flex-col relative z-10 w-full h-full">
					{/* Header de la tarjeta */}
					<div className="flex flex-col sm:flex-row sm:items-start justify-between w-full mb-4 gap-4">
						<div className="flex items-center gap-4">
							<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-[#C89BFF] transition-colors duration-300 group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:border-transparent">
								<Icon className="h-6 w-6" />
							</div>
							<div className="flex flex-col">
								<h2 className="text-xl sm:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#D38BFF]">
									{link.title}
								</h2>
								{link.subtitle && (
									<span className="text-sm font-medium text-[#FFB26B]">
										{link.subtitle}
									</span>
								)}
							</div>
						</div>
					</div>

					{/* Descripción Principal */}
					<p className="text-[15px] sm:text-base leading-relaxed text-[#9A93B8] group-hover:text-[#C8C3E6] transition-colors duration-300 mb-6 max-w-xl">
						{link.description}
					</p>

					{/* Call to action & Arrow */}
					<div className="flex items-center justify-between mt-auto pt-5 border-t border-white/5">
						<span className="text-sm sm:text-base font-semibold text-[#8B5CF6] transition-colors group-hover:text-[#A855F7] flex items-center gap-2">
							{link.actionText || "Explorar"}
						</span>
						<div className="text-[#4A3A73] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#FFB26B]">
							<ArrowUpRight className="h-6 w-6 sm:h-7 sm:w-7" />
						</div>
					</div>
				</div>
			</motion.a>
		);
	}

	// Diseño para las tarjetas secundarias / pequeñas
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
				ease: [0.22, 1, 0.36, 1],
			}}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			className="group relative flex items-center justify-between rounded-2xl p-5 transition-all duration-300 glass-card hover:glass-card-hover col-span-1"
		>
			<div className="flex items-center gap-4 relative z-10">
				<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#C89BFF] transition-colors duration-300 group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:border-transparent">
					<Icon className="h-5 w-5" />
				</div>
				<div className="flex flex-col">
					<h2 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-[#D38BFF]">
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
