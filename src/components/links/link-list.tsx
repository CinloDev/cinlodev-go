"use client";

import { linksConfig } from "@/config/links";
import { LinkCard } from "./link-card";

export function LinkList() {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl px-4 pb-16">
			{linksConfig.map((link, index) => (
				<LinkCard key={link.id} link={link} index={index} />
			))}
		</section>
	);
}
