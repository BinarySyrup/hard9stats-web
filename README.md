# hard9stats-web

Hard9Stats is an open-source sports stats site built as a React single-page app. Its MLB postseason tracker links to the 2026 Wild Card Series, Division Series, League Championship Series, and World Series PDF reports. NFL, NHL, and NBA sections are placeholders while those league stats are in development. The app does not display live scores or current game odds.

## Tech Stack

- UI: React 19.3 with React DOM and JSX
- Build/dev server: Vite 8.3 with the React plugin
- Styling: Plain responsive CSS
- Data: MLB postseason round tracker with four 2026 PDF reports available; no backend or live data feed
- Runtime: Node.js 24.13.0 and npm for development and builds

## Requirements

- Node.js 24.13.0
- npm

## Getting Started

Install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

`npm start` also starts the dev server and opens a browser.

## Environment Variables

Copy `.env.example` to `.env.local` and replace the example value with your Google Analytics 4 web stream measurement ID. Restart the Vite dev server after changing environment variables.

| Variable | Purpose | Required | Example |
| --- | --- | --- | --- |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 web stream measurement ID | No | `G-XXXXXXXXXX` |

Vite reads this variable when starting the dev server or building the app. Set it in the production build environment to enable analytics there. If it is unset, analytics is disabled. Variables prefixed with `VITE_` are included in client-side code, so do not use this prefix for secrets.

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

