import axios from 'axios';
import baseUrl from "@/services/Login/auth.service";

const getInvetoryUrl = baseUrl + 'dbaccess/getInventory';

// Función para obtener el inventario

export const viewInventoryData = async (idClub:string, token:any) => {
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

    return fetch(getInvetoryUrl, requestOptions)
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
