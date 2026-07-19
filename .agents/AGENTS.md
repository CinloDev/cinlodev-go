# Reglas del Proyecto: CinloDev GO

## Stack y Herramientas
- **Gestor de paquetes**: Siempre debes usar `pnpm`. NUNCA usar `npm` o `yarn`.
- **Framework**: Next.js (App Router) + React 19.
- **Estilos**: Tailwind CSS v4. No usar CSS Modules, Styled Components ni Emotion.
- **Componentes**: shadcn/ui.
- **Linter/Formatter**: Exclusivamente Biome. NO usar ESLint ni Prettier.

## Principios de Diseño y Arquitectura
- **Experiencia de usuario**: Debe sentirse como un SaaS premium (minimalista, elegante, espacioso).
- **Animaciones**: Usar Framer Motion. Deben ser sutiles (fade in, slide up, hover scale) y respetar `prefers-reduced-motion`.
- **Accesibilidad y Rendimiento**: Objetivo de Lighthouse 100/100. Soporte completo de teclado, alto contraste y `aria-labels`.
- **Código**: Tipado estricto en TypeScript. No código muerto, no TODOs, no 'any'. Mantener componentes pequeños y reutilizables.
- **Mascota (Neko)**: Integrar a Neko de manera elegante, sin distraer del contenido principal.
