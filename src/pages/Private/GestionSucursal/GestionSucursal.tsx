import icon from '@/assets/icons/iconBG.svg';
import { ModalUsers } from '@/components/ModalUsers/ModalUsers';
import { Clients, ClientsData, ClientsSubs } from '@/models/clients';
import { Staff } from '@/models/staff/staff';
import { DataSubs } from '@/models/subscription/subscription';
import { AppStore } from '@/redux/store';
import { getClientsData, viewDataClientsOrStaff } from '@/services/Clients/clients.service';
import { crudSubscription } from '@/services/Subscriptions/subscription.service';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateTime } from 'luxon';
import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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

	const [mostrarSubscripciones, setMostrarSubscripciones] = useState(false);
	const [mostrarClientes, setMostrarClientes] = useState(true);
	const [mostrarClientesSubs, setMostrarClientesSubs] = useState(true);
	const [mostrarStaff, setMostrarStaff] = useState(true);

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
			client.username.toLowerCase().includes(searchTerm.toLowerCase()) || client.lastName.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredClients(filtered);
	};

	const searchClientsSubs = () => {
		const filtered = clientsSubs.filter((client) =>
			client.username.toLowerCase().includes(searchSubUser.toLowerCase()) || client.lastName.toLowerCase().includes(searchSubUser.toLowerCase())
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
			const { data } = await crudSubscription(0, '', 0, 0, 5, token);
		} catch (error) {
			console.log(error)
		};
	};

	useLayoutEffect(() => {
		obtainClients();
		searchClientsSubs();
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
											<th>ID</th>
											<th>Usuario</th>
											<th>Apellido</th>
											<th>Contacto de Emergencia</th>
											<th>Número del contacto</th>
											<th>Acciones</th>
										</tr>
									</thead>
									<tbody>
										{currentClients.map((client) => (
											<tr key={client.idUser}>
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
							<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black' onClick={searchClientsSubs}>Buscar</button>
						</div>
						<hr />
						<div className='max-h-56 overflow-auto m-2'>
							<table className='table table-sm table-pin-rows table-pin-cols bg-white mt-5 text-center'>
								<thead>
									<tr>
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
											<td>{client.idUser}</td>
											<td>{client.username}</td>
											<td>{client.lastName}</td>
											<td>{client.nameSubscriptionType}</td>
											<td className={`${client.isActive === 'Si' && client.isRenovation === 'No' ? 'bg-lime-400' : ''}`}>{client.isActive}</td>
											<td className={`${client.isActive === 'Si' && client.isRenovation === 'Si' ? 'bg-yellow-500' : ''}`}>{client.isRenovation}</td>
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
											<td className={`${parseInt(client.diasRestantes) <= 5 ? 'bg-red-500' : ''}`}>{client.diasRestantes}</td>
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

			{/* {'Total de Subs'} */}
			<div className='overflow-hidden'>
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
