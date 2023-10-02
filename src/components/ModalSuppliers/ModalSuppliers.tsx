import { AppStore } from '@/redux/store';
import { crudSuppliers } from '@/services/Suppliers/suppliers.service';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Alert } from '../AlertComponent/AlertComponent';
import './ModalSuppliers.css';

export type ModalSuppliersProps = {
}

const ModalSuppliers: React.FC<ModalSuppliersProps> = ({ }) => {

	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
	const params: any = useParams();
	const [proveedor, setProveedor] = useState('');
	const [isDisabled, setDisabled] = useState(false);

	const openModal = () => {
		window.modalSuppliers.showModal();
	}

	const closeModal = () => {
		window.modalSuppliers.close();
	}
	
	const newSupplier = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

        if (!proveedor) {
            setShowEmptyFieldsAlert(true);
        } else {
			setShowEmptyFieldsAlert(false);
			try {
				setDisabled(true);
				const result = await crudSuppliers(0, proveedor, 1, token);
				if(result) {
					Alert(result.mensaje, true);
					setTimeout(() => {
						closeModal();
						window.location.reload();
					}, 2500);
				}
			} catch (error:any) {
				console.log(error);
				Alert(error, false);
			}
		}
	}
	return <>
		<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent'
			onClick={openModal}
		>
			<h1>Nuevo proveedor</h1>
		</button>
		<dialog id="modalSuppliers" className="modal-box">
			<div>
				<h3 className="font-bold text-lg text-center m-4">Registro de proveedores</h3>
				<form className="grid text-black lg:text-sm text-xs gap-4">
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Nombre del proveedor:</span>
						</label>
						<input value={proveedor} onChange={(e) => setProveedor(e.target.value)} type="text" id="proveedor" name="proveedor" required className='input input-bordered w-full' />
					</div>
					<div className='grid grid-cols-2 gap-6'>
						<button className=' btn btn-success btn-sm font-normal' onClick={newSupplier} disabled={isDisabled}>Registrar proveedor</button>
						<button type="button" className='btn btn-sm font-normal' onClick={closeModal}>
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
		</dialog>
	</>;
};

export default ModalSuppliers;
