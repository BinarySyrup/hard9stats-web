# Project Guide

## Application

- This project is a React single-page app built with Vite.
- `index.html` loads the React entry point at `js/app.jsx`.
- Keep UI and interaction logic in React components; keep responsive presentation in `css/style.css`.
- Use the existing CSS variables, component classes, and mobile breakpoints when extending the interface.

## Brand

- Before changing UI, styling, copy, or visual assets, read `BRAND.md` and follow its guidance.

## Sports Data and Repositories

- Treat matchup values as fictional sample data unless a real data source is explicitly connected.
- Keep sample-data labeling clear; do not imply that sample odds or schedules are live.
- The overview shows NFL, NBA, MLB, and NHL repository cards. The MLB playoffs repository is `https://github.com/BinarySyrup/hard9stats-mlb-playoffs`.
- Do not invent repository URLs for the other leagues; keep them as placeholders until provided.

## Workflow

- Ask before searching the web.
- Do not start the app, run app code, build, or test unless the user explicitly asks.
- Do not commit changes unless the user explicitly asks.
- Update `README.md` when the documented stack, setup, or project structure changes.
