import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/common/theme-provider";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
	metadataBase: new URL("https://go.cinlodev.com"),
	title: "CinloDev | Links, proyectos y contacto",
	description:
		"Accedé al portfolio, proyectos SaaS, herramientas y redes profesionales de CinloDev.",
	openGraph: {
		title: "CinloDev | Links, proyectos y contacto",
		description: "Portfolio, productos y herramientas creadas por CinloDev.",
		url: "https://go.cinlodev.com",
		siteName: "CinloDev",
		type: "website",
		images: [
			{
				url: "/assets/og-image.png",
				width: 1200,
				height: 630,
				alt: "CinloDev",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "CinloDev | Links, proyectos y contacto",
		description: "Portfolio, productos y herramientas creadas por CinloDev.",
		images: ["/assets/og-image.png"],
	},
	alternates: {
		canonical: "https://go.cinlodev.com",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${sora.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col selection:bg-primary/30">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Analytics />
					<SpeedInsights />
				</ThemeProvider>
			</body>
		</html>
	);
}
