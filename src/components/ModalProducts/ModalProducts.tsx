import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { crudProducts } from '@/services/Products/products.service';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { format } from 'date-fns-tz';
import { Loading } from '../LoadingComponent/LoadingComponent';
import { Alert } from '../AlertComponent/AlertComponent';

export type ModalProductsProps = {
}

const ModalProducts: React.FC<ModalProductsProps> = () => {
    const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
    const params: any = useParams();

    const tokenState = useSelector((store: AppStore) => store.token);
    const token = tokenState.token;

    const [productName, setproductName] = useState('');
    const [productPrice, setproductPrice] = useState('');
    const [idCategory, setidCategory] = useState('');

    const openModal = () => {
        window.modalCategories.showModal();
    }

    const closeModal = () => {
        setproductName('');
        setproductName('');
        window.modalProducts.close();
        setShowEmptyFieldsAlert(false);
    }

    const newProducts = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (!productName || !productPrice) {
            setShowEmptyFieldsAlert(true);
        } else {
            setShowEmptyFieldsAlert(false);
            const timeZone = 'America/Mexico_City';

            const currentDate = new Date();
            //const fecha = (format(currentDate, 'yyyy-MM-dd HH:mm:ss', { timeZone }));
            Loading();
            try {
                const result = await crudProducts(1, productName, Number(productPrice), Number(idCategory), 1, token);
                if (result) {
                    Alert(result.mensaje, true);
                    setTimeout(() => {
                        closeModal();
                    }, 3000)
                }
            } catch (error: any) {
                Alert(error.message, false);
                setTimeout(() => {

                }, 3000)
            }
        }
    }

    return <>
        <button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent' onClick={openModal}>
            <h1>{"Nuevo Product"}</h1>
        </button>

        <dialog id={"modalCategories"} className="modal-box z-10">
            <div>
                <h3 className="font-bold text-center m-4 text-base">Registro de Products</h3>
                <form className="grid grid-cols-2 text-black lg:text-sm text-xs gap-4">
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Nombre del Products:</span>
                        </label>
                        <input value={productName} onChange={(e) => setproductName(e.target.value)} type="text" id="productName" name="productName" required className='input input-bordered w-full max-w-xs' />
                    </div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Precio del Products:</span>
                        </label>
                        <input value={productPrice} onChange={(e) => setproductPrice(e.target.value)} type="text" id="productPrice" name="productPrice" required className='input input-bordered w-full max-w-xs' />
                    </div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>ID Category:</span>
                        </label>
                        <input value={idCategory} onChange={(e) => setidCategory(e.target.value)} type="text" id="idCategory" name="idCategory" required className='input input-bordered w-full max-w-xs' />
                    </div>
                    <div>
                    </div>
                    <button className='btn-success btn-sm font-normal' onClick={newProducts}>Registrar</button>
                    <button type="button" className='btn btn-warning btn-sm font-normal' onClick={closeModal}>
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
        </dialog >
    </>
};

export default ModalProducts;