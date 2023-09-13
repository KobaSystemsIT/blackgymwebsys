import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { Roles } from '@/models';
import { useParams } from 'react-router-dom';
import './PanelAdmin.css';
import { Clubes } from '@/models';
import { getClubes } from '@/services/Clubes/clubes.service';
import { ModalClubes } from '@/components/ModalClubes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRotate, faUserPen } from '@fortawesome/free-solid-svg-icons';

export type PanelAdminProps = {
}

const PanelAdmin: React.FC = () => {
	const userState = useSelector((store: AppStore) => store.user);
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;

	const [clubes, setClubes] = useState<Clubes[]>([]);
	const params: any = useParams();
	const isAdmin = userState.rol === Roles.ADMIN;

	const getClub = async () => {
		try {
			const { data } = await getClubes();
			setClubes(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getClub();
	}, []);

	return (
		<>
			<div className='grid p-2 gap-8 items-center'>
				<div className='overflow-hidden'>
					<div className=' flex p-2 bg-gray-200 rounded-lg justify-between items-center'>
						<h1 className='text-black text-sm'>Clubes registrados</h1>
						<ModalClubes></ModalClubes>
					</div>
				</div>
				<div className='max-h-48 overflow-auto m-2'>
					<table className='table table-zebra table-xs table-pin-rows table-pin-cols bg-white mt-5 text-center'>
						<thead>
							<tr>
								<th>ID</th>
								<th>Nombre</th>
								<th>Direccion</th>
							</tr>
						</thead>
						<tbody>
							{clubes.map((club) => (
								<tr key={club.nameClub}>
									<td>{club.address}</td>
									<td>
										<div className='grid grid-flow-col gap-2'>
											<button title='Editar Club'><FontAwesomeIcon icon={faUserPen} className='h-4' /></button>
											<button title='Gestionar Club'><FontAwesomeIcon icon={faPlus} className='h-4' /></button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default PanelAdmin;
