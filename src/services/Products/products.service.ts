import baseUrl from "@/services/Login/auth.service";
const dbaccess = baseUrl + 'dbaccess/';

export const crudProducts = (productID: Number, productName: String, productPrice: number, idCategory: Number, typeAction: Number, token: any) => {
    const body = {
        productID: productID,
        productName: productName,
        productPrice: productPrice,
        idCategory: idCategory,
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

    return fetch(dbaccess + 'crudProducts', requestOptions)
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