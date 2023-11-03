import { Alert } from '@/components/AlertComponent/AlertComponent';
import { ModalCashRegister, ModalPagoProveedores, ModalPuntoDeVenta } from '@/components/ModalPuntoDeVenta/ModalPuntoDeVenta';
import { ModalUserVisitors } from '@/components/ModalUsers/ModalUsers';
import { UserVisitor } from '@/models';
import { POSData, POSVentas } from '@/models/pointOfSale/pointOfSale';
import { AppStore } from '@/redux/store';
import { openOrCloseCashRegister, pointOfSale } from '@/services/Products/products.service';
import { crudUserVisitor } from '@/services/Users/users.service';
import { faCircleCheck, faRightFromBracket, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import './PuntoVenta.css';
import { paySuppliers } from '@/services/Suppliers/suppliers.service';
import { toDate } from 'date-fns-tz';
import { PaySuppliers } from '@/models/suppliers/suppliers';

export type PuntoVentaProps = {
}

const PuntoVenta: React.FC<PuntoVentaProps> = ({ }) => {
	const userState = useSelector((store: AppStore) => store.user);
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	let params: any = useParams();

	const dispatch = useDispatch();

	const [ventas, setVentas] = useState<POSData[]>([]);
	const [ventasTot, setVentasTOT] = useState<POSVentas[]>([]);
	const [userVisitor, setUserVisitor] = useState<UserVisitor[]>([]);
	const [pagoProveedores, setPagoProveedores] = useState<PaySuppliers[]>([]);
	const [mostrarVisitantes, setMostrarVisitantes] = useState(false);
	const [isDisabled, setDisabled] = useState(false);

	const getVentas = async () => {
		try {
			const { data } = await pointOfSale(0, 0, 0, parseInt(params.idClub), 2, 0, token);
			setVentas(data);
		} catch (error) {
			console.log(error);
		};

		try {
			const { data } = await pointOfSale(0, 0, 0, parseInt(params.idClub), 3, 0, token);
			setVentasTOT(data);
		} catch (error) {
			console.log(error);
		};

		try {
			const { data } = await crudUserVisitor(0, '', params.idClub, '', 2, token);
			setUserVisitor(data);
		} catch (error) {
			console.log(error);
		};

		try {
			const { data } = await paySuppliers(0, 'mandamos a llamar a la funcion', 0, params.idClub, userState.idUser, '2000-01-01', 0, 2, token);
			setPagoProveedores(data);
		} catch (error) {
			console.log(error);
		}

		// try {
			//let idCaja = localStorage.getItem('idCaja');
			console.log(localStorage.getItem('idCaja'));
			//const { data } = await openOrCloseCashRegister(idCaja, 0, params.idClub, userState.idUser, 3, token);
		// }
	};

	const deleteUserVisitor = async (id: number) => {
		const confirmation = await Swal.fire({
			title: '¿Desea eliminar a este usuario?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Sí',
			cancelButtonText: 'Cancelar',
		});

		if (confirmation.isConfirmed) {
			try {
				setDisabled(true);
				const response = await crudUserVisitor(id, '', 0, '', 5, token);
				if (response) {
					Alert(response.mensaje, true);
					setTimeout(() => {
						window.location.reload();
					}, 2500);
				}
			} catch (error: any) {
				Alert(error, false);
				console.log(error);
			}
		}
	};

	const logInCheck = async (id: number, user: string) => {
		const usuario = user;
		const confirmation = await Swal.fire({
			title: '¿Checar entrada de ' + [usuario] + '?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Sí',
			cancelButtonText: 'Cancelar',
		});

		if (confirmation.isConfirmed) {
			try {
				const result = await crudUserVisitor(id, usuario, 0, '', 3, token);
				if (result) {
					Alert(result.mensaje, true);
					setTimeout(() => {
						window.location.reload();
					}, 2500);
				}
			} catch (error: any) {
				Alert(error, false);
				console.log(error);
			}
		};
	};

	const logOutCheck = async (id: number, user: string) => {
		const usuario = user;
		const confirmation = await Swal.fire({
			title: '¿Checar salida de ' + [usuario] + '?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Sí',
			cancelButtonText: 'Cancelar',
		});

		if (confirmation.isConfirmed) {
			try {
				const result = await crudUserVisitor(id, usuario, 0, '', 4, token);
				if (result) {
					Alert(result.mensaje, true);
					setTimeout(() => {
						window.location.reload();
					}, 2500);
				}
			} catch (error: any) {
				Alert(error, false);
				console.log(error);
			}
		};
	};

	useEffect(() => {
		getVentas();
	}, []);
	return (<>
		<div>
			<div className='flex flex-col h-16 px-2 items-center justify-center gap-4'>
				<h1 className='text-black lg:text-2xl md:text-lg text-base'>Punto de Venta</h1>
				<div className='grid grid-flow-col gap-4 justify-between'>
					<ModalPuntoDeVenta/>
					<ModalPagoProveedores/>
					<ModalCashRegister/>
				</div>
			</div>
			<div>
				<h1>
					ID DE CAJA: 1
				</h1>
				<h1>MONTO DE APERTURA: 400</h1>
			</div>
			<div className='grid lg:grid-flow-col gap-4'>
				<div className='overflow-hidden pt-10'>
					<div className='grid shadow-xl border-2 rounded-2xl'>
						<div className='max-h-48 overflow-auto m-2'>
							<table className='table table-zebra table-xs table-pin-rows table-pin-cols bg-white text-center'>
								<thead>
									<tr>
										<th>ID</th>
										<th>Producto vendido</th>
										<th>Total de productos</th>
										<th>Total de Venta</th>
										<th>Método de pago</th>
									</tr>
								</thead>
								<tbody>
									{ventas.map((ventas) => (
										<tr key={ventas.saleID}>
											<td>{ventas.saleID}</td>
											<td>{ventas.productName}</td>
											<td>{ventas.quantitySold}</td>
											<td>${ventas.totalAmount}.00</td>
											<td>{ventas.paymentDescription}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className='overflow-hidden pt-10'>
					<div className='grid shadow-xl border-2 rounded-2xl'>
						<div className='max-h-48 overflow-auto m-2'>
							<table className='table table-zebra table-xs table-pin-rows table-pin-cols bg-white text-center'>
								<thead>
									<tr>
										<th>ID</th>
										<th>Proveedor</th>
										<th>Total pagado</th>
										<th>Método de pago</th>
										<th>Concepto</th>
									</tr>
								</thead>
								<tbody>
									{pagoProveedores.map((pagos) => (
										<tr key={pagos.id}>
											<td>{pagos.id}</td>
											<td>{pagos.nameSupplier}</td>
											<td>${pagos.paymentAmount}.00</td>
											<td>{pagos.paymentDescription}</td>
											<td>{pagos.conceptPayment}</td>
											<td>{pagos.date}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div>
			<div className='flex flex-col gap-4 justify-center align-middle text-center pt-10'>
						<div>
							<h1 className='font-bold text-xl'>Total de ventas del día</h1>
						</div>
						<div className="flex stats stats-horizontal gap-4 justify-center">
							{ventasTot.map((ventas, index) => (
								<div className={`stat gap-4 rounded-xl ${ventas.paymentDescription === 'Efectivo' ? ' bg-lime-500' : ''}
							${ventas.paymentDescription === 'Transferencia' ? 'bg-yellow-500' : ''}`} key={index}>
									<div className="stat-title font-semibold">{ventas.paymentDescription}</div>
									<div className="stat-value">${ventas.ventas}.00</div>
								</div>
							))}
						</div>
					</div>
			</div>
			<hr />
			<div className='overflow-hidden mt-10'>
				<div>
					<div className='flex h-16 px-2 justify-between items-center'>
						<button className='text-black lg:text-lg md:text-lg text-sm' onClick={() => setMostrarVisitantes(!mostrarVisitantes)}>Clientes Visitantes</button>
						<ModalUserVisitors></ModalUserVisitors>
					</div>
					<hr className={`content-container ${mostrarVisitantes ? 'hide' : 'show'}`} />
					<div className={`content-container grid shadow-xl border-2 rounded-xl ${mostrarVisitantes ? 'show' : 'hide'}`}>
						<div className=' max-h-56 overflow-auto m-2'>
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
											<td>{user.arrivalHour ? (() => {
												const dateTimeString = user.arrivalHour.replace('Z', '');
												const dateTime = DateTime.fromISO(dateTimeString, { zone: 'utc' });
												const formattedTime = dateTime.toFormat('yyyy-MM-dd hh:mm:ss a');
												return formattedTime;
											})() : "N/A"}</td>
											<td>{user.exitHour ? (() => {
												const dateTimeString = user.exitHour.replace('Z', '');
												const dateTime = DateTime.fromISO(dateTimeString, { zone: 'utc' });
												const formattedTime = dateTime.toFormat('yyyy-MM-dd hh:mm:ss a');
												return formattedTime;
											})() : "N/A"}</td>
											<td>{user.visitas}</td>
											<td className='flex justify-center items-center align-middle gap-6'>
												<button title="Checar entrada" disabled={isDisabled} onClick={() => logInCheck(user.id, user.username)}>
													<FontAwesomeIcon icon={faCircleCheck} className="h-4" />
												</button>
												<button title="Checar Salida" disabled={isDisabled} onClick={() => logOutCheck(user.id, user.username)}>
													<FontAwesomeIcon icon={faRightFromBracket} className="h-4" />
												</button>
												<button title="Eliminar Usuario" disabled={isDisabled} onClick={() => deleteUserVisitor(user.id)}>
													<FontAwesomeIcon icon={faTrash} className="h-4" />
												</button>
												<a title="Contactar por Whatsapp"
													href={'https://api.whatsapp.com/send/?phone=52' + (user.phone) + '&text=¡Hola '
														+ (user.username) +
														'! 🏋%E2%80%8D♂%0A%0ANuestro sistema ha detectado '
														+ (user.visitas) +
														' visitas tuyas a nuestras sucursales, y nos gustaría invitarte a unirte a nuestra apasionada comunidad. Con una membresía de acceso completo, podrás disfrutar de una experiencia de gimnasio sin igual 💪%0A%0ANo dudes en contactarnos si tienes alguna pregunta o necesitas más información sobre nuestras membresías. Estamos aquí para ayudarte.%0A%0A¡Te esperamos en cualquiera de nuestras sucursales! 🤗%0A%0Ablackgymfitclub.com/planes%0A%0AAtentamente, El equipo de Black Gym Fitness Club 🏋️'}
													target="_blank">
													<svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
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
	</>);
};

export default PuntoVenta;
