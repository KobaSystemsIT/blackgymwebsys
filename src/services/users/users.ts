import baseUrl from "@/services/Login/auth.service";
const dbaccess = 'http://localhost:3001/api/' + 'dbaccess/';

export const newUserOrStaff = (username: string, lastname: string, phone: string, email: string, nameEmergency: string, phoneEmergency: string, idUserType: string, idClub: string, fecha: string, token: any) => {
    const body = {
        username: username,
        lastname: lastname,
        phone: phone,
        email: email,
        nameEmergency: nameEmergency,
        phoneEmergency: phoneEmergency,
        idUserType: idUserType,
        idClub: idClub,
        fecha: fecha
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };

    return fetch(dbaccess + 'newUserOrStaff', requestOptions)
        .then(async (res) => {
            if (!res.ok) {
                const errorResponse = await res.json();
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