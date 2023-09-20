import React, { useEffect, useLayoutEffect, useState } from 'react';
import './GestionUsuarioView.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getDataUser } from '@/services/Clients/clients.service';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { UserData } from '@/models';
import { crudSubscription, newOrUpdateSubscription } from '@/services/Subscriptions/subscription.service';
import { Subscription } from '@/models/subscription/subscription';
import { modifyOrDeleteUser } from '@/services/Users/users.service';
import { Alert } from '@/components/AlertComponent/AlertComponent';
import Swal from 'sweetalert2';


const GestionUsuarioView: React.FC = () => {
	const navigate = useNavigate();
	const params: any = useParams();
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	let idUser: number = params.idUser;
	let idClub: number = params.idClub;

	const [user, setUser] = useState<UserData>({
		username: '',
		lastName: '',
		phoneNumber: '',
		email: '',
		nameEmergencyContact: '',
		emergencyContact: '',
		nameSubscriptionType: '',
		isActive: ''
	});

	const [subscriptionData, setSubscriptionData] = useState<Subscription[]>([]);
	const [subscription, setSubscription] = useState(0);
	const [price, setPrice] = useState('');
	const [duration, setDuration] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');


	const handleGoBack = () => {
		navigate(-1); // Esto navegará hacia atrás en la pila de rutas
	};

	const getData = async () => {
		try {
			const { userData } = await getDataUser(idUser, token);
			setUser(userData);
		} catch (error) {
			console.log(error);
		}
	};

	const getDataSub = async () => {
		try {
			const { data } = await crudSubscription(1, '', 0, 0, 2, token);
			setSubscriptionData(data);
		} catch (error) {
			console.log(error);
		}
	};

	const updateUserData = async () => {
		// Mostrar una alerta de confirmación
		const confirmation = await Swal.fire({
		  title: '¿Desea actualizar los datos del usuario?',
		  icon: 'question',
		  showCancelButton: true,
		  confirmButtonText: 'Sí',
		  cancelButtonText: 'Cancelar',
		});
	  
		if (confirmation.isConfirmed) {
		  try {
			const result = await modifyOrDeleteUser(
			  idUser,
			  user.username,
			  user.lastName,
			  user.phoneNumber,
			  user.email,
			  user.nameEmergencyContact,
			  user.emergencyContact,
			  1,
			  token
			);
			if (result) {
			  // Mostrar una alerta de éxito
			  Alert(result.mensaje, true);
			}
		  } catch (error) {
			// Mostrar una alerta de error
			Swal.fire('Error', 'Hubo un error al procesar la solicitud.', 'error');
			console.log(error);
		  }
		}
	};

	const deleteUser = async () => {
		const confirmation = await Swal.fire({
			title: '¿Desea eliminar a este usuario?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Sí',
			cancelButtonText: 'Cancelar',
		  });
		
		  if (confirmation.isConfirmed) {
			try {
				const result = await modifyOrDeleteUser(
				  idUser,
				  user.username,
				  user.lastName,
				  user.phoneNumber,
				  user.email,
				  user.nameEmergencyContact,
				  user.emergencyContact,
				  2,
				  token
				);
				if (result) {
				  // Mostrar una alerta de éxito
				  Alert(result.mensaje, true);
				  setTimeout(() => {
					handleGoBack();
				  }, 5000);
				}
			  } catch (error) {
				// Mostrar una alerta de error
				Swal.fire('Error', 'Hubo un error al procesar la solicitud.', 'error');
				console.log(error);
			  }
		  }
	}
	const newOrUpdateSubscriptions = async () => {
		const confirmation = await Swal.fire({
			title: '¿Desea registrar la subscripción?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Sí',
			cancelButtonText: 'Cancelar',
		  });
		
		if (confirmation.isConfirmed) {
			try {
				const result = await newOrUpdateSubscription(idUser, subscription, idClub, startDate, endDate, token);
				if (result) {
					Alert(result.mensaje, true);
				}
			} catch (error) {
				Alert('Hubo un error al procesar la solicitud.', false);
				console.log(error)
			}
		}
		
	}

	const handleSubscriptionChange = (event: any) => {
		const selectedSubscriptionType = parseInt(event.target.value, 10);
		setSubscription(selectedSubscriptionType);
		const selectedSubscription = subscriptionData.find((sub) => sub.idSubscriptionType === selectedSubscriptionType);
		if (selectedSubscription) {
			
			const { idSubscriptionType, nameSubscriptionType, daysSubscription, priceSubscription, allAccess } = selectedSubscription;
			const data = { idSubscriptionType, nameSubscriptionType, daysSubscription, priceSubscription, allAccess };
			console.log(idSubscriptionType)
			let startDate: string = new Date().toISOString().split('T')[0];
			let endDate: string = new Date(
				new Date().getTime() + daysSubscription * 24 * 60 * 60 * 1000
			).toISOString().split('T')[0];
			let duration: string = daysSubscription.toString();
			setPrice(data.priceSubscription);
			setDuration(duration);
			setStartDate(startDate);
			setEndDate(endDate);
		}
	};

	useEffect(() => {
		getData();
		getDataSub();
	}, []);
	return (
		<>
			<div className='p-2 flex flex-col'>
				<div className='grid lg:grid-flow-col md:grid-flow-col gap-6'>
					<div className="grid shadow-xl border-2 rounded-2xl">
						<div className="flex align-middle justify-center items-center p-2">
							<img src="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg" alt="User" className="rounded-xl h-48" />
						</div>
						<div className="items-center text-center lg:px-10 lg:py-10 p-4">
							<h2 className="lg:text-xl text-base font-semibold">{user.username} {user.lastName}</h2>
							<div>								
								<hr className="mt-2 mb-2" />
								<h1 className='lg:text-lg font-semibold text-base mb-3'>Subscripción</h1>
								<h1 className='mt-3 font-semibold'>{user.nameSubscriptionType ? user.nameSubscriptionType : "Sin membresía"}</h1>
								<h1 className='mt-3'>{user.isActive}</h1>
							</div>
						</div>
					</div>
					<div>
						<h1 className='font-semibold text-xl p-2 lg:text-start text-center'>Gestión de Usuario</h1>
						<hr />
						<div className='mt-10 rounded-xl border-2 p-6 shadow-xl'>
							<form className="grid lg:grid-flow-row md:grid-cols-2 lg:text-sm text-xs gap-2">
								<div className='form-control w-full'>
									<label className='label'>
										<span className='label-text '>Nombre:</span>
									</label>
									<input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} type="text" id="username" name="username" required className='input input-bordered w-full max-w-xs' />
								</div>
								<div className='form-control w-full '>
									<label className='label'>
										<span className='label-text '>Apellidos:</span>
									</label>
									<input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} type="text" id="lastname" name="lastname" required className='input input-bordered w-full max-w-xs' />
								</div>
								<div className='form-control w-full'>
									<label className='label'>
										<span className='label-text '>Teléfono:</span>
									</label>
									<input value={user.phoneNumber} onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })} type="number" id="phoneNumber" name="phoneNumber" required className='input input-bordered w-full max-w-xs' />
								</div>
								<div className='form-control w-full'>
									<label className='label'>
										<span className='label-text '>Correo:</span>
									</label>
									<input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" id="email" name="email" required className='input input-bordered w-full max-w-xs' />
								</div>
								<div className='form-control w-full'>
									<label className='label'>
										<span className='label-text '>Contacto de emergencia:</span>
									</label>
									<input value={user.nameEmergencyContact} onChange={(e) => setUser({ ...user, nameEmergencyContact: e.target.value })} type="text" id="nameemergencycontact" name="nameemergencycontact" required className='input input-bordered w-full max-w-xs' />
								</div>
								<div className='form-control w-full'>
									<label className='label'>
										<span className='label-text '>Número de contacto:</span>
									</label>
									<input value={user.emergencyContact} onChange={(e) => setUser({ ...user, emergencyContact: e.target.value })} type="number" id="emergencynumbercontact" name="emergencynumbercontact" required className='input input-bordered w-full max-w-xs' />
								</div>
							</form>
							<div className='flex lg:flex-row flex-col gap-4 mt-10 lg:justify-end md:justify-end'>
								<button className='btn btn-success btn-sm font-normal' onClick={updateUserData}>Actualizar datos</button>
								<button type="button" className='btn btn-warning btn-sm font-normal' onClick={handleGoBack}>Volver</button>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-10 p-4'>
					<h1 className='font-semibold text-xl p-2'>Gestión de Subscripción</h1>
					<hr />
					<div className='mt-10 rounded-xl border-2 p-6 shadow-xl'>
						<form className="grid lg:grid-cols-3 md:grid-cols-2 lg:text-sm text-xs gap-4">
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text'>Tipo de Subscripción:</span>
								</label>
								<select									
									onChange={handleSubscriptionChange}
									className='input input-bordered w-full max-w-xs'
								>
									<option value=''>Seleccione una suscripción</option>
									{subscriptionData.map((sub) => (
										<option key={sub.idSubscriptionType} value={sub.idSubscriptionType}>
											{sub.nameSubscriptionType}
										</option>
									))}
								</select>
							</div>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text'>Precio:</span>
								</label>
								<input
									type="number"
									value={price}
									onChange={(e) => setPrice(e.target.value)}
									readOnly
									className='input input-bordered w-full max-w-xs'
								/>
							</div>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text'>Duración:</span>
								</label>
								<input
									type="number"
									value={duration}
									readOnly
									onChange={(e) => setDuration(e.target.value)}
									className='input input-bordered w-full max-w-xs'
								/>
							</div>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text'>Fecha de Inicio:</span>
								</label>
								<input
									type="date"
									value={startDate}
									onChange={(e) => setStartDate(e.target.value)}
									className='input input-bordered w-full max-w-xs'
								/>
							</div>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text'>Fecha fin:</span>
								</label>
								<input
									type="date"
									value={endDate}
									onChange={(e) => setEndDate(e.target.value)}
									className='input input-bordered w-full max-w-xs'
								/>
							</div>
						</form>
						<div className='flex lg:flex-row flex-col gap-4 mt-10 lg:justify-end md:justify-end'>
							<button className='btn btn-success btn-sm font-normal' onClick={newOrUpdateSubscriptions}>Registrar Subscripción</button>
							<button type="button" className='btn btn-warning btn-sm font-normal' onClick={handleGoBack}>Volver</button>
						</div>
					</div>
				</div>
				
				<div className='flex mt-5 p-4 justify-end'>
					<button className=' btn btn-sm hover:bg-red-600' onClick={deleteUser}>Eliminar Usuario</button>						
				</div>
			</div>
		</>
	)
};

export default GestionUsuarioView;
