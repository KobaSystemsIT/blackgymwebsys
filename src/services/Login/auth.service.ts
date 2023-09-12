const baseUrl = 'https://accessdb.blackgymfitclub.com/api/';
//const baseUrl = 'http://localhost:3001/api/';
const loginUrl = baseUrl + 'login';
export let authToken = '';

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
    .then(async (res) => {
      if (!res.ok) {
        const errorResponse = await res.json(); // Parsea el cuerpo del mensaje como JSON
        throw new Error(errorResponse.message);
      }
      const authorizationHeader = res.headers.get('Authorization');
      if (authorizationHeader !== null) {
        authToken = authorizationHeader;
      }

      return res.json();
    })
    .catch((error) => {
      console.error('Error:', error);
      throw error;
    });
};

export const changePassword = (username:string, password:string) => {
  const body = {
    username:username,
    password:password
  };

  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return fetch(baseUrl + 'changePassword', requestOptions)
    .then(async (res) => {
      if (!res.ok) {
        const errorResponse = await res.json(); // Parsea el cuerpo del mensaje como JSON
        throw new Error(errorResponse.message);
      }
      return res.json();
    })
    .then((data) => {
      if (data.error) {
        throw new Error(data.message || 'Error desconocido');
      }
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
      throw error;
    }); 
}

export default baseUrl;

