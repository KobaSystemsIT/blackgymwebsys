import React, { useState, useEffect } from "react";
import "./Inventario.css";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { viewInventoryData } from "@/services";
import { useParams } from "react-router-dom";
import { faPencilSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inventory } from "@/models/inventory/inventory";
import { ModalInventory } from "@/components/ModalInventory";

export type InventarioProps = {};

const Inventario: React.FC<InventarioProps> = () => {
    const tokenState = useSelector((store: AppStore) => store.token);
    const token = tokenState.token;

    const [inventory, setInventoryData] = useState<Inventory[]>([]);
    const params: any = useParams();

    const obtainInventoryData = async () => {
        try {
            const { inventory } = await viewInventoryData(params.idClub, token);
            console.log(inventory);
            setInventoryData(inventory); 
        } catch (error) {
            console.error(error);
        }
    };

    const updateInventoryData = async () => {
        try {
            console.log(inventory);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        obtainInventoryData();
        updateInventoryData(); 
    }, []);

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

export default Inventario;
