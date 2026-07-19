"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export function Footer() {
	return (
		<motion.footer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.8, duration: 0.5 }}
			className="mt-auto w-full flex flex-col items-center justify-center relative z-10 text-center px-4 pb-8"
		>
			<div className="w-full max-w-3xl border-t border-white/5 pt-8 flex flex-col items-center gap-2">
				<div className="flex flex-col items-center group cursor-pointer">
					<div className="relative mb-3 transition-transform duration-300 group-hover:-translate-y-1 opacity-70 group-hover:opacity-100">
						<Image
							src="/assets/neko_zzz.svg"
							alt="Neko Durmiendo"
							width={100}
							height={100}
							className="w-25 h-25 object-contain"
						/>
					</div>
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
