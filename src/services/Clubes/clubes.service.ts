import baseUrl from "@/services/Login/auth.service";
const dbaccess = baseUrl + 'dbaccess/';
const clubesUrl = baseUrl + 'getClubes';

export const getClubes = () => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(clubesUrl, requestOptions)
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

export const crudClub = (idClub:number, nameClub: string, addressClub: string, dataIFrame:string, typeAction:number, token: any) => {
    const body = {
        idClub: idClub,
        nameClub: nameClub,
        addressClub: addressClub,
        dataIFrame: dataIFrame,
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

    return fetch(dbaccess + 'crudClub', requestOptions)
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
