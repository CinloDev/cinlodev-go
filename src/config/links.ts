import { Mail, PieChart, Settings, Terminal, Wrench } from "lucide-react";
import {
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
} from "@/components/common/icons";

export type LinkItem = {
	id: string;
	title: string;
	subtitle?: string;
	description: string;
	features?: string[];
	status?: string;
	actionText?: string;
	url: string;
	featured?: boolean;
	peekingNeko?: boolean;
	icon: React.ElementType;
};

export const linksConfig: LinkItem[] = [
	{
		id: "cinlolabs",
		title: "CinloLabs",
		subtitle: "Software SaaS para empresas",
		description:
			"Plataforma integral para laboratorios odontológicos y mecánicos. Controla tus órdenes, costos y facturación desde un solo lugar.",
		features: [
			"Gestión de órdenes",
			"Motor de costos",
			"Inventario y Facturación",
		],
		status: "Lanzado",
		actionText: "Explorar CinloLabs",
		url: "https://labs.cinlodev.com",
		featured: true,
		icon: Settings,
	},
	{
		id: "aldia",
		title: "AlDía",
		subtitle: "Gestión de finanzas personales",
		description:
			"Dashboard financiero, gastos compartidos, metas de ahorro y control de tarjetas para personas, parejas, familias y grupos.",
		features: [
			"Gastos compartidos en grupos",
			"Metas de ahorro con progreso",
			"Dashboard y proyección mensual",
		],
		status: "Lanzado",
		actionText: "Explorar AlDía",
		url: "https://aldia.cinlodev.com",
		featured: true,
		icon: PieChart,
	},
	{
		id: "nekotools",
		title: "NekoTools",
		subtitle: "Optimización para desarrollo web",
		description:
			"Herramientas para desarrolladores que optimizan imágenes, generan componentes React y automatizan tareas frontend.",
		features: [
			"Image Resizer",
			"WebP Converter",
			"Color Extractor",
			"SVG to React",
		],
		status: "En desarrollo continuo",
		actionText: "Probar NekoTools",
		url: "https://nekotools.cinlodev.com",
		featured: true,
		peekingNeko: true,
		icon: Wrench,
	},
	{
		id: "vault",
		title: "Vault",
		subtitle: "Workspace para desarrolladores",
		description:
			"Centralizá tu conocimiento técnico: comandos, snippets, prompts y herramientas inteligentes con IA.",
		features: [
			"Bóvedas privadas: Organizá comandos por proyecto.",
			"Herramientas con IA: Generá ramas y PRs.",
			"Kit de desarrollo: Git, Docker, Node.js siempre listos.",
		],
		status: "Estable / Lanzado",
		actionText: "Probar Vault",
		url: "https://vault.cinlodev.com",
		featured: true,
		icon: Terminal,
	},
	{
		id: "github",
		title: "GitHub",
		description: "Código, contribuciones y showcases.",
		url: "https://github.com/cinlodev",
		icon: GithubIcon,
	},
	{
		id: "linkedin",
		title: "LinkedIn",
		description: "Mi trayectoria y experiencia.",
		url: "https://linkedin.com/in/cinlodev",
		icon: LinkedinIcon,
	},
	{
		id: "instagram",
		title: "Instagram",
		description: "Día a día, código y Neko.",
		url: "https://instagram.com/cinlodev",
		icon: InstagramIcon,
	},
	{
		id: "contact",
		title: "Contacto",
		description: "Construyamos algo juntos.",
		url: "mailto:hello@cinlodev.com",
		icon: Mail,
	},
];
