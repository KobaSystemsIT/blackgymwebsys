import React from 'react';
import './ModalUsers.css';
import { useParams } from 'react-router-dom';

export type ModalUsersProps = {
	idUserType: number
}

const ModalUsers: React.FC<ModalUsersProps> = ({ idUserType }) => {
	const params: any = useParams();
	const openModal = () => {
		window.modalUsers.showModal();
	}

	const closeModal = () => {
		window.modalUsers.close();
	}
	return <>
		<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent' onClick={openModal}>
			<h1>Nuevo cliente</h1>
		</button>
		<dialog id="modalUsers" className="modal-box">
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
						<input type="text" id="idclub" name="idclub" disabled className='input input-bordered w-full max-w-xs' placeholder={params.idClub} />
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Tipo <br /> de Usuario:</span>
						</label>
						<input type="text" id="idUserType" name="idUserType" disabled className='input input-bordered w-full max-w-xs' placeholder={params.idClub} />
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
					<input type="hidden" id="idUserType" name="idUserType" value={idUserType} />
					<input type="hidden" id="created_at" name="created_at" value={new Date().toISOString()} />
					<button className=' btn-success btn-sm font-normal'>Registrar</button>
					<button type="button" className='btn btn-sm font-normal' onClick={closeModal}>
						Cerrar
					</button>
				</form>
			</div>
		</dialog>
	</>
};

export default ModalUsers;
