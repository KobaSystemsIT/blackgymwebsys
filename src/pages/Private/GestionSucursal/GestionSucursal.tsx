
import { ModalUsers } from '@/components/ModalUsers';
import { Roles } from '@/models';
import { Clients } from '@/models/clients';
import { Staff } from '@/models/staff/staff';
import { AppStore } from '@/redux/store';
import { viewClientsData, viewStaffData } from '@/services/Clients/clients.service';
import { faPlus, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export type GestionSucursalProps = {
}

const GestionSucursal: React.FC<GestionSucursalProps> = ({ }) => {
	const userState = useSelector((store: AppStore) => store.user);
	const tokenState = useSelector((store: AppStore) => store.token);
    const token = tokenState.token;

	const [clients, setClients] = useState<Clients[]>([]);
	const [staff, setStaff] = useState<Staff[]>([]);
	const params: any = useParams();
	const isAdmin = userState.rol === Roles.ADMIN;
	
	const obtainClients = async () => {
		try {
			const { data } = await viewClientsData(params.idClub, token);
			setClients(data);
		} catch (error) {
			console.error(error);
		}
	}

	const obtainStaff = async () => {
		try {
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
					<ModalUsers idUserType={1}></ModalUsers>
				</div>
				<div className='max-h-48 overflow-auto m-2'>
					<table className='table table-zebra table-xs table-pin-rows table-pin-cols bg-white mt-5 text-center'>
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
								<th>Acciones</th>
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
									<td>{client.startDate ? client.startDate.toString().split('T')[0] : "N/A"}</td>
									<td>{client.endDate ? client.endDate.toString().split('T')[0] : "N/A"}</td>
									<td>
										<div className='grid grid-flow-col gap-2'>
											<button title='Editar Usuario'><FontAwesomeIcon icon={faUserPen} className='h-4'/></button>
											<button title='Gestionar Subscripción'><FontAwesomeIcon icon={faPlus} className='h-4'/></button>
										</div>
									</td>
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
					{isAdmin && (
						<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent'>Nuevo staff</button>
					)}
				</div>
				<div className='max-h-48 overflow-auto p-2'>
					<table className='table table-zebra table-xs table-pin-rows table-pin-cols bg-white mt-5 text-center'>
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
									<td><button title='Editar Usuario'><FontAwesomeIcon icon={faUserPen} className='h-4'/></button></td>
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
