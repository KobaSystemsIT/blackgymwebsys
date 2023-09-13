import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { newClub } from '@/services/Clubes/clubes.service';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { AlertComponent } from '../AlertComponent';
import { format } from 'date-fns-tz';

export type ModalClubesProps = {
}

const ModalClubes: React.FC<ModalClubesProps> = () => {
    const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
    const params: any = useParams();

    const tokenState = useSelector((store: AppStore) => store.token);
    const token = tokenState.token;

    const [nameClub, setNameClub] = useState('');
    const [addressClub, setAddressClub] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState('');
    const [icon, setIcon] = useState(false);
    const [showLoading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const openModal = () => {
        window.modalClubes.showModal();
    }

    const closeModal = () => {
        setNameClub('');
        setAddressClub('');
        setShowAlert(false);
        setMessage('');
        window.modalClubes.close();
        setShowEmptyFieldsAlert(false);
    }

    const newClubes = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (!nameClub || !addressClub) {
            setShowEmptyFieldsAlert(true);
        } else {
            setShowEmptyFieldsAlert(false);
            const timeZone = 'America/Mexico_City';

            const currentDate = new Date();
            const fecha = (format(currentDate, 'yyyy-MM-dd HH:mm:ss', { timeZone }));

            try {
                setLoading(true);
                setIsLoading(true);
                const result = await newClub(nameClub, addressClub, token);
                if (result) {
                    setIsLoading(false);
                    setLoading(false);
                    setMessage(result.mensaje);
                    setShowAlert(true);
                    setIcon(true);
                    setTimeout(() => {
                        setShowAlert(false);
                        closeModal();
                    }, 3000)
                }
            } catch (error: any) {
                setMessage('Hubo un error al procesar la solicitud');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 3000)
            }
        }
    }

    return <>
        {showAlert && (
            <AlertComponent message={message} type={icon}></AlertComponent>
        )}
        <button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent' onClick={openModal}>
            <h1>{"Nuevo Club"}</h1>
        </button>

        <dialog id={"modalClubes"} className="modal-box z-10">
            <div>
                <h3 className="font-bold text-lg text-center m-4">Registro de Clubes</h3>
                <form className="grid grid-cols-2 text-black lg:text-sm text-xs gap-4">
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Nombre:</span>
                        </label>
                        <input value={nameClub} onChange={(e) => setNameClub(e.target.value)} type="text" id="nameClub" name="nameClub" required className='input input-bordered w-full max-w-xs' />
                    </div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Direccion:</span>
                        </label>
                        <input value={addressClub} onChange={(e) => setAddressClub(e.target.value)} type="text" id="addressClub" name="addressClub" required className='input input-bordered w-full max-w-xs' />
                    </div>
                    <button className='btn-success btn-sm font-normal' onClick={newClubes}>Registrar</button>
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
        {showLoading && (
			<div className="fixed inset-0 flex items-center justify-center z-50">
				<div className="">
					{isLoading ? (
						<div className="flex flex-col bg-white p-4 rounded-lg shadow-md items-center">
							<span className="loading loading-lg text-black"></span>
							<span>Por favor espere...</span>
						</div>
					) : (
						<p>Por favor espere...</p>
					)}
				</div>
			</div>
		)}
    </>
};

export default ModalClubes;