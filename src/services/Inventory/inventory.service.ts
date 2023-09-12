// Importa la URL base del servicio desde un módulo llamado 'auth.service'
import baseUrl from "@/services/Login/auth.service";


// Define una función asincrónica llamada 'viewInventoryData' que toma un ID de club y un token como parámetros
export const viewInventoryData = async (idClub: string, token: any) => {
    // Crea un objeto 'body' que contiene el ID del club
    const body = {
        idClub: idClub
    }

    // Configura las opciones para la solicitud HTTP, incluyendo el método, las cabeceras y el cuerpo en formato JSON
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };

    // Realiza una solicitud HTTP a la URL del servicio de base (que incluye la ruta 'dbaccess/getInventory') utilizando las opciones definidas anteriormente
    return fetch(baseUrl + 'dbaccess/getInventory', requestOptions)
        .then(async (res) => {
            // Comprueba si la respuesta no es exitosa
            if (!res.ok) {
                const errorResponse = await res.json(); // Parsea el cuerpo del mensaje de error como JSON
                throw new Error(errorResponse.message); // Lanza un error con el mensaje de error obtenido
            }
            return res.json(); // Devuelve los datos de respuesta como JSON
        })
        .then((data) => {
            // Comprueba si los datos contienen un error
            if (data.error) {
                throw new Error(data.message || 'Error desconocido'); // Lanza un error con el mensaje de error de los datos
            }
            return data; // Devuelve los datos si no hay errores
        })
        .catch((error) => {
            console.error('Error:', error); // Registra cualquier error en la consola
            throw error; // Lanza el error para que pueda ser manejado en otro lugar si es necesario
        });
};

// Define una función asincrónica llamada 'addOrUpdateInventory'
export const updateInventory = async (cantProductos, productID, idClub, fecha, token) => {
    // Crea un objeto 'body' que contiene el ID del club y los datos de inventario
    const body = {
        idClub: idClub,
        cantProductos: cantProductos,
        productID: productID,
        fecha: fecha
    }

    // Configura las opciones para la solicitud HTTP, incluyendo el método, las cabeceras y el cuerpo en formato JSON
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };

    // Realiza una solicitud HTTP a la URL del servicio de base (que incluye la ruta 'dbaccess/addOrUpdateInventory') utilizando las opciones definidas anteriormente
    return fetch(baseUrl + 'dbaccess/addOrUpdateInventory', requestOptions)
    .then(async (res) => {
        if (!res.ok) {
            const errorResponse = await res.json();
            // Comentario descriptivo: Manejo de errores de la respuesta HTTP
            throw new Error(errorResponse.message);
        }
        return res.json();
    })
    .then((data) => {
        if (data.error) {
            // Comentario descriptivo: Manejo de errores en los datos de respuesta
            throw new Error(data.message || 'Error desconocido');
        }
        return data;
    })
    .catch((error) => {
        // Comentario descriptivo: Manejo de errores generales
        console.error('Error:', error);
        throw error;
    });
};
