export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query?: string }) => {
  const endpoint =
    TMDB_CONFIG.BASE_URL +
    (query
      ? `/search/movie?query=${encodeURI(query)}`
      : `/discover/movie?page=1&sort_by=popularity.desc`);

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });
  if (!response.ok) {
    throw new Error("Unable to fetch movies");
  }

  const data = await response.json();
  return data.results ?? [];
};

export const fetchMovieDetails = async (movieId: string) => {
  const endpoint = `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?language=en-US`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error("Unable to fetch movie details");
  }

  const data = await response.json();
  return data ?? {};
};
