"use client";

import { linksConfig } from "@/config/links";
import { LinkCard } from "./link-card";

export function LinkList() {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-5xl px-4 pb-16">
			{linksConfig.map((link, index) => (
				<LinkCard key={link.id} link={link} index={index} />
			))}
		</section>
	);
}
