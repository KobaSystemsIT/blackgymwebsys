import baseUrl from "@/services/Login/auth.service";
const dbaccess = baseUrl + 'dbaccess/';

export const newUserOrStaff = (username: string, lastname: string, phone: string, email: string, nameEmergency: string, phoneEmergency: string, idUserType: number, idClub: number, fecha: string, token: any) => {
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

export const modifyOrDeleteUser = (idUser: number, username: string, lastName: string, phoneNumber:string, email: string, nameEmergencyContact: string, emergencyContact: string, valueOption: number, token: any) => {
    const body = {
        idUser: idUser,
        username: username,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        nameEmergencyContact: nameEmergencyContact,
        emergencyContact: emergencyContact,
        valueOption: valueOption,
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };

    return fetch(dbaccess + 'modifyOrDeleteUser', requestOptions)
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
};

export const crudUserSystem = (adminID: number, username: string, password: string, idUserType:number, typeAction:number, token: any) => {
    const body = {
        adminID: adminID, 
        username: username,
        password: password,
        idUserType: idUserType,
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

    return fetch(dbaccess + 'crudUserSystem', requestOptions)
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

export const crudUserVisitor = (id: number, username:string, idClub: number, phone:string, typeAction: number,  token: any) => {
    const body = {
        id: id,
        username: username,
        idClub: idClub,
        phone: phone,
        typeAction: typeAction,
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };

    return fetch(dbaccess + 'crudUserVisitor', requestOptions)
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
};