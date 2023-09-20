import React from 'react';
import './ModalInventory.css';
import { useParams } from 'react-router-dom';

export type ModalInventoryProps = {
    inventoryID: number,
}

const ModalInventory: React.FC<ModalInventoryProps> = ({ inventoryID }) => {
    const params: any = useParams();
    // const openModal = () => {
    //     window.modalInventory.showModal();
    // }

    // const closeModal = () => {
    //     window.modalInventory.close();
    // }
    return <>
        <button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent' 
        // onClick={openModal}
        >
            <h1>Nuevo Producto</h1>
        </button>
        <dialog id="modalInventory" className="modal-box">
            <div>
                <h3 className="font-bold text-lg text-center m-4">Agregar Producto</h3>
                <form className="grid grid-cols-2 text-black lg:text-sm text-xs gap-4">
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Producto:</span>
                        </label>
                        <input type="text" id="productName" name="productName" required className='input input-bordered w-full max-w-xs' />
                    </div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Cantidad:</span>
                        </label>
                        <input type="number" id="currentStock" name="currentStock" min={0} defaultValue={0} required className='input input-bordered w-full max-w-xs' />
                    </div>
                    <input type="hidden" id="inventoryID" name="inventoryID" value={inventoryID} />
                    <input type="hidden" id="created_at" name="created_at" value={new Date().toISOString()} />
                    <button className=' btn-success btn-sm font-normal'>Agregar</button>
                    {/* <button type="button" className='btn btn-sm font-normal' onClick={closeModal}>
                        Cerrar
                    </button> */}
                </form>
            </div>
        </dialog>
    </>
};

export default ModalInventory;
