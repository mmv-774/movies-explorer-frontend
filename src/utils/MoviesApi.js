import { MOVIES_API_BASE_URL, DEFAULT_HEADERS } from './constants';

function _sendRequest(path, options) {
  return fetch(`${MOVIES_API_BASE_URL}${path}`, options).then((response) => _handleResponse(response));
}

function _handleResponse(response) {
  const result = response.json();
  if (response.ok) {
    return result;
  }
  return result.then((res) => Promise.reject(res.message || res.error || 'Что-то пошло не так! Попробуйте еще раз.'));
}

export const getMovies = () => {
  return _sendRequest('/beatfilm-movies', {
    headers: DEFAULT_HEADERS,
  });
};
