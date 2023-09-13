import React, { useState } from 'react';
import './ModalDeleteUser.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserPen } from '@fortawesome/free-solid-svg-icons';

export type ModalDeleteUserProps = {
	typeAction: number
}

const ModalDeleteUser: React.FC<ModalDeleteUserProps> = ({ typeAction }) => {
	let typeIcon: any;
	let title: string;
	if (typeAction === 1) {
		typeIcon = faUserPen;
		title = 'Editar usuario';
	} else {
		typeIcon = faPlus;
		title = 'Gestionar subscripción';
	}

	const openModal = () => {
		window.modalDeleteUser.showModal();
	}

	return <>
		<button title={title} onClick={openModal}><FontAwesomeIcon icon={typeIcon} className='h-4' /></button>
		<dialog id='modalDeleteUser' className='modal-box'>
			<div>
				<h3 className="font-bold text-lg text-center m-4">Registro de Usuarios</h3>
				<form className="grid grid-cols-2 text-black lg:text-sm text-xs gap-4">
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Nombre:</span>
						</label>
						<input type="text" id="username" name="username" required className='input input-bordered w-full max-w-xs' />
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Apellidos:</span>
						</label>
						<input type="text" id="lastname" name="lastname" required className='input input-bordered w-full max-w-xs' />
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Teléfono:</span>
						</label>
						<input type="number" id="phoneNumber" name="phoneNumber" required className='input input-bordered w-full max-w-xs' />
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Correo:</span>
						</label>
						<input type="email" id="email" name="email" required className='input input-bordered w-full max-w-xs' />
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>ID <br /> de Sucursal:</span>
						</label>
						<input type="number" id="idClub" name="idClub" disabled className='input input-bordered w-full max-w-xs' />
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Tipo <br /> de Usuario:</span>
						</label>
						<input type="number" id="idUserType" name="idUserType" disabled className='input input-bordered w-full max-w-xs' />
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Contacto de emergencia:</span>
						</label>
						<input type="text" id="nameemergencycontact" name="nameemergencycontact" required className='input input-bordered w-full max-w-xs' />
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Número de contacto:</span>
						</label>
						<input type="number" id="emergencynumbercontact" name="emergencynumbercontact" required className='input input-bordered w-full max-w-xs' />
					</div>
					<button className='btn-success btn-sm font-normal'>Registrar</button>
					<button type="button" className='btn btn-warning btn-sm font-normal'>
						Cerrar
					</button>
				</form>
				<br />
				{/* {showEmptyFieldsAlert && (
					<div className="text-red-600">
						Por favor, complete todos los campos.
					</div>
				)} */}
			</div>
		</dialog>

		{/* <dialog id='modalDeleteUser' className='modal-box'>
			<div>
				<h1>Eliminar usuario:</h1>
			</div>
		</dialog> */}
	</>;
};

export default ModalDeleteUser;
