import React, { useState } from 'react';
import './ModalUsers.css';
import { useParams } from 'react-router-dom';
import { crudUserSystem, newUserOrStaff } from '@/services/Users/users.service';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { format } from 'date-fns-tz';
import { Alert } from '../AlertComponent/AlertComponent';

export type ModalUsersProps = {
	idUserTypeInt: number
}

export type ModalUserSystemProps = {
}


export const ModalUsers: React.FC<ModalUsersProps> = ({ idUserTypeInt }) => {
	const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
	const params: any = useParams();

	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	const [username, setUsername] = useState('');

	const [lastname, setLastname] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [nameEmergency, setNameEmergency] = useState('');
	const [phoneEmergency, setPhoneEmergency] = useState('');

	const openModal = () => {
		if (idUserTypeInt === 3) {
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
		if (idUserTypeInt === 3) {
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
			let fecha: string = (format(currentDate, 'yyyy-MM-dd HH:mm:ss', { timeZone }));
			try {
				let idClub: number = (params.idClub);
				let idUserType: number = (idUserTypeInt);
				const result = await newUserOrStaff(username, lastname, phone, email, nameEmergency, phoneEmergency, idUserType, idClub, fecha, token);
				if (result) {
					Alert(result.mensaje, true);
					setTimeout(() => {
						window.location.reload();
					}, 3000)
				}
			} catch (error: any) {
				setTimeout(() => {
					Alert('Hubo un error al procesar la solicitud', false)
				}, 3000)
			}
		}
	}
	return <>
		<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black' onClick={openModal}>
			<h1 className=' text-xs'>{idUserTypeInt === 3 ? "Nuevo Cliente" : "Nuevo Staff"}</h1>
		</button>
		<dialog id={idUserTypeInt === 3 ? "modalUsers" : "modalStaff"} className="modal-box">
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
					<button className='btn btn-success btn-sm font-normal' onClick={newUser}>Registrar</button>
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
		</dialog>
	</>
};

export const ModalUserSystem: React.FC<ModalUserSystemProps> = ({ }) => {

	const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
	const params: any = useParams();

	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	const [username, setUsername] = useState('');
	const [idUserType, setIdTypeUser] = useState(0);
	const [password, setPassword] = useState('');

	const userType = [
		{ idUserType: 1, name: 'Administrador' },
		{ idUserType: 2, name: 'Staff' }
	  ];

	const openModal = () => {
		window.modalUserSys.showModal();
	}

	const closeModal = () => {
		window.modalUserSys.close();
		setUsername('');
		setPassword('');
		setIdTypeUser(0);
		setShowEmptyFieldsAlert(false);
	}

	const handleIdUserChange = (event: any) => {
        const selectedProduct = parseInt(event.target.value, 10)
        if (selectedProduct) {
            setIdTypeUser(selectedProduct);
        }
    };

	const newUser = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if(!username || !password || !idUserType){
			setShowEmptyFieldsAlert(true);
		} else {
			setShowEmptyFieldsAlert(false);
			try {
				const result = await crudUserSystem(0, username, password, idUserType, 1, token);
				if(result) {
					Alert(result.mensaje, true);
					setTimeout(() => {
						closeModal();
						window.location.reload();
					}, 2500);
				}
			} catch (error:any) {
				Alert(error, false);
				console.log(error);
			}
		}
	}
	return (
		<>
			<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black' onClick={openModal}>
				<h1 className=' text-xs'>Nuevo Usuario</h1>
			</button>
			<dialog id="modalUserSys" className="modal-box">
				<div>
					<h3 className="font-bold text-lg text-center m-4">Registro de Usuarios</h3>
					<form className="grid text-black lg:text-sm text-xs gap-4">
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Nombre:</span>
							</label>
							<input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" required className='input input-bordered w-full' />
						</div>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Contraseña</span>
							</label>
							<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="lastname" name="lastname" required className='input input-bordered w-full' />
						</div>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Tipo de Usuario:</span>
							</label>
							<select required
								onChange={handleIdUserChange}
								className='input input-bordered w-full'
							>
								<option value=''>Seleccione una opción</option>
								{userType.map((user) => (
									<option key={user.idUserType} value={user.idUserType}>
										{user.name}
									</option>
								))}
							</select>

						</div>
						<div className='grid grid-cols-2 gap-6'>
							<button className='btn btn-success btn-sm font-normal' onClick={newUser}>Registrar</button>
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
			</dialog>
		</>
	)
}

export default {
	ModalUsers,
	ModalUserSystem
}
