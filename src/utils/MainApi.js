import { MAIN_API_BASE_URL, DEFAULT_HEADERS } from './constants';

function _setHeaders() {
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    return {
      Authorization: `Bearer ${jwt}`,
      ...DEFAULT_HEADERS,
    };
  } else {
    return DEFAULT_HEADERS;
  }
}

function _sendRequest(path, options) {
  return fetch(`${MAIN_API_BASE_URL}${path}`, options).then((response) => _handleResponse(response));
}

function _handleResponse(response) {
  const result = response.json();
  if (response.ok) {
    return result;
  }
  return result.then((res) => Promise.reject(res.message || res.error || 'Что-то пошло не так! Попробуйте еще раз.'));
}

export const tokenCheck = () => {
  return getUserInfo();
};

export const register = (name, email, password) => {
  return _sendRequest('/signup', {
    method: 'POST',
    headers: DEFAULT_HEADERS,
    body: JSON.stringify({ name, email, password }),
  });
};

export const login = (email, password) => {
  return _sendRequest('/signin', {
    method: 'POST',
    headers: DEFAULT_HEADERS,
    body: JSON.stringify({ email, password }),
  });
};

export const getUserInfo = () => {
  return _sendRequest('/users/me', {
    headers: _setHeaders(),
  });
};

export const patchUserInfo = (name, email) => {
  return _sendRequest('/users/me', {
    method: 'PATCH',
    headers: _setHeaders(),
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  });
};

export const getSavedMovies = () => {
  return _sendRequest('/movies', {
    headers: _setHeaders(),
  });
};

export const postMovie = (movie) => {
  return _sendRequest('/movies', {
    method: 'POST',
    headers: _setHeaders(),
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: 'https://api.nomoreparties.co' + movie.image.url,
      thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      movieId: movie.id,
    }),
  });
};

export const deleteMovie = (movieId) => {
    console.log(movieId);
  return _sendRequest(`/movies/${movieId}`, {
    method: 'DELETE',
    headers: _setHeaders(),
  });
};
