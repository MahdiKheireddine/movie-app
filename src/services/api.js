import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

if (!API_KEY) {
  throw new Error(
    "Missing VITE_TMDB_API_KEY. Copy .env.example to .env and set your TMDB API key."
  );
}

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: API_KEY },
});

export const getPopularMovies = async () => {
  const { data } = await tmdb.get("/movie/popular");
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await tmdb.get("/search/movie", { params: { query } });
  return data.results;
};