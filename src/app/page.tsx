import { Hero } from "@/components/hero/hero";
import { LinkList } from "@/components/links/link-list";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-start min-h-screen relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 -translate-y-12 h-64 w-full bg-primary/5 blur-3xl rounded-full max-w-3xl pointer-events-none" />
      
      <Hero />
      <LinkList />
      <Footer />
    </main>
  );
}
