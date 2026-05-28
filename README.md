# Movie App

A React + Vite movie browsing app powered by the [TMDB API](https://developer.themoviedb.org/). Browse popular movies, search by title, and save favorites that persist across sessions via `localStorage`.

## Features

- Browse popular movies from TMDB
- Search movies by title
- Add/remove favorites with one click
- Favorites persist in `localStorage`
- Client-side routing between Home and Favorites pages

## Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/) — build tool & dev server
- [React Router 7](https://reactrouter.com/) — routing
- React Context API — favorites state management
- [Axios](https://axios-http.com/) — HTTP client
- [TMDB API](https://developer.themoviedb.org/) — movie data
- ESLint — linting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) (or npm / yarn)
- A [TMDB API key](https://developer.themoviedb.org/docs/getting-started) (free)

### Installation

```bash
git clone https://github.com/<your-username>/movie-app.git
cd movie-app
pnpm install
```

### Environment variables

Copy `.env.example` to `.env` and fill in your TMDB API key:

```bash
cp .env.example .env
```

```
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

### Running locally

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`.

### Other scripts

```bash
pnpm build     # production build
pnpm preview   # preview the production build
pnpm lint      # run ESLint
```

## Project Structure

```
movie-app/
├── public/              # static assets
├── src/
│   ├── components/      # reusable UI (NavBar, MovieCard)
│   ├── contexts/        # React Context (MovieContext for favorites)
│   ├── css/             # component & page styles
│   ├── pages/           # route-level components (Home, Favorites)
│   ├── services/        # TMDB API client
│   ├── App.jsx          # app shell & routes
│   └── main.jsx         # entry point
├── index.html
├── package.json
└── vite.config.js
```

## License

MIT
