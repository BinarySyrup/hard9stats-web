# hard9stats-web

Hard 9 Stats is a React single-page dashboard for exploring sports-market statistics. The current matchup and chart values are fictional examples, not live odds.

## Tech Stack

- UI: React 19.3 with React DOM and JSX
- Build/dev server: Vite 8.3 with the React plugin
- Styling: Plain responsive CSS
- Data: Fictional sample matchups; no backend or live odds source yet
- Runtime: Node.js and npm for development and builds

## Requirements

- Node.js 18 or newer
- npm

## Getting Started

Install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

`npm start` also starts the dev server and opens a browser.

## Build

```bash
npm run build
npm run preview
```

Vite writes the production build to `dist/`.

## Project Structure

- `index.html` — Vite entry point
- `js/app.jsx` — React application and components
- `css/style.css` — responsive styles
- `public/` — static assets copied to production builds
- `vite.config.js` — Vite configuration

## License

Apache License 2.0. See `LICENSE.txt` for details.
