# hard9stats-web

Hard 9 Stats

Live site: `https://www.hard9stats.com`

## Prerequisites

- Node.js 18+ (recommended)
- npm (comes with Node.js)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

   This runs `webpack-dev-server` and opens the site in your browser.

## Build for Production

Create an optimized production build:

```bash
npm run build
```

Build output is generated in the `dist/` directory.

## Available Scripts

- `npm start` � run local dev server with hot reload
- `npm run build` � create production bundle in `dist/`
- `npm test` � placeholder script (currently not configured)

## Project Structure

- `index.html` � main HTML entry file
- `js/` � JavaScript source files
- `css/` � stylesheet files
- `img/` � images and static visual assets
- `webpack.common.js` � shared webpack config
- `webpack.config.dev.js` � development webpack config
- `webpack.config.prod.js` � production webpack config

## Notes

- `node_modules/`, `dist/`, and local IDE files are ignored via `.gitignore`.
- Keep `package-lock.json` committed for reproducible installs.

## License

This project is licensed under the Apache License 2.0. See `LICENSE.txt` for full terms.
