# React + Vite

# LinkedIn Post Creator — Frontend

A small React + Vite frontend that generates LinkedIn post copy tailored to a target audience and tone. The app sends generation requests to a backend API and displays a formatted post with convenient copy and regenerate controls.

**Key features**

- Generate LinkedIn post drafts by specifying tone, audience, topic, and length
- Regenerate or copy results to clipboard with a single click
- Built with React, Vite and Tailwind CSS for fast local development

Tech stack

- Runtime: Node.js
- Framework: React (via Vite)
- Styling: Tailwind CSS
- HTTP client: Axios

Repository layout (important files)

- `index.html` — Vite entry HTML
- `src/main.jsx` — React entry point
- `src/App.jsx` — Main UI and API integration
- `src/index.css` — Tailwind / global styles
- `package.json` — scripts and dependencies

Getting started
Prerequisites

- Node.js 18+ and npm (or yarn)
- A running backend that exposes the POST endpoint `/api/v1/generate` (see API note below)

Install

```bash
npm install
```

Run (development)

```bash
npm run dev
```

Open the app in your browser at the address shown by Vite (usually http://localhost:5173).

Build for production

```bash
npm run build
npm run preview
```

Usage

- Fill the form (Tone, Target Audience, Topic, Length) and click **Generate Post**.
- Use the regenerate button to request a new draft, or the copy button to copy the post to your clipboard.

API note

- The frontend currently posts generation requests to `http://127.0.0.1:8000/api/v1/generate` from `src/App.jsx`.
- If your backend runs at a different host/port/path, update the URL in `src/App.jsx` or configure a dev proxy in `vite.config.js`.

Common commands

```bash
# start dev server
npm run dev

# build for production
npm run build

# lint project
npm run lint
```

Troubleshooting

- If you see CORS or network errors when generating posts, ensure the backend is running and reachable from the browser. Either start the backend at `http://127.0.0.1:8000` or update the endpoint in `src/App.jsx`.
- If Tailwind utilities aren't applied, confirm `src/index.css` imports Tailwind directives and restart the dev server.
