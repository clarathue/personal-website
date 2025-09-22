# Thümecke Business Intelligence Solutions

Professional Business Intelligence Solutions with AI-Chatbots and System Integration.

**Live URL**: https://thuemecke.net/

## Project Overview

This is a modern, responsive website built with React and TypeScript, showcasing Clara Thümecke's Business Intelligence and AI solutions. The site features a clean, professional design with smooth animations and optimized performance.

## Website Structure & Main Sections

This website is structured into several key sections, each serving a specific purpose for visitors and SEO:

- **Hero**: The landing section with a strong headline, value proposition, and call-to-action to engage visitors immediately.
- **About**: Introduces Clara Thümecke, her background, expertise, and approach to business intelligence and AI solutions.
- **Services**: Overview of the main services offered, such as AI-Chatbots, System Integration, and Process Automation.
- **Use Cases**: Real-world examples and scenarios demonstrating how the solutions can be applied in different industries and business contexts.
- **Contact**: A visually distinct section inviting users to get in touch, linking to a dedicated contact page.
- **Footer**: Contains navigation links, legal information, and social/contact links for easy access from any page.

Each main page (e.g., AI-Chatbots, System Integration) follows a similar structure, with tailored content, benefits, and case studies relevant to the topic.

## What technologies are used for this project?

This project is built with:

- Vite (build tool and dev server)
- React (frontend framework)
- TypeScript (type safety)
- shadcn-ui (UI components)
- Tailwind CSS (utility-first CSS framework)
- Framer Motion (animations)
- Chart.js (data visualization)

## How is this project deployed?

- **Deployment:** Automated via GitHub Actions (`.github/workflows/deploy.yml`)
- **Build Output:** The `dist/` folder is published to GitHub Pages
- **Custom Domain:** Supported via a `CNAME` file (`thuemecke.net`)
- **Static Assets:** All files in `public/` (including `sitemap.xml`, `robots.txt`, `favicon.ico`) are copied to the root of the deployed site
- **SEO:** Meta-Tags, Open Graph, Twitter Cards, and structured data are included for all main pages
- **Sitemap & robots.txt:** Automatically available at the site root for search engines
- **SPA Routing:** Vite/React Router is used; for deep links, a `404.html` can be added if needed

## Repository Structure

### 📁 Source Code (`src/`)
```
src/
├── app/                           # Page-based routing structure
│   ├── home/page.tsx             # Main homepage with hero, about, services sections
│   ├── contact/page.tsx          # Contact form and business information
│   ├── ai-chatbots/page.tsx      # AI chatbot services and use cases
│   ├── system-integration/page.tsx # System integration solutions
│   ├── impressum/page.tsx        # Legal imprint page (German law requirement)
│   ├── datenschutz/page.tsx      # Privacy policy page (GDPR compliance)
│   └── not-found/page.tsx        # Custom 404 error page
├── components/                    # Reusable React components
│   ├── index.ts                  # Centralized component exports for clean imports
│   ├── ui/                       # shadcn/ui component library (14 essential components)
│   │   ├── button.tsx            # Button component with variants
│   │   ├── card.tsx              # Card layout components
│   │   ├── input.tsx             # Form input components
│   │   ├── textarea.tsx          # Multi-line text input
│   │   ├── tabs.tsx              # Tab navigation components
│   │   ├── title.tsx             # Typography component with responsive sizing
│   │   ├── toast.tsx             # Toast notification components
│   │   ├── tooltip.tsx           # Tooltip components for UI hints
│   │   └── [6 more essential UI components]
│   ├── About.tsx                 # About section component
│   ├── Contact.tsx               # Contact form component
│   ├── Footer.tsx                # Site footer with links and legal info
│   ├── Hero.tsx                  # Landing page hero section
│   ├── Layout.tsx                # Page layout wrapper with SEO
│   ├── Navbar.tsx                # Navigation header component
│   ├── Services.tsx              # Services overview component
│   ├── UseCases.tsx              # Use cases showcase component
│   └── CalendlyButton.tsx        # Calendly integration button
├── lib/
│   └── utils.ts                  # Utility functions (cn helper for Tailwind classes)
├── types/
│   └── index.ts                  # TypeScript type definitions for the application
├── App.tsx                       # Main app component with routing
├── main.tsx                      # React app entry point
└── index.css                     # Global styles and Tailwind CSS imports
```

