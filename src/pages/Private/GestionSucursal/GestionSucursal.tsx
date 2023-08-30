
import { Clients } from '@/models/clients';
import { Staff } from '@/models/staff/staff';
import { AppStore } from '@/redux/store';
import { viewClientsData, viewStaffData } from '@/services/Clients/clients.service';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export type GestionSucursalProps = {
}

const GestionSucursal: React.FC<GestionSucursalProps> = ({ }) => {
	const userState = useSelector((store: AppStore) => store.user);
	const token = userState.token;

	const [clients, setClients] = useState<Clients[]>([]);
	const [staff, setStaff] = useState<Staff[]>([]);
	const params: any = useParams();
	const obtainClients = async () => {
		try {
			const { data } = await viewClientsData(params.idClub, token);
			setClients(data);
		} catch (error) {
			console.error(error);
		}
	}

	const obtainStaff = async () => {
		try{	
			const { data } = await viewStaffData(params.idClub, token);
			setStaff(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		obtainClients();
		obtainStaff();
	}, []);
	return <>
		<div className='grid p-2 gap-8 items-center'>
			<div className=' overflow-hidden'>
				<div className=' flex p-2 bg-gray-200 rounded-lg justify-between items-center'>
					<h1 className='text-black text-sm'>Clientes registrados</h1>
					<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent'>Nuevo cliente</button>
				</div>
				<div className='overflow-auto m-2'>
					<table className='table table-zebra table-xs table-pin-rows table-pin-cols bg-white mt-5'>
						<thead>
							<tr>
								<th>ID</th>
								<th>Usuario</th>
								<th>Apellido</th>
								<th>Contacto de Emergencia</th>
								<th>Número del contacto</th>
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
									<td>{client.emergencyContact}</td>
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
			<div className='overflow-hidden mt-10'>
				<div className=' flex p-2 bg-gray-200 rounded-lg justify-between items-center'>
					<h1 className='text-black text-sm'>Miembros del Staf</h1>
					<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent'>Nuevo staff</button>
				</div>
				<div className='overflow-auto p-2'>
					<table className='table table-zebra table-xs table-pin-rows table-pin-cols bg-white mt-5'>
					<thead>
							<tr>
								<th>Usuario</th>
								<th>Número de Teléfono</th>
								<th>Contacto de Emergencia</th>
								<th>Número del Contacto</th>
								<th>Activo</th>
								<th>Inicio de Subscripción</th>
								<th>Vencimiento</th>
							</tr>
						</thead>
						<tbody>
							{/* {staff.map((staff) => (
								<tr key={staff.idUser}>
									<td>{staff.idUser}</td>
									<td>{staff.username}</td>
									<td>{staff.lastName}</td>
									<td>{staff.nameEmergencyContact}</td>
									<td>{staff.nameSubscriptionType}</td>
									<td>{staff.isActive}</td>
									<td>{staff.startDate.toString().split('T')[0]}</td>
									<td>{staff.endDate.toString().split('T')[0]}</td>
								</tr>
							))} */}
						</tbody>
					</table>
				</div>
			</div>

		</div>
	</>
};

export default GestionSucursal;
