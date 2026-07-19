import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { profileConfig } from "@/config/profile";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: `${profileConfig.name} - ${profileConfig.role}`,
  description: profileConfig.description,
  openGraph: {
    title: profileConfig.name,
    description: profileConfig.description,
    url: "https://cinlodev.com/go",
    siteName: profileConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profileConfig.name,
    description: profileConfig.description,
  },
  alternates: {
    canonical: "https://cinlodev.com/go",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col selection:bg-primary/30">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
