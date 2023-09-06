import baseUrl from "@/services/Login/auth.service";

const dbaccess = baseUrl + 'dbaccess/';

export const viewInventoryData = async (idClub: string, token: any) => {
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

    return fetch(dbaccess + 'getInventory', requestOptions)
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
}
