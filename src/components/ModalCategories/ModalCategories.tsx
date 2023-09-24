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
    const tokenState = useSelector((store: AppStore) => store.token);
    const token = tokenState.token;
    const [nameCateg, setnameCateg] = useState('');
    const [isDisabled, setDisabled] = useState(false);

    const openModal = () => {
        window.modalCategories.showModal();
    }

    const closeModal = () => {
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
            try {
                setDisabled(true);
                const result = await crudCategoriesProducts(1, nameCateg, 1, token);
                if (result) {
                    Alert(result.mensaje, true);
                    setTimeout(() => {
                        setDisabled(false);
                        closeModal();
                        window.location.reload();
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
        <button className='btn lg:btn-sm btn-sm bg-black text-white rounded-lg hover:text-black hover:bg-transparent' onClick={openModal}>
            <h1 className='text-xs'>Nueva Categoría</h1>
        </button>

        <dialog id={"modalCategories"} className="modal-box z-10">
            <div>
                <h3 className="font-bold text-center m-4 text-base">Registro de Categorías para Productos</h3>
                <form className="grid grid-cols-1 text-black lg:text-sm text-xs gap-4">
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Nombre de la categoría:</span>
                        </label>
                        <input value={nameCateg} onChange={(e) => setnameCateg(e.target.value)} type="text" id="nameCateg" name="nameCateg" required className='input input-bordered w-full' />
                    </div>
                    <div>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        <button className='btn btn-success btn-sm font-normal' onClick={newCategories} disabled={isDisabled}>Registrar</button>
                        <button type="button" className='btn btn-warning btn-sm font-normal' onClick={closeModal}>
                            Cerrar
                        </button>
                    </div>
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