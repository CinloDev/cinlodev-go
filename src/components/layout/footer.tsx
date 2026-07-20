"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { linksConfig } from "@/config/links";

export function Footer() {
	const socialLinks = linksConfig.filter((link) => !link.featured);

	return (
		<motion.footer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.8, duration: 0.5 }}
			className="mt-auto w-full flex flex-col items-center justify-center relative z-10 text-center px-4 pb-8"
		>
			<div className="w-full max-w-3xl border-t border-white/5 pt-8 flex flex-col items-center gap-2">
				<div className="flex flex-col items-center group cursor-pointer mb-2">
					<div className="relative transition-transform duration-300 group-hover:-translate-y-1 opacity-70 group-hover:opacity-100">
						<Image
							src="/assets/neko_zzz.svg"
							alt="Neko Durmiendo"
							width={100}
							height={100}
							className="w-25 h-25 object-contain"
						/>
					</div>
				</div>

				<div className="flex items-center gap-3 mb-6">
					{socialLinks.map((link) => {
						const Icon = link.icon;
						return (
							<a
								key={link.id}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 glass-card hover:glass-card-hover text-link hover:text-white"
								aria-label={link.title}
							>
								<Icon className="h-6 w-6" />
							</a>
						);
					})}
				</div>

				<p className="text-[13px] font-normal text-muted-foreground m-0 transition-colors group-hover:text-link">
					&copy; {new Date().getFullYear()} CinloDev. Casi todos los códigos
					reservados.
				</p>

				<p className="text-[11px] font-normal text-muted m-0">
					Hecho con café, código y magia.
				</p>
			</div>
		</motion.footer>
	);
}
