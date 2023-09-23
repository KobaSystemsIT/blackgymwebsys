import { Roles, UserVisitor } from '@/models';
import { Clients, ClientsData, ClientsSubs } from '@/models/clients';
import { Staff } from '@/models/staff/staff';
import { AppStore } from '@/redux/store';
import { getClientsData, viewDataClientsOrStaff } from '@/services/Clients/clients.service';
import { faUser, faUserGroup, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ModalUsers } from '@/components/ModalUsers/ModalUsers';
import { DataSubs } from '@/models/subscription/subscription';
import icon from '@/assets/icons/iconBG.svg'
import './GestionSucursal.css'
import { crudUserVisitor } from '@/services/Users/users.service';
import { userInfo } from 'os';

export type GestionSucursalProps = {
}

const GestionSucursal: React.FC<GestionSucursalProps> = ({ }) => {
	const userState = useSelector((store: AppStore) => store.user);
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	const params: any = useParams();
	const isAdmin = userState.rol === Roles.ADMIN;
	const i: number = 0;


	const [clients, setClients] = useState<Clients[]>([]);
	const [staff, setStaff] = useState<Staff[]>([]);
	const [clientsSubs, setClientsSubs] = useState<ClientsSubs[]>([]);
	const [filteredClients, setFilteredClients] = useState<Clients[]>([]);
	const [cantsubs, setCantSubs] = useState<DataSubs[]>([]);
	const [clientsData, setClientsData] = useState<ClientsData[]>([]);
	const [userVisitor, setUserVisitor] = useState<UserVisitor[]>([]);

	const [mostrarSubscripciones, setMostrarSubscripciones] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');
	const clientsPerPage = 5;

	// Calcula el índice de inicio y final para la paginación
	const indexOfLastClient = currentPage * clientsPerPage;
	const indexOfFirstClient = indexOfLastClient - clientsPerPage;
	const currentClients = filteredClients.slice(indexOfFirstClient, indexOfLastClient);

	// Cambiar de página
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	const handleSearch = () => {
		const filtered = clients.filter((client) =>
			client.username.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredClients(filtered);
	};

	const obtainClients = async () => {
		try {
			const { data } = await viewDataClientsOrStaff(params.idClub, 1, token);
			setClients(data);
			setFilteredClients(data);
		} catch (error) {
			console.error(error);
		}
		try {
			const { data } = await viewDataClientsOrStaff(params.idClub, 2, token);
			setClientsSubs(data);
		} catch (error) {
			console.error(error);
		}
		try {
			const { data } = await viewDataClientsOrStaff(params.idClub, 3, token);
			setStaff(data);
		} catch (error) {
			console.error(error);
		}
		try {
			const { data } = await viewDataClientsOrStaff(params.idClub, 4, token);
			setCantSubs(data);
		} catch (error) {
			console.error(error);
		}
		try {
			const { data } = await getClientsData(params.idClub, token);
			setClientsData(data);
		} catch (error) {
			console.log(error);
		}

		try {
			const { data } = await crudUserVisitor(0, '', params.idClub, '', 2, token);
			setUserVisitor(data);
		} catch (error) {
			console.log(error);
		}
	}

	useLayoutEffect(() => {
		obtainClients();
		handleSearch();
	}, []);

	return <>
		<div className='grid p-2 gap-6 items-center'>
			{/* {'Grid clientes'} */}
			<div className='overflow-hidden'>
				<div className='grid lg:grid-flow-col gap-4'>
					<div>
						<div className='flex h-16 px-2 justify-between items-center'>
							<h1 className='text-black lg:text-lg md:text-lg text-sm'>Clientes registrados</h1>
							<ModalUsers idUserTypeInt={3}></ModalUsers>
						</div>
						<div className='grid shadow-xl border-2 rounded-2xl'>
							<div className='flex lg:flex-row md:flex-row flex-col justify-between p-4 items-center gap-4'>
								<input
									type="text"
									placeholder="Buscar por nombre..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className='input input-group-xs input-bordered w-full max-w-xs'
								/>
								<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black' onClick={handleSearch}>Buscar</button>
							</div>
							<hr />
							<div className='max-h-48 overflow-auto m-2'>
								<table className='table table-zebra table-sm table-pin-rows table-pin-cols bg-white mt-5 text-center'>
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
					</div>
					<div className='flex justify-center align-middle items-center pt-14'>
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

			{/* {'Grid usuarios visitantes'} */}
			<div className='overflow-hidden'>
				<div className='grid gap-8'>
					<div>
						<div className='flex h-16 px-2 justify-between items-center'>
							<h1 className='text-black lg:text-lg md:text-lg text-sm'>Usuarios Visitantes</h1>
							{/* <ModalUsers idUserTypeInt={3}></ModalUsers> */}
						</div>
						<div className='grid shadow-xl border-2 rounded-2xl'>
							<div className='max-h-48 overflow-auto m-2'>
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
												<td>

												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className=''>
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

			{/* {'Grid subscripciones'} */}
			<div className='overflow-hidden'>
				<div>
					<div className='pt-2'>
						<div className='flex h-16 px-2 justify-between items-center'>
							<h1 className='text-black lg:text-lg md:text-lg text-sm text-center'>Clientes con subscripción</h1>
						</div>
						<div className='grid shadow-xl border-2 rounded-2xl'>
							<div className='max-h-48 overflow-auto m-2'>
								<table className='table table-zebra table-sm table-pin-rows table-pin-cols bg-white mt-5 text-center'>
									<thead>
										<tr>
											<th>IDUSER</th>
											<th>Usuario</th>
											<th>Apellido</th>
											<th>Subscripción</th>
											<th>Activa</th>
											<th>Inicia</th>
											<th>Vence</th>
											<th>Días restantes</th>
										</tr>
									</thead>
									<tbody>
										{clientsSubs.map((client) => (
											<tr key={client.idUser}>
												<td>{client.idUser}</td>
												<td>{client.username}</td>
												<td>{client.lastName}</td>
												<td>{client.nameSubscriptionType}</td>
												<td>{client.isActive}</td>
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
												<td>{client.diasRestantes}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* {'Grid staff'} */}										
			<div className='overflow-hidden mb-10'>
				<div >
					<div className='flex h-16 px-2 justify-between items-center'>
						<h1 className='text-black lg:text-lg md:text-lg text-sm'>Miembros del Staff</h1>
						{isAdmin && (
							<ModalUsers idUserTypeInt={2}></ModalUsers>
						)}
					</div>
					<div className='grid shadow-xl border-2 rounded-2xl'>
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
												{staff.arrivalHour
													? new Date(staff.arrivalHour).toLocaleString(undefined, {
														year: 'numeric',
														month: 'numeric',
														day: 'numeric',
														hour: 'numeric',
														minute: 'numeric',
														second: 'numeric',
														hour12: true, // Habilita el formato de 12 horas
													})
													: "N/A"}
											</td>
											<td>
												{staff.exitHour
													? new Date(staff.exitHour).toLocaleString(undefined, {
														year: 'numeric',
														month: 'numeric',
														day: 'numeric',
														hour: 'numeric',
														minute: 'numeric',
														second: 'numeric',
														hour12: true, // Habilita el formato de 12 horas
													})
													: "N/A"}
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
