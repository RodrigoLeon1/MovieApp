const TMDB = process.env.REACT_APP_TMDB_URL;
const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;

export const fetchUpcomingMovies = async (page = 1) => {
  const response = await fetch(
    `${TMDB}/movie/upcoming?api_key=${TMDB_KEY}&language=en-US&page=${page}`
  );
  const data = await response.json();
  return data;
};

export const fetchTopMovies = async (page = 1) => {
  const response = await fetch(
    `${TMDB}/movie/top_rated?api_key=${TMDB_KEY}&language=en-US&page=${page}`
  );
  const data = await response.json();
  return data;
};

export const fetchMovieById = async (id) => {
  const response = await fetch(
    `${TMDB}/movie/${id}?api_key=${TMDB_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
};

export const fetchMovieVideosById = async (id) => {
  const response = await fetch(
    `${TMDB}/movie/${id}/videos?api_key=${TMDB_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
};

export const fetchMovieByQuery = async (query) => {
  const response = await fetch(
    `${TMDB}/search/movie?api_key=${TMDB_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  const data = await response.json();
  return data;
};
