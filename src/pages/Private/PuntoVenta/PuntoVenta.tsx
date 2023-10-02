import { ModalPuntoDeVenta } from '@/components/ModalPuntoDeVenta';
import { POSData, POSVentas } from '@/models/pointOfSale/pointOfSale';
import { AppStore } from '@/redux/store';
import { pointOfSale } from '@/services/Products/products.service';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './PuntoVenta.css';

export type PuntoVentaProps = {
}

const PuntoVenta: React.FC<PuntoVentaProps> = ({ }) => {
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	let params: any = useParams();

	const [ventas, setVentas] = useState<POSData[]>([]);
	const [ventasTot, setVentasTOT] = useState<POSVentas[]>([]);

	const getVentas = async () => {
		try {
			const { data } = await pointOfSale(0, 0, 0, parseInt(params.idClub), 2, 0, token);
			setVentas(data);
		} catch (error) {
			console.log(error);
		}

		try {
			const { data } = await pointOfSale(0, 0, 0, parseInt(params.idClub), 3, 0, token);
			setVentasTOT(data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getVentas();
	}, []);
	return (<>
		<div>
			<div className='flex flex-col h-16 px-2 items-center justify-center gap-4'>
				<h1 className='text-black lg:text-2xl md:text-lg text-base'>Punto de Venta</h1>
				<div className='grid grid-flow-col'>
					<ModalPuntoDeVenta></ModalPuntoDeVenta>
				</div>
			</div>			
			<div>
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
			</div>
			<hr />
		</div>
	</>);
};

export default PuntoVenta;
