const baseUrl = 'http://accessdb.blackgymfitclub.com/api/';
const loginUrl = baseUrl + 'login';

export const initLogin = (username: string, password: string, idClub: string) => {
  const body = {
    username: username,
    password: password,
    idClub: idClub
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return fetch(loginUrl, requestOptions)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error('Error:', error);
      throw error;
    });
};

export default baseUrl;
