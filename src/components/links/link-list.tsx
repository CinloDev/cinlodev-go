"use client";

import { linksConfig } from "@/config/links";
import { LinkCard } from "./link-card";

export function LinkList() {
  return (
    <section className="flex flex-col gap-3 w-full max-w-[420px] px-4 pb-12">
      {linksConfig.map((link, index) => (
        <LinkCard key={link.id} link={link} index={index} />
      ))}
    </section>
  );
}
