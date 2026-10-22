# Bloom — Gamified HR Engagement Demo

A small React app built with plain JavaScript and Vite. All data is sample data and resets when you refresh (only your light/dark choice is remembered).

## Run it

```
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173).

## How the code is organised

- `src/main.jsx` – starts React.
- `src/App.jsx` – holds all the state (`useState`) and decides which page to show.
- `src/data.js` – the sample data (people, challenges, rewards, ...).
- `src/components/` – small reusable pieces (Sidebar, Panel, StatCard, ProgressBar).
- `src/pages/` – one file per page.
- `src/App.css` – all the styles. Dark mode works by changing the CSS variables at the top.
