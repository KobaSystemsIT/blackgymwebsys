import { Alert } from '@/components/AlertComponent/AlertComponent';
import { UserData } from '@/models';
import { PaymentOptions } from '@/models/paymentOptions/paymentOptions';
import { Subscription } from '@/models/subscription/subscription';
import { AppStore } from '@/redux/store';
import { getDataUser } from '@/services/Clients/clients.service';
import { getPaymentData } from '@/services/PaymentOptions/paymentoptions.service';
import { crudSubscription, newOrUpdateSubscription } from '@/services/Subscriptions/subscription.service';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import './GestionUsuarioView.css';
import { modifyOrDeleteUser } from '@/services/Users/users.service';


const GestionUsuarioView: React.FC = () => {
	const navigate = useNavigate();
	const params: any = useParams();
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;

	const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
	const [user, setUser] = useState<UserData>({
		username: '',
		lastName: '',
		phoneNumber: '',
		email: '',
		nameEmergencyContact: '',
		emergencyContact: '',
		nameSubscriptionType: '',
		isActive: '',
		idUserType: 0
	});

	const [subscriptionData, setSubscriptionData] = useState<Subscription[]>([]);
	const [paymentOptions, setPaymentOptions] = useState<PaymentOptions[]>([]);
	const [subscription, setSubscription] = useState(0);
	const [price, setPrice] = useState('');
	const [duration, setDuration] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [paymentSelected, setPaymentSelected] = useState(0);
	const [isDisabled, setDisabled] = useState(false);
	const [comments, setCommets] = useState('');
	const [fechaVenta, setFechaVenta] = useState('');

	const handleGoBack = () => {
		navigate(-1);
	};

	const getData = async () => {
		try {
			const { userData } = await getDataUser(parseInt(params.idUser), token);
			setUser(userData);
		} catch (error) {
			console.log(error);
		};

		let startDate: string = new Date().toISOString().split('T')[0];
		setFechaVenta(startDate);
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
		const confirmation = await Swal.fire({
			title: '¿Desea actualizar los datos del usuario?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Sí',
			cancelButtonText: 'Cancelar',
		});

		if (confirmation.isConfirmed) {
			try {
				setDisabled(true);
				const result = await modifyOrDeleteUser(
					parseInt(params.idUser),
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
					Alert(result.mensaje, true);
					setTimeout(() => {
						setDisabled(false);
						handleGoBack();
					}, 3000)
				}
			} catch (error) {
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
				setDisabled(true);
				const result = await modifyOrDeleteUser(
					parseInt(params.idUser),
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
					Alert(result.mensaje, true);
					setTimeout(() => {
						setDisabled(false);
						handleGoBack();
					}, 4000);
				}
			} catch (error) {
				Alert('Hubo un error al procesar la solicitud.', false);
				console.log(error);
			}
		}
	};

	const newOrUpdateSubscriptions = async () => {
		if (!paymentSelected || !subscription) {
			setShowEmptyFieldsAlert(true);
		} else {
			setShowEmptyFieldsAlert(false);
			const confirmation = await Swal.fire({
				title: '¿Desea registrar la subscripción?',
				icon: 'question',
				showCancelButton: true,
				confirmButtonText: 'Sí',
				cancelButtonText: 'Cancelar',
			});
			if (confirmation.isConfirmed) {
				try {
					setDisabled(true);
					console.log(params.idUser, subscription, price, params.idClub, startDate, endDate, paymentSelected, comments, token)
					const result = await newOrUpdateSubscription(parseInt(params.idUser), subscription, parseFloat(price), parseInt(params.idClub), startDate, endDate, paymentSelected, comments, fechaVenta, token);
					if (result) {
						Alert(result.mensaje, true);
						setTimeout(() => {
							setDisabled(false);
							handleGoBack();
						}, 3000)
					}
				} catch (error) {
					Alert('Hubo un error al procesar la solicitud.', false);
					console.log(error)
				}
			}
		}
	};

	const handleSubscriptionChange = (event: any) => {
		const selectedSubscriptionType = parseInt(event.target.value, 10);
		setSubscription(selectedSubscriptionType);
		const selectedSubscription = subscriptionData.find((sub) => sub.idSubscriptionType === selectedSubscriptionType);
		if (selectedSubscription) {
			const { idSubscriptionType, nameSubscriptionType, daysSubscription, priceSubscription, allAccess } = selectedSubscription;
			const data = { idSubscriptionType, nameSubscriptionType, daysSubscription, priceSubscription, allAccess };
			let year = new Date();
			let mesActual = year.getUTCMonth() + 1;
			let diasSub:number = data.daysSubscription;

			if(selectedSubscription.idSubscriptionType === 3 || selectedSubscription.idSubscriptionType === 4){
				if (year.getFullYear() % 4 === 0) {
					if (mesActual <= 7 && mesActual % 2 === 0) {
						if (mesActual === 2) {
							diasSub -= 1;
						} else {
							diasSub += 1;
						}
					} else if (mesActual >= 8 && mesActual % 2 === 0) {
						diasSub += 1;
					}
				} else {
					if (mesActual <= 7 && mesActual % 2 === 0) {
						if (mesActual === 2) {
							diasSub -= 2;
						} else {
							diasSub += 1;
						}
					} else if (mesActual >= 8 && mesActual % 2 === 0) {
						diasSub += 1;
					}
				}
			}

			let startDate: string = new Date().toISOString().split('T')[0];
			let endDate: string = new Date(
				new Date().getTime() + diasSub * 24 * 60 * 60 * 1000
			).toISOString().split('T')[0];
			let duration = diasSub;
			setPrice(data.priceSubscription);
			setDuration(duration.toString());
			setStartDate(startDate);
			setEndDate(endDate);
		}
	};

	const getPayment = async () => {
		try {
			const { data } = await getPaymentData(token);
			setPaymentOptions(data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getData();
		getDataSub();
		getPayment();
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
								{user.idUserType === 3 && (
									<><h1 className='lg:text-lg font-semibold text-base mb-3'>Subscripción</h1><h1 className='mt-3 font-semibold'>{user.nameSubscriptionType ? user.nameSubscriptionType : "Sin membresía"}</h1><h1 className='mt-3'>{user.isActive}</h1></>
								)}
								{user.idUserType === 2 && (
									<h1>Staff</h1>
								)}
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
								<button className='btn btn-success btn-sm font-normal' onClick={updateUserData} disabled={isDisabled}>Actualizar datos</button>
								<button type="button" className='btn btn-warning btn-sm font-normal' onClick={handleGoBack}>Volver</button>
							</div>
						</div>
					</div>
				</div>

				{user.idUserType === 3 && (
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
										<span className='label-text'>Inicio de Subscripción:</span>
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
										<span className='label-text'>Vencimiento de Subscripción:</span>
									</label>
									<input
										type="date"
										value={endDate}
										onChange={(e) => setEndDate(e.target.value)}
										className='input input-bordered w-full max-w-xs'
									/>
								</div>
								<div className='form-control w-full'>
									<label className='label'>
										<span className='label-text'>Método de pago:</span>
									</label>
									<select
										onChange={(e) => setPaymentSelected(parseInt(e.target.value))}
										className='input input-bordered w-full max-w-xs'
									>
										<option value=''>Seleccione un método de pago</option>
										{paymentOptions.map((pay) => (
											<option key={pay.idPaymentOption} value={pay.idPaymentOption}>
												{pay.paymentDescription}
											</option>
										))}
									</select>
								</div>
								<div className='form-control w-full'>
									<label className='label'>
										<span className='label-text'>Fecha de Venta:</span>
									</label>
									<input
										type="date"
										value={fechaVenta}
										onChange={(e) => setFechaVenta(e.target.value)}
										className='input input-bordered w-full max-w-xs'
									/>
								</div>
								<div className='form-control w-full'>
									<label className='label'>
										<span className='label-text'>Comentarios:</span>
									</label>
									<textarea value={comments} onChange={(e) => setCommets(e.target.value)} className="textarea textarea-bordered" placeholder="Comentarios"></textarea>
								</div>
							</form>
							{showEmptyFieldsAlert && (
								<div className="text-red-600 pt-5 text-end">
									Todos los campos son necesarios.
								</div>
							)}
							<div className='flex lg:flex-row flex-col gap-4 mt-10 lg:justify-end md:justify-end'>
								<button className='btn btn-success btn-sm font-normal' onClick={newOrUpdateSubscriptions} disabled={isDisabled}>Registrar Subscripción</button>
								<button type="button" className='btn btn-warning btn-sm font-normal' onClick={handleGoBack}>Volver</button>
							</div>
						</div>
					</div>
				)}

				<div className='flex mt-5 p-4 justify-end'>
					<button className=' btn btn-sm hover:bg-red-600' onClick={deleteUser} disabled={isDisabled}>Eliminar Usuario</button>
				</div>
			</div>
		</>
	)
};

export default GestionUsuarioView;
