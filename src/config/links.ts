import { Code, Settings, PieChart, Wrench, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/icons";

export type LinkItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: React.ElementType;
};

export const linksConfig: LinkItem[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    description: "See my projects and experience.",
    url: "https://cinlodev.com",
    icon: Code,
  },
  {
    id: "cinlolabs",
    title: "CinloLabs",
    description: "Dental Laboratory SaaS.",
    url: "https://cinlolabs.com",
    icon: Settings,
  },
  {
    id: "aldia",
    title: "AlDía",
    description: "Shared Expenses Manager.",
    url: "https://aldia.app",
    icon: PieChart,
  },
  {
    id: "nekotools",
    title: "NekoTools",
    description: "Free tools for developers and designers.",
    url: "https://nekotools.com",
    icon: Wrench,
  },
  {
    id: "github",
    title: "GitHub",
    description: "Open Source Projects.",
    url: "https://github.com/cinlodev",
    icon: GithubIcon,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Professional Experience.",
    url: "https://linkedin.com/in/cinlodev",
    icon: LinkedinIcon,
  },
  {
    id: "contact",
    title: "Contact",
    description: "Let's build something together.",
    url: "mailto:hello@cinlodev.com",
    icon: Mail,
  },
];
