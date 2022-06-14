export const handleResponse = (executor, fulfilledCallback) => {
  executor.then((res) => fulfilledCallback(res)).catch((error) => console.log(error));
};

export const filterByKeyword = (movies, keyword) =>
  movies.filter((movie) => movie.nameRU.toLowerCase().includes(keyword.toLowerCase()));

export const filterByShort = (movies) => movies.filter((movie) => movie.duration <= 40);

export const findInMovies = (movies, movieId) => movies.find((m) => m._id === movieId || m.movieId === movieId); 
