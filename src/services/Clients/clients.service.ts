import baseUrl from "@/services/Login/auth.service";
const dbaccess = baseUrl + 'dbaccess/';

export const viewDataClientsOrStaff = (idClub: string, typeAction:number, token: any) => {
  const body = {
    idClub: idClub,
    typeAction: typeAction
  }
  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return fetch(dbaccess + 'viewDataClientsOrStaff', requestOptions)
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

export const getDataUser = (idUser: number, token: any) => {
  const body = {
    idUser: idUser
  }
  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return fetch(dbaccess + 'getDataUser', requestOptions)
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



