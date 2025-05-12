# Welcome to my personal website

## Project info

**URL**: https://thuemecke.net/

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
