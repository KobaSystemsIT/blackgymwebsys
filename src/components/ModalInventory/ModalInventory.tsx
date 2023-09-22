import React, { useEffect, useState } from 'react';
import './ModalInventory.css';
import { useParams } from 'react-router-dom';
import { crudProducts } from '@/services/Products/products.service';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { Products } from '@/models/products/products';
import { crudInventory } from '@/services';
import { Alert } from '../AlertComponent/AlertComponent';

export type ModalInventoryProps = {
    inventoryID: number,
}

const ModalInventory: React.FC<ModalInventoryProps> = ({ inventoryID }) => {
    const tokenState = useSelector((store: AppStore) => store.token);
    const token = tokenState.token;
    const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
    const params: any = useParams();

    const [products, setProducts] = useState<Products[]>([])
    const [idProduct, setIdProduct] = useState(0);
    const [amountProduct, setAmountProduct] = useState(0);
    const openModal = () => {
        window.modalInventory.showModal();
    }

    const closeModal = () => {
        window.modalInventory.close();
    }

    const getProducts = async () => {
        try {
            const {data} = await crudProducts(1, '', 1, 1, 2, token);
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    const newProduct = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if(idProduct === 0 || amountProduct === 0){
            setShowEmptyFieldsAlert(true);
        } else {
            setShowEmptyFieldsAlert(false);
            try {
                const result = await crudInventory(1, amountProduct, idProduct, params.idClub, 1, token);
                if(result){
                    Alert(result.mensaje, true);
                    setTimeout(() => {
						closeModal();
                        window.location.reload()
					}, 3000)
                }
            } catch (error) {
                setTimeout(() => {
					Alert('Hubo un error al procesar la solicitud', false)
				}, 3000)
            }
        }
    }

    const handleProductChange = (event:any) => {
        const selectedProduct = parseInt(event.target.value, 10)

        if(selectedProduct) {
            setIdProduct(selectedProduct);
        }
    };

    const handleAmountChange = (event:any) => {
        const selectedProduct = parseInt(event.target.value, 10)

        if(selectedProduct) {
            setAmountProduct(selectedProduct);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);
    return <>
        <button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent' 
        onClick={openModal}
        >
            <h1>Agregar existencias</h1>
        </button>
        <dialog id="modalInventory" className="modal-box">
            <div>
                <h3 className="font-bold text-lg text-center m-4">Agregar Existencias al inventario</h3>
                <form className="grid grid-cols-2 text-black lg:text-sm text-xs gap-4">
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Producto:</span>
                        </label>
                        <select required									
									onChange={handleProductChange}
									className='input input-bordered w-full max-w-xs'
								>
									<option value=''>Seleccione un producto</option>
									{products.map((products) => (
										<option key={products.productID} value={products.productID}>
											{products.productName}
										</option>
									))}
								</select>
                    </div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Cantidad:</span>
                        </label>
                        <input type="number" id="currentStock" name="currentStock" onChange={handleAmountChange} min={0} defaultValue={0} required className='input input-bordered w-full max-w-xs' />
                    </div>
                    <input type="hidden" id="inventoryID" name="inventoryID" value={inventoryID} />
                    <input type="hidden" id="created_at" name="created_at" value={new Date().toISOString()} />
                    <button className=' btn-success btn-sm font-normal' onClick={newProduct}>Agregar</button>
                    <button type="button" className='btn btn-sm font-normal' onClick={closeModal}>
                        Cerrar
                    </button>
                </form>
                <br />
                {showEmptyFieldsAlert && (
					<div className="text-red-600">
						Por favor, complete todos los campos.
					</div>
				)}
            </div>
        </dialog>
    </>
};

export default ModalInventory;
