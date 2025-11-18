# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 16.0.2 (App Router), React 19, TypeScript, and Tailwind CSS 4. The site showcases a software engineer's projects and experience, featuring a Swiss design aesthetic with bold typography, strong borders, and minimal radius.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (opens at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture & Design System

### Swiss Design Philosophy
The entire design system follows Swiss/International Typographic Style principles:
- **Sharp corners**: `--radius: 0rem` - no border radius throughout
- **Strong borders**: All borders are 4px thick (`border-4`) using pure black/white
- **Electric blue accent**: Primary color is `oklch(0.55 0.26 260)` - a vibrant electric blue
- **Bold typography**: Heavy use of `font-black` (900 weight) and `tracking-tight`
- **Pure black/white base**: `oklch(1 0 0)` for white, `oklch(0 0 0)` for black

### Custom Animations
- **Magnetic text effect**: Letters "lift up" on hover based on cursor proximity (see `MagneticText.tsx` and `AnimatedHeading` component in `app/page.tsx`)
- **Framer Motion**: Extensive use for scroll-triggered animations with `whileInView` and stagger effects
- **Swiss-style reveals**: Animated underlines and horizontal bars that expand on scroll
- **Performance optimizations**: `willChange: 'transform'` on animated elements, `viewport={{ once: true }}` to prevent re-triggering

### Component Structure
- `components/ui/`: Radix UI-based primitives (button, card, navigation-menu) styled with Tailwind
- `components/`: Custom components (Header, Footer, ThemeToggle, MagneticText)
- `app/`: Next.js App Router pages with route groups

### Path Aliases
TypeScript is configured with `@/*` alias pointing to the project root:
```typescript
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
```

## Key Patterns & Conventions

### Animation Pattern
When adding animations to sections, follow this pattern:
```tsx
<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
```

### Color Usage
- **Primary actions**: Use `bg-primary text-primary-foreground` (electric blue)
- **Borders**: Use `border-4 border-black dark:border-white` for Swiss aesthetic
- **Backgrounds**: Use `bg-white dark:bg-black` for main sections
- **Status badges**: Follow the pattern in `app/projects/page.tsx` with semantic colors (green for production, blue for in-progress)

### Typography Scale
- **Hero titles**: `text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter`
- **Section headings**: `text-4xl font-black tracking-tight`
- **Subsections**: `text-2xl font-black`
- **Body text**: `text-base` or `text-lg` with `leading-relaxed`

### Theming
- Uses `next-themes` with system preference detection
- All color tokens use CSS custom properties mapped through Tailwind
- Dark mode uses `.dark` class on `<html>` element with `suppressHydrationWarning`

## Project Data Structure

Project data lives in `app/projects/page.tsx` as a static array with this schema:
- `slug`: URL-safe identifier
- `title`, `organization`, `category`, `period`, `status`
- `description`: Placeholder text wrapped in `[...]`
- `tags`: Technology stack array
- `achievements`: Array of accomplishment strings

## Special Considerations

### Font Awesome
The project loads Font Awesome 6.5.1 from CDN in `app/layout.tsx`. Icons should reference FA classes directly.

### Image Handling
- Logo stored in `public/Logo.png`
- Favicon assets in `public/favicon/` with multiple sizes
- Use Next.js `<Image>` component for optimization

### Client Components
Components using Framer Motion, hooks, or browser APIs must have `"use client"` directive at the top.

### Placeholder Content
Content marked with `[... placeholder ...]` indicates areas waiting for final copy. Maintain this pattern when adding new sections.

## CSS Architecture

The project uses Tailwind CSS 4 with inline theme configuration in `globals.css` via `@theme inline`. All design tokens are defined as CSS custom properties that map to Tailwind utilities.

Custom utilities:
- `tw-animate-css` plugin for extended animations
- `tailwindcss-animate` for accordion and component animations

## Git Workflow

Branch naming: Feature branches use descriptive prefixes like `claude/fix-typo-*` based on git history.

## Common Tasks

**Adding a new project**: Add object to `projects` array in `app/projects/page.tsx`, then create corresponding detail page in `app/projects/[slug]/page.tsx`

**Creating new pages**: Follow App Router convention with `page.tsx` files in directory structure under `app/`

**Styling components**: Use Tailwind utilities following the Swiss design system. For hover effects on lists, use stagger animations with `index * 0.1` delay pattern

**Adding animations**: Import `motion` from `framer-motion`, wrap elements, and use the viewport-triggered pattern shown above
