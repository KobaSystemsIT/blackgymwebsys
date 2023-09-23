import baseUrl from "@/services/Login/auth.service";

const urlcrudProducts = baseUrl + 'dbaccess/crudProducts';


export const crudProducts = async (productID: number, productName:string, productPrice: number, idCategory: number, typeAction: number, token: any) => {
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

    return fetch(urlcrudProducts, requestOptions)
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
