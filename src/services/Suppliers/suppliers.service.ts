import baseUrl from "@/services/Login/auth.service";
const dbaccess = baseUrl + 'dbaccess/';

export const crudSuppliers = (idSupplier: number, nameSupplier: string, typeAction: number, token: any) => {
    const body = {
        idSupplier: idSupplier,
        nameSupplier: nameSupplier,
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

    return fetch(dbaccess + 'crudSuppliers', requestOptions)
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