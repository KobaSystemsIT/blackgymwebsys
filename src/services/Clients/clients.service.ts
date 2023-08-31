import { AppStore } from "@/redux/store";
import baseUrl from "@/services/Login/auth.service";
import { useSelector } from "react-redux";
import { json } from "stream/consumers";
const dbaccess = baseUrl + 'dbaccess/';

export const viewClientsData = (idClub: string, token: any) => {
  const body = {
    idClub: idClub
  }
  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return fetch(dbaccess + 'viewClientsData', requestOptions)
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

export const viewStaffData = (idClub: string, token: any) => {
  const body = {
    idClub: idClub
  }
  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return fetch(dbaccess + 'viewStaffData', requestOptions)
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