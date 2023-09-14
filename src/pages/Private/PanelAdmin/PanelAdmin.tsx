import React, { useState, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import './PanelAdmin.css';
import { Clubes } from '@/models';
import { ModalClubes } from '@/components/ModalClubes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { crudClub } from '@/services/Clubes/clubes.service';

export type PanelAdminProps = {
}

const PanelAdmin: React.FC = () => {
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	const [clubes, setClubes] = useState<Clubes[]>([]);

	// lista de acciones para crudClub:
	// 1 : crear club
	// 2 : traer clubes
	// 3 : editar clubes
	// 4 : eliminar clubes

	const getClub = async () => {
		try {
			const { data } = await crudClub(1, '', '', '', 2, token);
			setClubes(data);
		} catch (error) {
			console.error(error);
		}
	}

	useLayoutEffect(() => {
		getClub();
	}, []);

	return (
		<div className='grid p-2 gap-4 items-center'>
			<div className='overflow-hidden'>
				<div className=' flex p-2 bg-gray-200 rounded-lg justify-between items-center'>
					<h1 className='text-black text-sm'>Clubes registrados</h1>
					<ModalClubes></ModalClubes>
				</div>
			</div>
			<div className='max-h-48 overflow-auto m-2'>
				<table className='table table-zebra table-xs table-pin-rows table-pin-cols bg-white text-center'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Direccion</th>
						</tr>
					</thead>
					<tbody>
						{clubes.map((club) => (
							<tr key={club.idClub}>
								<td>{club.idClub}</td>
								<td>{club.nameClub}</td>
								<td>{club.addressClub}</td>
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
	);
};

export default PanelAdmin;
