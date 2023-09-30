import { Clubes } from '@/models';
import { AppStore } from '@/redux/store';
import { getClubes } from '@/services/Clubes/clubes.service';
import { crudUserSystem, crudUserVisitor, newUserOrStaff } from '@/services/Users/users.service';
import { format } from 'date-fns-tz';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Alert } from '../AlertComponent/AlertComponent';
import './ModalUsers.css';

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
	const [isDisabled, setDisabled] = useState(false);

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
				setDisabled(true);
				const result = await newUserOrStaff(username, lastname, phone, email, nameEmergency, phoneEmergency, idUserType, idClub, fecha, token);
				if (result) {
					Alert(result.mensaje, true);
					setTimeout(() => {
						setDisabled(false);
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
				<h3 className="font-bold text-lg text-center m-4">Registro de {idUserTypeInt === 3 ? 'Clientes' : 'Staff'}</h3>
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
					<button className='btn btn-success btn-sm font-normal' onClick={newUser} disabled={isDisabled}>Registrar</button>
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
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	const [username, setUsername] = useState('');
	const [idUserType, setIdTypeUser] = useState(0);
	const [password, setPassword] = useState('');
	const [isDisabled, setDisabled] = useState(false);
	const [clubes, setClubes] = useState<Clubes[]>([]);
	const [idClub, setIdClub] = useState(0);

	const userType = [
		{ idUserType: 1, name: 'Administrador' },
		{ idUserType: 2, name: 'Staff' }
	];

	const openModal = () => {
		window.modalUserSys.showModal();
	}

	const closeModal = () => {
		setDisabled(false);
		setUsername('');
		setPassword('');
		setIdTypeUser(0);
		setIdClub(0);
		setShowEmptyFieldsAlert(false);
		window.modalUserSys.close();	
	}

	const handleIdUserChange = (event: any) => {
		const selectedProduct = parseInt(event.target.value, 10)
		if (selectedProduct) {
			setIdTypeUser(selectedProduct);
		}
	};

	const newUser = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (!username || !password || !idUserType || !idClub) {
			setShowEmptyFieldsAlert(true);
		} else {
			setShowEmptyFieldsAlert(false);
			try {
				setDisabled(true);
				const result = await crudUserSystem(0, username, password, idUserType, idClub, 1, token);
				if (result) {
					Alert(result.mensaje, true);
					setTimeout(() => {
						closeModal();
						setDisabled(false);
						window.location.reload();
					}, 2500);
				}
			} catch (error: any) {
				Alert(error, false);
				console.log(error);
			}
		}
	};

	const handleClub = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value;
		const id = parseInt(selectedValue);
		const targetClub = clubes.find((club) => club.idClub === id);
		if (targetClub) {
			setIdClub(targetClub.idClub);
		} else {
			console.log('No se encontró ningún club para el ID seleccionado');
		}
	};

	const obtainClubes = async () => {
		try {
			const { data } = await getClubes();
			setClubes(data);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	useEffect(() => {
		obtainClubes();
	}, []);

	return (
		<>
			<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black' onClick={openModal} onLoad={obtainClubes}>
				<h1 className=' text-xs'>Nuevo Usuario</h1>
			</button>
			<dialog id="modalUserSys" className="modal-box">
				<div>
					<h3 className="font-bold text-lg text-center m-4">Registro de Usuarios del Sistema</h3>
					<form className="grid text-black lg:text-sm text-xs gap-4">
						<div className='grid lg:grid-cols-2 grid-flow-row gap-4'>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text'>Nombre de usuario:</span>
								</label>
								<input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" required className='input input-bordered w-full' />
							</div>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text'>Contraseña</span>
								</label>
								<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="lastname" name="lastname" required className='input input-bordered w-full' />
							</div>
						</div>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Tipo de Usuario:</span>
							</label>
							<select required
								onChange={handleIdUserChange}
								className='input input-bordered w-full'
							>
								<option value={0}>Seleccione una opción</option>
								{userType.map((user) => (
									<option key={user.idUserType} value={user.idUserType}>
										{user.name}
									</option>
								))}
							</select>
						</div>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Sucursal:</span>
							</label>
							<select
								id="idClub"
								name="idClub"
								className='input input-bordered w-full'
								value={idClub}
								onChange={handleClub}
							>
								<option value="">Selecciona una sucursal.</option>
								{clubes.map(club => (
									<option key={club.idClub} value={club.idClub}>{club.nameClub}</option>
								))}
							</select>
						</div>
						<div className='grid grid-cols-2 gap-6'>
							<button className='btn btn-success btn-sm font-normal' onClick={newUser} disabled={isDisabled}>Registrar</button>
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
};

export const ModalUserVisitors: React.FC = () => {
	const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	const params: any = useParams();

	const [username, setUsername] = useState('');
	const [isDisabled, setDisabled] = useState(false);
	const [phone, setPhone] = useState('');

	const openModal = () => {
		window.modalUserSys.showModal();
	}

	const closeModal = () => {
		window.modalUserSys.close();
		setUsername('');
		setPhone('');
		setShowEmptyFieldsAlert(false);
	}

	const newUser = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (!username || !phone) {
			setShowEmptyFieldsAlert(true);
		} else {
			setShowEmptyFieldsAlert(false);
			try {
				setDisabled(true);
				const result = await crudUserVisitor(0, username, params.idClub, phone, 1, token);
				if (result) {
					Alert(result.mensaje, true);
					setTimeout(() => {
						closeModal();
						setDisabled(false);
						window.location.reload();
					}, 2500);
				}
			} catch (error: any) {
				Alert(error, false);
				console.log(error);
			}
		}
	}
	return (
		<>
			<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black' onClick={openModal}>
				<h1 className=' text-xs'>Nuevo Visitante</h1>
			</button>
			<dialog id="modalUserSys" className="modal-box">
				<div>
					<h3 className="font-bold text-lg text-center m-4">Registro de Visita</h3>
					<form className="grid text-black lg:text-sm text-xs gap-4">
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Nombre:</span>
							</label>
							<input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" required className='input input-bordered w-full' />
						</div>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Teléfono</span>
							</label>
							<input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" id="phone" name="phone" required className='input input-bordered w-full' />
						</div>
						<div className='grid grid-cols-2 gap-6'>
							<button className='btn btn-success btn-sm font-normal' disabled={isDisabled} onClick={newUser}>Registrar</button>
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
};

export default {
	ModalUsers,
	ModalUserSystem,
	ModalUserVisitors
}
