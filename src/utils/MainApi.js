const BASE_URL = 'https://api.mm.nomoredomains.xyz';

function _sendRequest(path, options) {
  return fetch(`${BASE_URL}${path}`, options).then((response) => _handleResponse(response));
}

function _handleResponse(response) {
  const result = response.json();
  if (response.ok) {
    return result;
  }
  return result.then((res) => Promise.reject(res.message || res.error || 'Что-то пошло не так! Попробуйте еще раз.'));
}

export const register = (name, email, password) => {
  return _sendRequest('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
};
