import { SHORT_FILM_DURATION } from "./constants";

export const handleResponse = (
  executor,
  fulfilledCallback,
  rejectedCallback = null,
  onShowPreloader = null,
  onHidePreloader = null
) => {
  onShowPreloader && onShowPreloader();
  executor
    .then((res) => fulfilledCallback(res))
    .catch((error) => (rejectedCallback ? rejectedCallback(error) : console.log(error)))
    .finally(() => onHidePreloader && onHidePreloader());
};

export const filterByKeyword = (movies, keyword) =>
  movies.filter((movie) => movie.nameRU.toLowerCase().includes(keyword.toLowerCase()));

export const filterByShort = (movies) => movies.filter((movie) => movie.duration <= SHORT_FILM_DURATION);

export const findInMovies = (movies, movieId) => movies.find((m) => m._id === movieId || m.movieId === movieId);
