# Rabeea Anjum — Portfolio

A personal portfolio site for **Rabeea Anjum**, Computer Systems Engineering student at The Islamia University of Bahawalpur (IUB), covering embedded systems, AI/ML, and full-stack development.

## Pages

- **Home** — introduction, profile photo, contact links, and quick jumps to Projects / Experience / Honors
- **About** — a short professional summary alongside a portrait photo
- **Experience** — a timeline of internships (Machine Learning, IoT, Full Stack)
- **Skills** — categorized into Embedded & Hardware, Programming, AI / Machine Learning, and IoT & Networking, plus spoken languages
- **Projects** — 16+ projects spanning embedded systems, machine learning, deep learning, and full-stack apps, each tagged by category and linked to its GitHub repository where available
- **Honors & Awards** — academic distinctions and scholarships (PM Laptop Award, Honhaar Scholarship, Benevolent Fund Scholarship, Academic Excellence)
- **Education** — degree history, certifications (Cisco Networking Academy, DigiSkills.pk, PFTP Lahore), and extracurricular activities
- **CV** — a full, print-style resume view generated live from the same data as the rest of the site, with a one-click PDF download
- **Contact** — email and phone details, plus two ways for visitors to reach out: a message form (opens their email app) and a small AI chat assistant that answers visitor questions using the site's own content

## Design

The visual identity is built around an "engineering schematic" theme: a navy-and-copper color palette, circuit-trace dividers under section headings, and a profile photo framed like an IC chip with pin legs — a nod to the embedded-systems side of Rabeea's background. Each page has its own colorful gradient header (teal for Skills, gold for Honors, blue/purple for Projects, etc.) with bold, large section titles. Cards and page transitions use subtle 3D tilt and staggered entrance animations throughout.

## Editing content

Click **Edit** in the top navigation to:
- Add or remove projects, skills, experience entries, education, certifications, honors, and extracurricular items
- Rewrite the About text or hero tagline directly
- Rotate or replace the profile photo
- Attach a GitHub repository link to any project

Changes save automatically (you'll see a "Saved" confirmation) and are reflected immediately across the site — including the CV page and the chat assistant's knowledge, since everything reads from the same underlying data.

## Downloading the CV

The **Download CV** button (in the nav and on the CV page) generates an actual PDF file of the current CV content and downloads it directly — no separate resume file to keep in sync, since it's built from the same live data as the rest of the portfolio.

## Tech stack

- React + Vite
- Vanilla CSS (no framework), Google Fonts (Space Grotesk, IBM Plex Sans, IBM Plex Mono)
- `lucide-react` for icons
- `jspdf` + `html2canvas` for CV PDF export
- A small serverless function (`/api/chat`) powers the contact-page chat assistant

## Project structure

```
src/
  main.jsx        entry point
  Portfolio.jsx    the entire site (single component, all pages/sections)
api/
  chat.js          serverless function proxying chat assistant questions
index.html
package.json
```
