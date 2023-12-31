import baseUrl from "@/services/Login/auth.service";

const urlcrudProducts = baseUrl + 'dbaccess/crudProducts';
const urlPointOfSale = baseUrl + 'dbaccess/pointOfSale';
const urlCashRegister = baseUrl + 'dbaccess/openOrCloseCashRegister';

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

export const pointOfSale = async (cantProducts: number, totalVenta:number, productID: number, idClub: number, typeAction:number, idPaymentOption:number, token: any) => {
    const body = {
        cantProducts: cantProducts,
        totalVenta: totalVenta,
        productID: productID,
        idClub: idClub,
        typeAction: typeAction,
        idPaymentOption: idPaymentOption
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };

    return fetch(urlPointOfSale, requestOptions)
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

export const openOrCloseCashRegister = (idCaja:number, monto:number, idClub: number, adminID:number, typeAction: number,  token: any) => {
    const body = {
        idCaja: idCaja,
        monto: monto,
        idClub: idClub,
        adminID: adminID,
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

    return fetch(urlCashRegister, requestOptions)
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
