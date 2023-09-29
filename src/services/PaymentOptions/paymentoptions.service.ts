import baseUrl from "@/services/Login/auth.service";
const payment = baseUrl + 'dbaccess/getPaymentOptions';

export const getPaymentData = (token:string) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
          },
    };

    return fetch(payment, requestOptions)
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