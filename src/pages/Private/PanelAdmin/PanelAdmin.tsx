import React, { useState, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import './PanelAdmin.css';
import { Clubes } from '@/models';
import { Categories } from '@/models/categories';
import { ModalClubes } from '@/components/ModalClubes';
import { ModalCategories } from '@/components/ModalCategories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { crudClub } from '@/services/Clubes/clubes.service';
import { crudCategoriesProducts } from '@/services/Categories/categories.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Alert } from '@/components/AlertComponent/AlertComponent';
import Swal from 'sweetalert2';

export type PanelAdminProps = {
}

const PanelAdmin: React.FC = () => {
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	const [clubes, setClubes] = useState<Clubes[]>([]);
	const [categories, setCategory] = useState<Categories[]>([]);

	const getClub = async () => {
		try {
			const { data } = await crudClub(1, '', '', '', 2, token);
			setClubes(data);
		} catch (error) {
			console.error(error);
		}
	}

	const getCategories = async () => {
		try {
			const { data } = await crudCategoriesProducts(1, '', 2, token);
			setCategory(data);
		} catch (error) {
			console.error(error);
		}
	}

	const deleteCategory = async (id: number) => {
		const confirmation = await Swal.fire({
			title: '¿Desea eliminar a esta categoría?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Sí',
			cancelButtonText: 'Cancelar',
		});

		if (confirmation.isConfirmed) {
			try {
				const response = await crudCategoriesProducts(id, '', 4, token);
				if (response) {
					Alert(response.mensaje, true);
					setTimeout(() => {
						window.location.reload();
					}, 2000);
				}
			} catch (error: any) {
				console.error(error);
				Alert(error, false)
			}
		}
	};

	const deleteClub = async (idClub: number) => {
		const confirmation = await Swal.fire({
			title: '¿Desea eliminar este club?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Sí',
			cancelButtonText: 'Cancelar',
		});

		if (confirmation.isConfirmed) {
			try {
				const result = await crudClub(idClub, '', '', '', 4, token);
				if (result) {
					Alert(result.mensaje, true);
					setTimeout(() => {
						window.location.reload();
					}, 3000)
				}
			} catch (error) {
				Swal.fire('Error', 'Hubo un error al procesar la solicitud.', 'error');
				console.log(error);
			}
		}
	};

	useLayoutEffect(() => {
		getClub();
		getCategories();
	}, []);

	return (
		<>
			<div className='grid p-2 gap-6 items-center'>
				<div className='overflow-hidden'>
					<div className='flex h-16 px-2 justify-between items-center'>
						<h1 className='text-black lg:text-lg md:text-lg text-sm text-center'>Clubes registrados</h1>
						<ModalClubes></ModalClubes>
					</div>
					<div className='grid shadow-xl border-2 rounded-2xl'>
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
													<a href={`/Dashboard/Panel_de_Administrador/Gestion_de_Club/${club.idClub}`} title='Gestión de Usuario'>
														<FontAwesomeIcon icon={faPenToSquare} className='h-4'></FontAwesomeIcon>
													</a>
													<button title='Gestionar Club'><FontAwesomeIcon icon={faTrash} className='h-4' onClick={() => deleteClub(club.idClub)} /></button>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className='overflow-hidden'>
					<div className='flex h-16 px-2 justify-between items-center'>
						<h1 className='text-black lg:text-lg md:text-lg text-sm text-center'>Categorías registradas</h1>
						<ModalCategories></ModalCategories>
					</div>
					<div className='grid shadow-xl border-2 rounded-2xl'>
						<div className='max-h-48 overflow-auto m-2'>
							<table className='table table-zebra table-xs table-pin-rows table-pin-cols bg-white text-center'>
								<thead>
									<tr>
										<th>ID</th>
										<th>Nombre</th>
									</tr>
								</thead>
								<tbody>
									{categories.map((category) => (
										<tr key={category.productCategoryID}>
											<td>{category.productCategoryID}</td>
											<td>{category.nameCategory}</td>
											<td>
												<div className='grid grid-flow-col gap-2'>
													<button title='Eliminar Category' onClick={() => deleteCategory(category.productCategoryID)}>
														<FontAwesomeIcon icon={faTrash} className='h-4' /></button>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PanelAdmin;
