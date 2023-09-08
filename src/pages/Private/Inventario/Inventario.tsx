// Español:
// Importo las dependencias necesarias.
// Import the necessary dependencies.
import React, { useState, useEffect } from "react";
import "./Inventario.css";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { viewInventoryData, updateInventory } from "@/services";
import { useParams } from "react-router-dom";
import { faPencilSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inventory } from "@/models/inventory/inventory";
import { ModalInventory } from "@/components/ModalInventory";

// Defino el tipo de props para el componente Inventario.
// Define the props type for the Inventario component.
export type InventarioProps = {};

// Ver en console log el estado del usuario.
// See in console log the user state.
// Defino el componente Inventario.
// Define the Inventario component.
const Inventario: React.FC<InventarioProps> = () => {
    // Obtengo el estado del usuario desde Redux.
    // Get the user state from Redux.
    const userState = useSelector((store: AppStore) => store.user);
    const token = userState.token;

    // Defino el estado para los datos del inventario.
    // Define state for inventory data.
    const [inventory, setInventoryData] = useState<Inventory[]>([]);
    const params: any = useParams(); // Obtengo los parámetros de la URL.
    // Defino data para el modal.
    // Define data for the modal.


    // Función para obtener los datos del inventario.
    // Function to obtain inventory data.
    const obtainInventoryData = async () => {
        try {
            // Realizo la llamada a la API para obtener los datos del inventario.
            // Make the API call to get inventory data.
            const { inventory } = await viewInventoryData(params.idClub, token);
            console.log(inventory); // Registro los datos del inventario en la consola.
            setInventoryData(inventory); // Actualizo el estado con los datos del inventario.
        } catch (error) {
            console.error(error); // Manejo de errores en caso de problemas con la llamada a la API.
        }
    };

    const updateInventoryData = async () => {
        const cantProductos = data.currentStock;
        const productID = data.inventoryID;
        const idClub = params.idClub;
        const fecha = dateReorder;
        try {
            const data = await updateInventory(cantProductos, productID, idClub, fecha, token);
            console.log(inventory);
        } catch (error) {
            console.error(error);
        }
    };

    
    // Efecto para cargar los datos del inventario cuando se monta el componente.
    // Effect to load inventory data when the component mounts.
    useEffect(() => {
        obtainInventoryData();
        updateInventoryData(); // Llama a la función para actualizar los datos del inventario.
    }, []);

    // Renderizo la interfaz de usuario.
    // Render the user interface.
    return (
        <div>
            <div className="grid p-2 gap-8 items-center">
                <div className=" overflow-hidden">
                    <div className=" flex p-2 bg-gray-200 rounded-lg justify-between items-center">
                        <h1 className="text-black text-sm">Inventario</h1>
                        <ModalInventory inventoryID={1}></ModalInventory>
                    </div>
                </div>
            </div>
            <div className="max-h-48 overflow-auto m-2">
                {/* Tabla para mostrar los datos del inventario */}
                {/* Table to display inventory data */}
                <table className="table table-zebra table-xs table-pin-rows table-pin-cols bg-white mt-5 text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Stock</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map((data) => (
                            <tr key={data.inventoryID}>
                                <td>{data.inventoryID}</td>
                                <td>{data.productName}</td>
                                <td>{data.currentStock}</td>
                                <td>
                                    {data.dateReorder
                                        ? data.dateReorder.toString().split("T")[0]
                                        : "N/A"}
                                </td>
                                <td>
                                    {/* Botones de acciones con íconos de FontAwesome */}
                                    {/* Action buttons with FontAwesome icons */}
                                    <div className="grid grid-flow-col gap-2">
                                        <button title="Editar Producto">
                                            <FontAwesomeIcon icon={faPencilSquare} className="h-4" />
                                        </button>
                                        <button title="Eliminar Producto">
                                            <FontAwesomeIcon icon={faXmark} className="h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Exporto el componente Inventario.
// Export the Inventario component.
export default Inventario; // Exporta el componente Inventario
