import baseUrl from "@/services/Login/auth.service";

export const crudInventory = async (inventoryID: number, currentStock:number, productID: number, idClub: number, typeAction: number, token: any) => {
    const body = {
        inventoryID: inventoryID,
        currentStock: currentStock,
        productID: productID,
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

    return fetch(baseUrl + 'dbaccess/crudInventory', requestOptions)
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