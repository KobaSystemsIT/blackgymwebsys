import React, { useState, useEffect } from "react";
import "./Inventario.css";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { crudInventory } from "@/services";
import { useParams } from "react-router-dom";
import { faPencilSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inventory } from "@/models/inventory/inventory";
import { ModalInventory } from "@/components/ModalInventory";
import Swal from "sweetalert2";
import { error } from "console";
import { Alert } from "@/components/AlertComponent/AlertComponent";

export type InventarioProps = {};

const Inventario: React.FC<InventarioProps> = () => {
    const tokenState = useSelector((store: AppStore) => store.token);
    const token = tokenState.token;

    const [inventory, setInventoryData] = useState<Inventory[]>([]);
    const params: any = useParams();

    const obtainInventoryData = async () => {
        try {
            const { data } = await crudInventory(1, 1, 1, params.idClub, 2, token);
            setInventoryData(data);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteProduct = async (id: number) => {
        const confirmation = await Swal.fire({
            title: '¿Desea eliminar el producto del inventario?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'Cancelar',
        });

        if (confirmation.isConfirmed) {
            try {
                const result = await crudInventory(id, 0, 0, params.idClub, 3, token);
                if (result) {
                    Alert(result.mensaje, true);
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000)
                }
            } catch (error) {
                Alert('Ocurrió un error al eliminar el producto del inventario', false);
                console.log(error)
            }
        }
    }

    useEffect(() => {
        obtainInventoryData();
    }, []);

    return (
        <div>
            <div className='flex h-16 px-2 justify-between items-center'>
                <h1 className='text-black lg:text-lg md:text-lg text-sm'>Inventario</h1>
                <ModalInventory inventoryID={1}></ModalInventory>
            </div>
            <div className='grid shadow-xl border-2 rounded-2xl'>
                <div className="max-h-48 overflow-auto m-2">
                    <table className="table table-zebra table-xs table-pin-rows table-pin-cols bg-white mt-5 text-center">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Producto</th>
                                <th>Stock</th>
                                <th>Última fecha de abastecimiento</th>
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
                                            <button title="Eliminar Producto" onClick={() => deleteProduct(data.inventoryID)}>
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
        </div>
    );
};

export default Inventario;
