import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { crudCategoriesProducts } from '@/services/Categories/categories.service';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { format } from 'date-fns-tz';
import { Loading } from '../LoadingComponent/LoadingComponent';
import { Alert } from '../AlertComponent/AlertComponent';

export type ModalCategoriesProps = {
}

const ModalCategories: React.FC<ModalCategoriesProps> = () => {
    const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
    const params: any = useParams();

    const tokenState = useSelector((store: AppStore) => store.token);
    const token = tokenState.token;

    const [categoryId, setcategoryId] = useState('');
    const [nameCateg, setnameCateg] = useState('');

    const openModal = () => {
        window.modalCategories.showModal();
    }

    const closeModal = () => {
        setcategoryId('');
        setnameCateg('');
        window.modalCategories.close();
        setShowEmptyFieldsAlert(false);
    }

    const newCategories = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (!nameCateg) {
            setShowEmptyFieldsAlert(true);
        } else {
            setShowEmptyFieldsAlert(false);
            const timeZone = 'America/Mexico_City';

            const currentDate = new Date();
            //const fecha = (format(currentDate, 'yyyy-MM-dd HH:mm:ss', { timeZone }));
            Loading();
            try {
                const result = await crudCategoriesProducts(1, nameCateg, 1, token);
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
            <h1>{"Nuevo Category"}</h1>
        </button>

        <dialog id={"modalCategories"} className="modal-box z-10">
            <div>
                <h3 className="font-bold text-center m-4 text-base">Registro de Categories</h3>
                <form className="grid grid-cols-2 text-black lg:text-sm text-xs gap-4">
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Nombre del Category:</span>
                        </label>
                        <input value={nameCateg} onChange={(e) => setnameCateg(e.target.value)} type="text" id="nameCateg" name="nameCateg" required className='input input-bordered w-full max-w-xs' />
                    </div>
                    <div>
                    </div>
                    <button className='btn-success btn-sm font-normal' onClick={newCategories}>Registrar</button>
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

export default ModalCategories;