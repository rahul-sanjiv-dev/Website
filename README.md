# Rahul Sanjiv R — Portfolio (React + Vite + Tailwind)

Production-ready portfolio built with **React + Vite + Tailwind** (no external UI libraries).

## What's included
- React app in `src/` (components, assets)
- Tailwind config and PostCSS
- GitHub Actions workflow to build & deploy to GitHub Pages
- Placeholder images and data already filled with your projects and achievements

## Local setup (Windows)
1. Extract the ZIP to: `R:\Website Rahul Sanjiv R`
2. Open Command Prompt and run:
   ```bat
   cd /d "R:\Website Rahul Sanjiv R"
   npm install
   npm run dev
   ```
3. Visit the dev server (usually `http://localhost:5173`)

## Deploy to GitHub Pages
1. Create a new GitHub repo (e.g., `rahul-portfolio`).
2. In Command Prompt:
   ```bat
   cd /d "R:\Website Rahul Sanjiv R"
   git init
   git add .
   git commit -m "Initial commit: React portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. On GitHub → Settings → Pages → Build and deployment: choose **GitHub Actions** as the source.
4. The included workflow will build and deploy automatically. The site will be at:
   `https://<your-username>.github.io/<your-repo>/`

## Editing content
- Edit `src/data.js` to change bio, projects, achievements, skills, and blog posts.
- Component files are in `src/components/` for layout and style tweaks.

## Notes
- Footer intentionally does NOT include your name (per request).
- Resume button is present and shows a placeholder alert; add a PDF later at `public/resume.pdf` and link it in `Contact.jsx`.

---
Made for Rahul. Good luck!