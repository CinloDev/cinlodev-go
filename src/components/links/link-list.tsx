"use client";

import { linksConfig } from "@/config/links";
import { LinkCard } from "./link-card";

export function LinkList() {
	const featuredLinks = linksConfig.filter((link) => link.featured);

	return (
		<div className="w-full max-w-5xl px-4 pb-16 flex flex-col gap-4 sm:gap-6">
			<section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
				{featuredLinks.map((link, index) => (
					<LinkCard key={link.id} link={link} index={index} />
				))}
			</section>
		</div>
	);
}
