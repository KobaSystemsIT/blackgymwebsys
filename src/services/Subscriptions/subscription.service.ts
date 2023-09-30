import baseUrl from "@/services/Login/auth.service";
const dbaccess = baseUrl + 'dbaccess/';

export const crudSubscription = (idSub: number, nameSubscription: string, daysSubscription: number, priceSubscription: number, typeAction:number, token: any) => {
    const body = {
        idSub: idSub,
        nameSubscription: nameSubscription,
        daysSubscription: daysSubscription,
        priceSubscription: priceSubscription,
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

    return fetch(dbaccess + 'crudSubscription', requestOptions)
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

export const newOrUpdateSubscription = (idUser: number, idSubscriptionType:number, price:number, idClub:number, startDate:string, endDate:string, idPaymentOption:number, comentarios:string, token: any) => {
    const body = {
        idUser: idUser,
        idSubscriptionType: idSubscriptionType,
        idClub: idClub,
        startDate: startDate,
        endDate: endDate,
        idPaymentOption: idPaymentOption, 
        price: price,
        comentarios: comentarios
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };

    return fetch(dbaccess + 'newOrUpdateSubscription', requestOptions)
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
