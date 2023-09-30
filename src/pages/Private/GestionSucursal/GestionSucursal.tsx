import icon from '@/assets/icons/iconBG.svg';
import { Alert } from '@/components/AlertComponent/AlertComponent';
import { ModalUserVisitors, ModalUsers } from '@/components/ModalUsers/ModalUsers';
import { UserVisitor } from '@/models';
import { Clients, ClientsData, ClientsSubs } from '@/models/clients';
import { Staff } from '@/models/staff/staff';
import { DataSubs } from '@/models/subscription/subscription';
import { AppStore } from '@/redux/store';
import { getClientsData, viewDataClientsOrStaff } from '@/services/Clients/clients.service';
import { crudSubscription } from '@/services/Subscriptions/subscription.service';
import { crudUserVisitor } from '@/services/Users/users.service';
import { faCircleCheck, faRightFromBracket, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateTime } from 'luxon';
import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import './GestionSucursal.css';


export type GestionSucursalProps = {
}

const GestionSucursal: React.FC<GestionSucursalProps> = ({ }) => {
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	const params: any = useParams();

	const [clients, setClients] = useState<Clients[]>([]);
	const [staff, setStaff] = useState<Staff[]>([]);
	const [clientsSubs, setClientsSubs] = useState<ClientsSubs[]>([]);
	const [filteredClients, setFilteredClients] = useState<Clients[]>([]);
	const [filteredSubsClients, setfilteredSubsClients] = useState<ClientsSubs[]>([]);
	const [cantsubs, setCantSubs] = useState<DataSubs[]>([]);
	const [clientsData, setClientsData] = useState<ClientsData[]>([]);
	const [userVisitor, setUserVisitor] = useState<UserVisitor[]>([]);

	const [mostrarSubscripciones, setMostrarSubscripciones] = useState(false);
	const [mostrarClientes, setMostrarClientes] = useState(true);
	const [mostrarClientesSubs, setMostrarClientesSubs] = useState(true);
	const [mostrarStaff, setMostrarStaff] = useState(true);
	const [mostrarVisitantes, setMostrarVisitantes] = useState(false);
	const [isDisabled, setDisabled] = useState(false);

	const [currentPage, setCurrentPage] = useState(1);
	const [currentPageSubs, setCurrentPageSubs] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchSubUser, setSearchSubUser] = useState('');
	const [clientsPerPage, setClientsPerPage] = useState(20);
	const subsPerPage = 20;

	//clients
	const indexOfLastClient = currentPage * clientsPerPage;
	const indexOfFirstClient = indexOfLastClient - clientsPerPage;

	//clients subs
	const indexOfLastClientSubs = currentPageSubs * subsPerPage;
	const indexOfFirstClientSubs = indexOfLastClientSubs - subsPerPage;

	const currentClients = filteredClients.slice(indexOfFirstClient, indexOfLastClient);
	const currentSubsClients = filteredSubsClients.slice(indexOfFirstClientSubs, indexOfLastClientSubs);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
	const paginateSubs = (pageNumber: number) => setCurrentPageSubs(pageNumber);

	const handleSearch = () => {
		const filtered = clients.filter((client) =>
			client.username.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredClients(filtered);
	};

	const searchClientsSUbs = () => {
		const filtered = clientsSubs.filter((client) =>
			client.username.toLowerCase().includes(searchSubUser.toLowerCase())
		);
		setfilteredSubsClients(filtered);
	};

	const obtainClients = async () => {
		try {
			const { data } = await viewDataClientsOrStaff(params.idClub, 1, token);
			setClients(data);
			setFilteredClients(data);
		} catch (error) {
			console.error(error);
		};
		try {
			const { data } = await viewDataClientsOrStaff(params.idClub, 2, token);
			setClientsSubs(data);
		} catch (error) {
			console.error(error);
		};
		try {
			const { data } = await viewDataClientsOrStaff(params.idClub, 3, token);
			setStaff(data);
		} catch (error) {
			console.error(error);
		};
		try {
			const { data } = await viewDataClientsOrStaff(params.idClub, 4, token);
			setCantSubs(data);
		} catch (error) {
			console.error(error);
		};
		try {
			const { data } = await getClientsData(params.idClub, token);
			setClientsData(data);
		} catch (error) {
			console.log(error);
		};

		try {
			const { data } = await crudUserVisitor(0, '', params.idClub, '', 2, token);
			setUserVisitor(data);
		} catch (error) {
			console.log(error);
		};

		try {
			const { data } = await crudSubscription(0, '', 0, 0, 5, token);
		} catch (error) {
			console.log(error)
		};
	};

	const deleteUserVisitor = async (id: number) => {
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
				const response = await crudUserVisitor(id, '', 0, '', 5, token);
				if (response) {
					Alert(response.mensaje, true);
					setTimeout(() => {
						window.location.reload();
					}, 2500);
				}
			} catch (error: any) {
				Alert(error, false);
				console.log(error);
			}
		}
	};

	const logInCheck = async (id: number, user: string) => {
		const usuario = user;
		const confirmation = await Swal.fire({
			title: '¿Checar entrada de ' + [usuario] + '?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Sí',
			cancelButtonText: 'Cancelar',
		});

		if (confirmation.isConfirmed) {
			try {
				const result = await crudUserVisitor(id, usuario, 0, '', 3, token);
				if (result) {
					Alert(result.mensaje, true);
					setTimeout(() => {
						window.location.reload();
					}, 2500);
				}
			} catch (error: any) {
				Alert(error, false);
				console.log(error);
			}
		};
	};

	const logOutCheck = async (id: number, user: string) => {
		const usuario = user;
		const confirmation = await Swal.fire({
			title: '¿Checar salida de ' + [usuario] + '?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Sí',
			cancelButtonText: 'Cancelar',
		});

		if (confirmation.isConfirmed) {
			try {
				const result = await crudUserVisitor(id, usuario, 0, '', 4, token);
				if (result) {
					Alert(result.mensaje, true);
					setTimeout(() => {
						window.location.reload();
					}, 2500);
				}
			} catch (error: any) {
				Alert(error, false);
				console.log(error);
			}
		};
	};

	useLayoutEffect(() => {
		obtainClients();
		searchClientsSUbs();
		handleSearch();
	}, []);

	return <>
		<div className='grid gap-6 items-center'>
			{/* {'Grid clientes'} */}
			<div className='overflow-hidden'>
				<div className='grid gap-4'>
					<div className='flex h-16 px-2 justify-between items-center'>
						<button className='text-black lg:text-lg md:text-lg text-sm' onClick={() => setMostrarClientes(!mostrarClientes)}>Clientes registrados</button>
						<ModalUsers idUserTypeInt={3}></ModalUsers>
					</div>
					<hr className={`content-container ${mostrarClientes ? 'hide' : 'show'}`} />
					<div className={`content-container grid lg:grid-flow-col gap-4 ${mostrarClientes ? 'show' : 'hide'}`}>
						<div className='grid shadow-xl border-2 rounded-2xl'>
							<div className='flex lg:flex-row md:flex-row flex-col justify-between p-4 items-center gap-4'>
								<div className='flex flex-row gap-4 items-center'>
									<input
										type="text"
										placeholder="Buscar por nombre..."
										value={searchTerm}
										onChange={(e) => setSearchTerm(e.target.value)}
										className='input input-group-xs input-bordered w-full max-w-xs'
									/>
									<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black' onClick={handleSearch}>Buscar</button>
								</div>
								<div className='dropdown dropdown-bottom dropdown-end'>
									<label tabIndex={0} className="btn-sm">Total por página: <span className=' font-bold border-b-2'>{clientsPerPage}</span></label>
									<ul tabIndex={0} className="dropdown-content z-20 menu p-2 shadow bg-base-100 rounded-box w-16">
										<li>
											<button onClick={() => setClientsPerPage(20)} className=''>20</button>
											<button onClick={() => setClientsPerPage(25)} className=''>25</button>
										</li>
									</ul>
								</div>
							</div>
							<hr />
							<div className=' max-h-64 overflow-auto m-2'>
								<table className='table table-zebra table-sm table-pin-rows table-pin-cols bg-white text-center'>
									<thead>
										<tr>
											<th></th>
											<th>ID</th>
											<th>Usuario</th>
											<th>Apellido</th>
											<th>Contacto de Emergencia</th>
											<th>Número del contacto</th>
											<th>Acciones</th>
										</tr>
									</thead>
									<tbody>
										{currentClients.map((client, index) => (
											<tr key={client.idUser}>
												<td>{index}</td>
												<td>{client.idUser}</td>
												<td>{client.username}</td>
												<td>{client.lastName}</td>
												<td>{client.nameEmergencyContact}</td>
												<td>{client.emergencyContact}</td>
												<td>
													<a href={`/Dashboard/Gestion_de_Sucursal/${params.idClub}/Gestion_de_Usuario/${client.idUser}`} title='Gestión de Usuario'>
														<FontAwesomeIcon icon={faUserPen} className='h-4'></FontAwesomeIcon>
													</a>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<div className="flex join lg:justify-end justify-center p-2">
								{Array.from({ length: Math.ceil(filteredClients.length / clientsPerPage) }, (_, index) => (
									<button
										key={index}
										className={`join-item btn-sm lg:bg-white bg-gray-300 lg:text-black hover:bg-gray-400 ${currentPage === index + 1 ? 'btn-active' : ''}`}
										onClick={() => paginate(index + 1)}
									>
										{index + 1}
									</button>
								))}
							</div>
						</div>
						<div className='flex justify-center align-middle items-center'>
							<div className='lg:block md:block hidden'>
								<div className="stats lg:stats-vertical gap-4">
									{clientsData.map((clients) => (
										<div className={`stat ${clients.Categoria === 'Usuarios Nuevos' ? ' bg-lime-500' : ''} 
									${clients.Categoria === 'Usuarios Renovación' ? 'bg-yellow-500' : ''} 
									${clients.Categoria === 'Usuarios Por Vencer' ? 'bg-red-500' : ''} `} key={clients.id}>
											<div className="stat-title font-semibold">{clients.Categoria}</div>
											<div className="stat-value ml-5">{clients.Cantidad}</div>
										</div>
									))}
								</div>
							</div>
							<div className='lg:hidden md:hidden block'>
								<div className="grid grid-flow-col gap-4">
									{clientsData.map((clients) => (
										<div className={`card flex p-2 ${clients.Categoria === 'Usuarios Nuevos' ? ' bg-lime-500' : ''} 
									${clients.Categoria === 'Usuarios Renovación' ? 'bg-yellow-500' : ''} 
									${clients.Categoria === 'Usuarios Por Vencer' ? 'bg-red-500' : ''} `} key={clients.id}>
											<div className="text-sm font-semibold">{clients.Categoria}</div>
											<div className="ml-5">{clients.Cantidad}</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* {'Grid subscripciones'} */}
			<div className='overflow-hidden'>
				<div className='flex h-16 px-2 justify-between items-center'>
					<button className='text-black lg:text-lg md:text-lg text-sm text-center' onClick={() => setMostrarClientesSubs(!mostrarClientesSubs)}>Clientes con subscripción</button>
				</div>
				<hr className={`content-container ${mostrarClientesSubs ? 'hide' : 'show'}`} />
				<div className={`content-container  ${mostrarClientesSubs ? 'show' : 'hide'}`}>
					<div className='grid shadow-xl border-2 rounded-xl'>
						<div className='flex lg:flex-row md:flex-row flex-col justify-between p-4 items-center gap-4'>
							<input
								type="text"
								placeholder="Buscar por nombre..."
								value={searchSubUser}
								onChange={(e) => setSearchSubUser(e.target.value)}
								className='input input-group-xs input-bordered w-full max-w-xs'
							/>
							<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black' onClick={searchClientsSUbs}>Buscar</button>
						</div>
						<hr />
						<div className='max-h-56 overflow-auto m-2'>
							<table className='table table-sm table-pin-rows table-pin-cols bg-white mt-5 text-center'>
								<thead>
									<tr>
										<th></th>
										<th>ID</th>
										<th>Usuario</th>
										<th>Apellido</th>
										<th>Subscripción</th>
										<th>Activa</th>
										<th>Renovación</th>
										<th>Inicia</th>
										<th>Vence</th>
										<th>Días restantes</th>
									</tr>
								</thead>
								<tbody>
									{currentSubsClients.map((client, index) => (
										<tr key={client.idUser}>
											<td>{index + 1}</td>
											<td>{client.idUser}</td>
											<td>{client.username}</td>
											<td>{client.lastName}</td>
											<td>{client.nameSubscriptionType}</td>
											<td className={`${ client.isActive === 'Si' && client.isRenovation === 'No' ? 'bg-lime-400' : ''}`}>{client.isActive}</td>
											<td  className={`${ client.isActive === 'Si' && client.isRenovation === 'Si' ? 'bg-yellow-500' : ''}`}>{client.isRenovation}</td>
											<td>
												{client.startDate
													? client.startDate.toString().split("T")[0]
													: "N/A"}
											</td>
											<td>
												{client.endDate
													? client.endDate.toString().split("T")[0]
													: "N/A"}
											</td>
											<td className={`${parseInt(client.diasRestantes) <= 5 ? 'bg-red-500' : '' }`}>{client.diasRestantes}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="flex join lg:justify-end justify-center p-2">
							{Array.from({ length: Math.ceil(filteredSubsClients.length / subsPerPage) }, (_, index) => (
								<button
									key={index}
									className={`join-item btn-sm lg:bg-white bg-gray-300 lg:text-black hover:bg-gray-400 ${currentPageSubs === index + 1 ? 'btn-active' : ''}`}
									onClick={() => paginateSubs(index + 1)}
								>
									{index + 1}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* {'Grid usuarios visitantes'} */}
			<div className='overflow-hidden'>
				<div className='grid gap-8'>
					<div>
						<div className='flex h-16 px-2 justify-between items-center'>
							<button className='text-black lg:text-lg md:text-lg text-sm' onClick={() => setMostrarVisitantes(!mostrarVisitantes)}>Clientes Visitantes</button>
							<ModalUserVisitors></ModalUserVisitors>
						</div>
						<hr className={`content-container ${mostrarVisitantes ? 'hide' : 'show'}`} />
						<div className={`content-container grid shadow-xl border-2 rounded-xl ${mostrarVisitantes ? 'show' : 'hide'}`}>
							<div className=' max-h-56 overflow-auto m-2'>
								<table className='table table-zebra table-sm table-pin-rows table-pin-cols bg-white mt-5 text-center'>
									<thead>
										<tr>
											<th>ID</th>
											<th>Usuario</th>
											<th>Teléfono</th>
											<th>Hora de Entrada</th>
											<th>Hora de salida</th>
											<th>Visitas</th>
											<th>Acciones</th>
										</tr>
									</thead>
									<tbody>
										{userVisitor.map((user) => (
											<tr key={user.id}>
												<td>{user.id}</td>
												<td>{user.username}</td>
												<td>{user.phone}</td>
												<td>{user.arrivalHour
													? new Date(user.arrivalHour).toLocaleString(undefined, {
														year: 'numeric',
														month: 'numeric',
														day: 'numeric',
														hour: 'numeric',
														minute: 'numeric',
														second: 'numeric',
														hour12: false, // Habilita el formato de 12 horas
													})
													: "N/A"}</td>
												<td>{user.exitHour
													? new Date(user.exitHour).toLocaleString(undefined, {
														year: 'numeric',
														month: 'numeric',
														day: 'numeric',
														hour: 'numeric',
														minute: 'numeric',
														second: 'numeric',
														hour12: false, // Habilita el formato de 12 horas
													})
													: "N/A"}</td>
												<td>{user.visitas}</td>
												<td className='flex justify-center items-center align-middle gap-6'>
													<button title="Checar entrada" disabled={isDisabled} onClick={() => logInCheck(user.id, user.username)}>
														<FontAwesomeIcon icon={faCircleCheck} className="h-4" />
													</button>
													<button title="Checar Salida" disabled={isDisabled} onClick={() => logOutCheck(user.id, user.username)}>
														<FontAwesomeIcon icon={faRightFromBracket} className="h-4" />
													</button>
													<button title="Eliminar Usuario" disabled={isDisabled} onClick={() => deleteUserVisitor(user.id)}>
														<FontAwesomeIcon icon={faTrash} className="h-4" />
													</button>
													<a title="Contactar por Whatsapp"
														href={'https://api.whatsapp.com/send/?phone=52' + (user.phone) + '&text=¡Hola '
															+ (user.username) +
															'! 🏋%E2%80%8D♂%0A%0ANuestro sistema ha detectado '
															+ (user.visitas) +
															' visitas tuyas a nuestras sucursales, y nos gustaría invitarte a unirte a nuestra apasionada comunidad. Con una membresía de acceso completo, podrás disfrutar de una experiencia de gimnasio sin igual 💪%0A%0ANo dudes en contactarnos si tienes alguna pregunta o necesitas más información sobre nuestras membresías. Estamos aquí para ayudarte.%0A%0A¡Te esperamos en cualquiera de nuestras sucursales! 🤗%0A%0Ablackgymfitclub.com/planes%0A%0AAtentamente, El equipo de Black Gym Fitness Club 🏋️'}
														target="_blank">
														<svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
													</a>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
					{/* {'Total de subs'} */}
					<div>
						<button onClick={() => setMostrarSubscripciones(!mostrarSubscripciones)} className='px-2 p-2 lg:text-lg md:text-lg text-sm'>
							Total de subscripciones:
						</button>
						<hr />
						<div className={`content-container grid grid-flow-row lg:grid-cols-3 md:grid-cols-3 grid-cols-2 pt-10 gap-4 justify-center ${mostrarSubscripciones ? 'show' : 'hide'}`}>
							{cantsubs.map((data, index) => (
								<div key={index} className="grid grid-flow-col card p-2 text-center shadow-lg border-2 bg-black text-white">
									<div className='flex justify-center items-center'>
										<img src={icon} alt={data.nameSubscriptionType} className='lg:h-[55%] md:h-[40%] lg:block md:block hidden' />
									</div>
									<div className='flex flex-col justify-center p-2'>
										<h1 className='font-semibold text-start lg:text-lg md:text-base text-sm'>{data.nameSubscriptionType}</h1>
										<h1 className='lg:text-base md:text-sm text-xs pt-2 text-start'>Total de Subs: <span className='text-red-500'>{data.CantSubs}</span></h1>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* {'Grid staff'} */}
			<div className='overflow-hidden mb-10'>
				<div >
					<div className='flex h-16 px-2 justify-between items-center'>
						<button className='text-black lg:text-lg md:text-lg text-sm' onClick={() => setMostrarStaff(!mostrarStaff)}>Miembros del Staff</button>
						{/* {isAdmin && ( */}
						<ModalUsers idUserTypeInt={2}></ModalUsers>
						{/* )} */}
					</div>
					<hr className={`content-container ${mostrarStaff ? 'hide' : 'show'}`} />
					<div className={`content-container grid lg:grid-flow-col gap-4 shadow-xl border-2 rounded-2xl ${mostrarStaff ? 'show' : 'hide'}`}>
						<div className='max-h-48 overflow-auto p-2'>
							<table className='table table-zebra table-sm table-pin-rows table-pin-cols bg-white mt-5 text-center'>
								<thead>
									<tr>
										<th>ID</th>
										<th>Staff</th>
										<th>Número de Teléfono</th>
										<th>Contacto de Emergencia</th>
										<th>Número del Contacto</th>
										<th>Última entrada</th>
										<th>Última salida</th>
										<th>Acciones</th>
									</tr>
								</thead>
								<tbody>
									{staff.map((staff) => (
										<tr key={staff.idUser}>
											<td>{staff.idUser}</td>
											<td>{staff.username}</td>
											<td>{staff.phoneNumber}</td>
											<td>{staff.nameEmergencyContact}</td>
											<td>{staff.emergencyContact}</td>
											<td>
												{staff.arrivalHour ? (() => {
													const dateTimeString = staff.arrivalHour.replace('Z', '');
													const dateTime = DateTime.fromISO(dateTimeString, { zone: 'utc' });
													const formattedTime = dateTime.toFormat('yyyy-MM-dd hh:mm:ss a');
													return formattedTime;
												})() : "N/A"}
											</td>
											<td>
												{staff.exitHour ? (() => {
													const dateTimeString = staff.exitHour.replace('Z', '');
													const dateTime = DateTime.fromISO(dateTimeString, { zone: 'utc' });
													const formattedTime = dateTime.toFormat('yyyy-MM-dd hh:mm:ss a');
													return formattedTime;
												})() : "N/A"}
											</td>

											<td>
												<a href={`/Dashboard/Gestion_de_Sucursal/${params.idClub}/Gestion_de_Usuario/${staff.idUser}`}>
													<FontAwesomeIcon icon={faUserPen} className='h-4'></FontAwesomeIcon>
												</a>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
};

export default GestionSucursal;
