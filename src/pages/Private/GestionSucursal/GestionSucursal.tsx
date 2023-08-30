
import { Clients } from '@/models/clients';
import { AppStore } from '@/redux/store';
import { viewClientsData } from '@/services/Clients/clients.service';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export type GestionSucursalProps = {
}

const GestionSucursal: React.FC<GestionSucursalProps> = ({ }) => {
	const userState = useSelector((store: AppStore) => store.user);
	const token = userState.token;

	const [clients, setClients] = useState<Clients[]>([]);
	const params: any = useParams();
	const obtainClients = async () => {
		try {
			const { data } = await viewClientsData(params.idClub, token);
			setClients(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		obtainClients();
	}, []);
	return <>
		<div className='grid p-2 gap-8 items-center'>
			<div className=' overflow-hidden'>
				<div className=' flex p-2 bg-gray-200 rounded-lg justify-between items-center'>
					<h1 className='text-black text-sm'>Clientes registrados</h1>
					<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent'>Nuevo cliente</button>
				</div>
				<div className='overflow-auto p-2'>
					<table className='table table-zebra table-xs table-pin-rows table-pin-cols bg-white mt-5'>
						<thead>
							<tr>
								<th>ID</th>
								<th>Usuario</th>
								<th>Apellido</th>
								<th>Contacto de Emergencia</th>
								<th>Tipo de Suscripción</th>
								<th>Activo</th>
								<th>Inicio de Subscripción</th>
								<th>Vencimiento</th>
							</tr>
						</thead>
						<tbody>
							{clients.map((client) => (
								<tr key={client.idUser}>
									<td>{client.idUser}</td>
									<td>{client.username}</td>
									<td>{client.lastName}</td>
									<td>{client.nameEmergencyContact}</td>
									<td>{client.nameSubscriptionType}</td>
									<td>{client.isActive}</td>
									<td>{client.startDate.toString().split('T')[0]}</td>
									<td>{client.endDate.toString().split('T')[0]}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div>
				</div>
			</div>
			<div className=' overflow-hidden'>
				<div className=' flex p-2 bg-gray-200 rounded-lg justify-between items-center'>
					<h1 className='text-black text-sm'>Miembros del Staf</h1>
					<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent'>Nuevo staff</button>
				</div>
				<div className='overflow-auto p-2'>
					<table className='table table-zebra table-xs table-pin-rows table-pin-cols bg-white mt-5'>
						<thead>
							<tr>
								<td></td>
								<td>Nombre</td>
								<td>Apellidos</td>
								<td>C. Emergencia</td>
								<td>Numero</td>
								<td>Subscripcion</td>
								<td>Inicio</td>
								<td>Vencimiento</td>
							</tr>
						</thead>
						<tbody className=' bg-white'>
							<tr>
								<td>1</td>
								<td>Alfredo</td>
								<td>Bautista</td>
								<td>Martha</td>
								<td>9612451155</td>
								<td>Black Plus</td>
								<td>14/07/2023</td>
								<td>14/08/2023</td>
							</tr>
							<tr>
								<td>1</td>
								<td>Alfredo</td>
								<td>Bautista</td>
								<td>Martha</td>
								<td>9612451155</td>
								<td>Black Plus</td>
								<td>14/07/2023</td>
								<td>14/08/2023</td>
							</tr>
							<tr>
								<td>1</td>
								<td>Alfredo</td>
								<td>Bautista</td>
								<td>Martha</td>
								<td>9612451155</td>
								<td>Black Plus</td>
								<td>14/07/2023</td>
								<td>14/08/2023</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

		</div>
	</>
};

export default GestionSucursal;
