import { Roles } from '@/models';
import { Clients, ClientsSubs } from '@/models/clients';
import { Staff } from '@/models/staff/staff';
import { AppStore } from '@/redux/store';
import { viewDataClientsOrStaff } from '@/services/Clients/clients.service';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ModalUsers } from '@/components/ModalUsers/ModalUsers';
import { DataSubs } from '@/models/subscription/subscription';
import icon from '@/assets/icons/iconBG.svg'
import './GestionSucursal.css'

export type GestionSucursalProps = {
}

const GestionSucursal: React.FC<GestionSucursalProps> = ({ }) => {
	const userState = useSelector((store: AppStore) => store.user);
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	const params: any = useParams();
	const isAdmin = userState.rol === Roles.ADMIN;
	const [mostrarContenido, setMostrarContenido] = useState(false);
	const [clients, setClients] = useState<Clients[]>([]);
	const [staff, setStaff] = useState<Staff[]>([]);
	const [clientsSubs, setClientsSubs] = useState<ClientsSubs[]>([]);
	const [filteredClients, setFilteredClients] = useState<Clients[]>([]);
	const [cantsubs, setCantSubs] = useState<DataSubs[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');
	const clientsPerPage = 5; // Número de clientes por página

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
	}

	useLayoutEffect(() => {
		obtainClients();
		handleSearch();
	}, []);

	return <>
		<div className='grid p-2 gap-6 items-center'>
			<div className='overflow-hidden'>
				<div>
					<div className='flex h-16 px-2 justify-between items-center'>
						<h1 className='text-black lg:text-lg md:text-lg text-xs'>Clientes registrados</h1>
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
												<a href={`/Dashboard/Gestion_de_Sucursal/${params.idClub}/Gestion_de_Usuario/${client.idUser}`}>
													<FontAwesomeIcon icon={faUserPen} className='h-4'></FontAwesomeIcon>
												</a>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="flex join justify-end mr-5 p-2">
							{Array.from({ length: Math.ceil(filteredClients.length / clientsPerPage) }, (_, index) => (
								<button
									key={index}
									className={`join-item btn-xs lg:bg-white bg-gray-300 lg:text-black hover:bg-gray-400 ${currentPage === index + 1 ? 'btn-active' : ''}`}
									onClick={() => paginate(index + 1)}
								>
									{index + 1}
								</button>
							))}
						</div>
					</div>
				</div>
				<div className='pt-10'>
					<button onClick={() => setMostrarContenido(!mostrarContenido)} className='px-2 p-2'>
						Total de subscripciones activas:
					</button>
					<hr />
					<div className={`content-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10 justify-center ${mostrarContenido ? 'show' : 'hide'}`}>
						{cantsubs.map((data, index) => (
							<div key={index} className="grid grid-cols-2 card m-2 text-center shadow-lg border-2 bg-black text-white xl:w-96 lg:w-72">
								<div className='flex justify-center items-center'>
									<img src={icon} alt={data.nameSubscriptionType} className='h-[70%]' />
								</div>
								<div className='flex flex-col justify-center'>
									<h1 className='font-semibold text-start lg:text-xl md:text-base text-sm'>{data.nameSubscriptionType}</h1>
									<h1 className='lg:text-sm md:text-xm text-xs'>Subscripciones activas: {data.CantSubs}</h1>
								</div>
							</div>
						))}
					</div>
				</div>
				<div>
					<div className='pt-2'>
						<div className='flex h-16 px-2 justify-between items-center'>
							<h1 className='text-black lg:text-lg md:text-lg text-xs text-center'>Clientes con subscripción</h1>
						</div>
						<div className='grid shadow-xl border-2 rounded-2xl'>
							<div className='max-h-48 overflow-auto m-2'>
								<table className='table table-zebra table-sm table-pin-rows table-pin-cols bg-white mt-5 text-center'>
									<thead>
										<tr>
											<th>ID</th>
											<th>Usuario</th>
											<th>Apellido</th>
											<th>Subscripción</th>
											<th>Activa</th>
											<th>Inicia</th>
											<th>Vence</th>
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
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='overflow-hidden mt-10 mb-10'>
				<div className=' flex p-2 bg-black rounded-lg justify-between items-center'>
					<h1 className='text-white text-sm'>Miembros del Staf</h1>
					{isAdmin && (
						<ModalUsers idUserTypeInt={2}></ModalUsers>
					)}
				</div>
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
										{staff.arrivalHour ? staff.arrivalHour.toString().split('T')[0] : "N/A"}
									</td>
									<td>{staff.exitHour ? staff.exitHour.toString().split('T')[0] : "N/A"}</td>
									<td><button title='Editar Usuario'><FontAwesomeIcon icon={faUserPen} className='h-4' /></button></td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</>
};

export default GestionSucursal;
