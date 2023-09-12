import React, { useState } from 'react';
import './ModalUsers.css';
import { useParams } from 'react-router-dom';
import { newUserOrStaff } from '@/services/users/users.service';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { AlertComponent } from '../AlertComponent';
import { format } from 'date-fns-tz';

export type ModalUsersProps = {
	idUserTypeInt: string
}

const ModalUsers: React.FC<ModalUsersProps> = ({ idUserTypeInt }) => {
	const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
	const params: any = useParams();

	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;

	//declaramos las variables del formulario
	const [username, setUsername] = useState('');
	const [lastname, setLastname] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [nameEmergency, setNameEmergency] = useState('');
	const [phoneEmergency, setPhoneEmergency] = useState('');
	const [showAlert, setShowAlert] = useState(false);
	const [message, setMessage] = useState('');
	const [icon, setIcon] = useState(false);

	const openModal = () => {
		if(idUserTypeInt === '3') {
			window.modalUsers.showModal();
		} else {
			window.modalStaff.showModal();
		}
	}

	const closeModal = () => {
		setUsername('');
		setLastname('');
		setPhone('');
		setEmail('');
		setNameEmergency('');
		setPhoneEmergency('');
		setShowAlert(false);
		setMessage('');
		if(idUserTypeInt === '3') {
			window.modalUsers.close();
		} else {
			window.modalStaff.close();
		}
		setShowEmptyFieldsAlert(false);
	}

	const newUser = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		if (!username || !lastname || !phone || !nameEmergency || !phoneEmergency) {
			setShowEmptyFieldsAlert(true);
		} else {
			setShowEmptyFieldsAlert(false);
			const timeZone = 'America/Mexico_City';

			const currentDate = new Date();
			const fecha = (format(currentDate, 'yyyy-MM-dd HH:mm:ss', { timeZone }));

			try {
				const idClub = (params.idClub);
				const idUserType = (idUserTypeInt);
				const result = await newUserOrStaff(username, lastname, phone, email, nameEmergency, phoneEmergency, idUserType, idClub, fecha, token);
				if (result) {
					setMessage(result.mensaje);
					setShowAlert(true);
					setIcon(true);
					setTimeout(() => {
						setShowAlert(false);
						closeModal();

					}, 3000)
				} 
			} catch (error: any) {
				setMessage(error);
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
			<h1>{idUserTypeInt === '3' ? "Nuevo Cliente" : "Nuevo Staff"}</h1>
		</button>
		<dialog id={idUserTypeInt === '3' ? "modalUsers" : "modalStaff"} className="modal-box z-10">
			<div>
				<h3 className="font-bold text-lg text-center m-4">Registro de Usuarios</h3>
				<form className="grid grid-cols-2 text-black lg:text-sm text-xs gap-4">
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Nombre:</span>
						</label>
						<input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" required className='input input-bordered w-full max-w-xs' />
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Apellidos:</span>
						</label>
						<input value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" id="lastname" name="lastname" required className='input input-bordered w-full max-w-xs' />
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Teléfono:</span>
						</label>
						<input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" id="phoneNumber" name="phoneNumber" required className='input input-bordered w-full max-w-xs' />
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Correo:</span>
						</label>
						<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required className='input input-bordered w-full max-w-xs' />
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>ID <br /> de Sucursal:</span>
						</label>
						<input type="number" id="idClub" name="idClub" disabled className='input input-bordered w-full max-w-xs' placeholder={params.idClub} />
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Tipo <br /> de Usuario:</span>
						</label>
						<input type="number" id="idUserType" name="idUserType" disabled className='input input-bordered w-full max-w-xs' placeholder={idUserTypeInt} />
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Contacto de emergencia:</span>
						</label>
						<input value={nameEmergency} onChange={(e) => setNameEmergency(e.target.value)} type="text" id="nameemergencycontact" name="nameemergencycontact" required className='input input-bordered w-full max-w-xs' />
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Número de contacto:</span>
						</label>
						<input value={phoneEmergency} onChange={(e) => setPhoneEmergency(e.target.value)} type="number" id="emergencynumbercontact" name="emergencynumbercontact" required className='input input-bordered w-full max-w-xs' />
					</div>
					<button className=' btn-success btn-sm font-normal' onClick={newUser}>Registrar</button>
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

export default ModalUsers;
