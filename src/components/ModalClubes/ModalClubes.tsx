import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { crudClub } from '@/services/Clubes/clubes.service';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { Alert } from '../AlertComponent/AlertComponent';

export type ModalClubesProps = {
}

const ModalClubes: React.FC<ModalClubesProps> = () => {
    const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);

    const tokenState = useSelector((store: AppStore) => store.token);
    const token = tokenState.token;

    const [nameClub, setNameClub] = useState('');
    const [addressClub, setAddressClub] = useState('');
    const [dataIFrame, setdataIFrame] = useState('');
    const [isDisabled, setDisabled] = useState(false);

    const openModal = () => {
        window.modalClubes.showModal();
    }

    const closeModal = () => {
        setNameClub('');
        setAddressClub('');
        window.modalClubes.close();
        setShowEmptyFieldsAlert(false);
    }

    const newClubes = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (!nameClub || !addressClub) {
            setShowEmptyFieldsAlert(true);
        } else {
            setShowEmptyFieldsAlert(false);
            try {
                setDisabled(true);
                const result = await crudClub(1, nameClub, addressClub, dataIFrame, 1, token);
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
            <h1 className='text-sm'>Nuevo Club</h1>
        </button>

        <dialog id={"modalClubes"} className="modal-box z-10">
            <div>
                <h3 className="font-bold text-center m-4 text-base">Registro de Clubes</h3>
                <form className="grid text-black lg:text-sm text-xs gap-4">
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Nombre del club:</span>
                        </label>
                        <input value={nameClub} onChange={(e) => setNameClub(e.target.value)} type="text" id="nameClub" name="nameClub" required className='input input-bordered w-full' />
                    </div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Direccion:</span>
                        </label>
                        <input value={addressClub} onChange={(e) => setAddressClub(e.target.value)} type="text" id="addressClub" name="addressClub" required className='input input-bordered w-full' />
                    </div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Data Iframe:</span>
                        </label>
                        <input value={dataIFrame} onChange={(e) => setdataIFrame(e.target.value)} type="text" id="dataIFrame" name="dataIFrame" required className='input input-bordered w-full' />
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        <button className='btn btn-success btn-sm font-normal' onClick={newClubes} disabled={isDisabled}>Registrar</button>
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

export default ModalClubes;