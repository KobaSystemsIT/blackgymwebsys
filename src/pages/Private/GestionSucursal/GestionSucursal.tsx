import React from 'react';
import { useParams } from 'react-router-dom';

export type GestionSucursalProps = {
}

const GestionSucursal: React.FC<GestionSucursalProps> = ({ }) => {
	
	const params = useParams();
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
								<td>ID</td>
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
								<td>ID</td>
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
