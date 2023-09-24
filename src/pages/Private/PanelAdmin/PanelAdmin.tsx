import React, { useState, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import './PanelAdmin.css';
import { Clubes, UserSys } from '@/models';
import { Categories } from '@/models/categories';
import { Products } from '@/models/products';
import { ModalClubes } from '@/components/ModalClubes';
import { ModalCategories } from '@/components/ModalCategories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faPenToSquare, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { crudClub } from '@/services/Clubes/clubes.service';
import { crudCategoriesProducts } from '@/services/Categories/categories.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { crudProducts } from '@/services/Products/products.service';
import ModalProducts from '@/components/ModalProducts/ModalProducts';
import { Alert } from '@/components/AlertComponent/AlertComponent';
import Swal from 'sweetalert2';
import '../GestionSucursal'
import { ModalUserSystem } from '@/components/ModalUsers/ModalUsers';
import { crudUserSystem } from '@/services/Users/users.service';
import { useParams } from 'react-router-dom';

export type PanelAdminProps = {
}

const PanelAdmin: React.FC = () => {
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	const params: any = useParams();
	const [clubes, setClubes] = useState<Clubes[]>([]);
	const [categories, setCategory] = useState<Categories[]>([]);
	const [products, setProducts] = useState<Products[]>([]);
	const [userSys, setUserSys] = useState<UserSys[]>([]);

	const [mostrarClubes, setMostrarClubes] = useState(true);
	const [mostrarCategorias, setMostrarCategorias] = useState(false);
	const [mostrarProductos, setMostrarProductos] = useState(false);
	const [mostrarUsuarios, setMostrarUsuarios] = useState(true);
	const [isDisabled, setDisabled] = useState(false);

	const getData = async () => {
		try {
			const { data } = await crudClub(1, '', '', '', 2, token);
			setClubes(data);
		} catch (error) {
			console.error(error);
		};

		try {
			const { data } = await crudCategoriesProducts(1, '', 2, token);
			setCategory(data);
		} catch (error) {
			console.error(error);
		};

		try {
			const { data } = await crudProducts(0, '', 0, 0, 2, token);
			setProducts(data);
		} catch (error) {
			console.error(error);
		};

		try {
			const { data } = await crudUserSystem(0, '', '', 0, 2, token);
			setUserSys(data);
		} catch (error) {
			console.log(error);
		}
	};

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
				setDisabled(true);
				const response = await crudCategoriesProducts(id, '', 4, token);
				if (response) {
					Alert(response.mensaje, true);
					setTimeout(() => {
						setDisabled(false);
						window.location.reload();
					}, 2500);
				}
			} catch (error: any) {
				console.error(error);
				Alert(error, false)
			}
		}
	};

	const deleteProduct = async (idProduct: number) => {
		const confirmation = await Swal.fire({
			title: '¿Desea eliminar a esta categoría?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Sí',
			cancelButtonText: 'Cancelar',
		});

		if (confirmation.isConfirmed) {
			try {
				setDisabled(true);
				const response = await crudProducts(idProduct, '', 0, 0, 4, token);
				if (response) {
					Alert(response.mensaje, true);
					setTimeout(() => {
						setDisabled(false);
						window.location.reload();
					}, 2500)
				}
			} catch (error) {
				console.log(error);
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
				setDisabled(true);
				const result = await crudClub(idClub, '', '', '', 4, token);
				if (result) {
					Alert(result.mensaje, true);
					setTimeout(() => {
						setDisabled(false);
						window.location.reload();
					}, 2500)
				}
			} catch (error) {
				Swal.fire('Error', 'Hubo un error al procesar la solicitud.', 'error');
				console.log(error);
			}
		}
	};

	const deleteUser = async (adminID: number) => {
		const confirmation = await Swal.fire({
			title: '¿Desea eliminar este usuario?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Sí',
			cancelButtonText: 'Cancelar',
		});

		if (confirmation.isConfirmed) {
			try {
				setDisabled(true);
				const result = await crudUserSystem(adminID, '', '', 0, 4, token);
				if(result) {
					Alert(result.mensaje, true);
					setTimeout(() => {
						setDisabled(false);
						window.location.reload();
					}, 2500)
				}
			} catch (error:any) {
				Alert(error, false);
			}
		}
	}

	useLayoutEffect(() => {
		getData();
	}, []);

	return (
		<>
			<div className='grid p-2 gap-6 items-center'>
				{/* {'Clubes'} */}
				<div className='overflow-hidden'>
					<div className='flex h-16 px-2 justify-between items-center'>
						<button className='text-black lg:text-lg md:text-lg text-sm text-center' onClick={() => setMostrarClubes(!mostrarClubes)}>Clubes registrados</button>
						<ModalClubes></ModalClubes>
					</div>
					<hr className={`content-container mb-2 ${mostrarClubes ? 'hide' : 'show'}`} />
					<div className={`content-container grid shadow-xl border-2 rounded-2xl ${mostrarClubes ? 'show' : 'hide'}`}>
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
													<a href={`/Dashboard/Panel_de_Administrador/Gestion_de_Club/${club.idClub}`} title='Gestión de Club'>
														<FontAwesomeIcon icon={faPenToSquare} className='h-4'></FontAwesomeIcon>
													</a>
													<button title='Eliminar Club' disabled={isDisabled}><FontAwesomeIcon icon={faTrash} className='h-4' onClick={() => deleteClub(club.idClub)}/></button>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				{/* {'Categorias y productos'} */}
				<div className='overflow-hidden grid lg:grid-flow-col gap-4'>
					<div>
						<div className='flex h-16 px-2 justify-between items-center'>
							<button className='text-black lg:text-lg md:text-lg text-sm text-center' onClick={() => setMostrarCategorias(!mostrarCategorias)}>Categorías registradas</button>
							<ModalCategories></ModalCategories>
						</div>
						<hr className={`content-container mb-2 ${mostrarCategorias ? 'hide' : 'show'}`} />
						<div className={`grid content-container shadow-xl border-2 rounded-2xl ${mostrarCategorias ? 'show' : 'hide'}`}>
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
														<button title='Eliminar Categoría' disabled={isDisabled} onClick={() => deleteCategory(category.productCategoryID)}>
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
					<div>
						<div className='flex h-16 px-2 justify-between items-center'>
							<button className='text-black lg:text-lg md:text-lg text-sm text-center' onClick={() => setMostrarProductos(!mostrarProductos)}>Productos registrados</button>
							<ModalProducts></ModalProducts>
						</div>
						<hr className={`content-container mb-2 ${mostrarProductos ? 'hide' : 'show'}`} />
						<div className={`grid content-container shadow-xl border-2 rounded-2xl ${mostrarProductos ? 'show' : 'hide'}`}>
							<div className='max-h-48 overflow-auto m-2'>
								<table className='table table-zebra table-xs table-pin-rows table-pin-cols bg-white text-center'>
									<thead>
										<tr>
											<th>ID</th>
											<th>Nombre</th>
											<th>Precio</th>
										</tr>
									</thead>
									<tbody>
										{products.map((product) => (
											<tr key={product.productID}>
												<td>{product.productID}</td>
												<td>{product.productName}</td>
												<td>${product.productPrice}.00</td>
												<td>
													<div className='grid grid-flow-col gap-2'>
														<button title='Editar Product'><FontAwesomeIcon icon={faPenToSquare} className='h-4' /></button>
														<button title='Eliminar producto' disabled={isDisabled}><FontAwesomeIcon icon={faTrash} className='h-4' onClick={() => deleteProduct(product.productID)} /></button>
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
				{/* {'Usuarios del sistema'} */}
				<div className='overflow-hidden'>
					<div className='flex h-16 px-2 justify-between items-center'>
						<button className='text-black lg:text-lg md:text-lg text-sm text-center' onClick={() => setMostrarUsuarios(!mostrarUsuarios)}>Usuarios del Sistema</button>
						<ModalUserSystem></ModalUserSystem>
					</div>
					<hr className={`content-container mb-2 ${mostrarUsuarios ? 'hide' : 'show'}`} />
					<div className={`content-container grid shadow-xl border-2 rounded-2xl ${mostrarUsuarios ? 'show' : 'hide'}`}>
						<div className='max-h-48 overflow-auto m-2'>
							<table className='table table-zebra table-xs table-pin-rows table-pin-cols bg-white text-center'>
								<thead>
									<tr>
										<th>ID</th>
										<th>Nombre</th>
										<th>Tipo de Usuario</th>
										<th>Acciones</th>
									</tr>
								</thead>
								<tbody>
									{userSys.map((user) => (
										<tr key={user.adminID}>
											<td>{user.adminID}</td>
											<td>{user.username}</td>
											<td>{user.nameUserType}</td>
											<td>
												<div className='grid grid-flow-col gap-2'>
													{/* <a href={`/Dashboard/Panel_de_Administrador/Gestion_de_Usuario/${user.adminID}`} title='Gestión de Usuario'>
														<FontAwesomeIcon icon={faUserPen} className='h-4'></FontAwesomeIcon>
													</a> */}
													<button title='Eliminar usuario' disabled={isDisabled}><FontAwesomeIcon icon={faTrash} className='h-4' onClick={() => deleteUser(user.adminID)}/></button>
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
