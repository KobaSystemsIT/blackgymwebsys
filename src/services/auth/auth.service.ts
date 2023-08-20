const baseUrl = 'http://accessdb.blackgymfitclub.com/api/';
const loginUrl = baseUrl + 'login';

export const initLogin = (username: string, password: string) => {
  const body = {
    username: username,
    password: password,
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return fetch(loginUrl, requestOptions)
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error));
};