import React from 'react';
import { useParams } from 'react-router-dom';

export type GestionSucursalProps = {
}

const GestionSucursal: React.FC<GestionSucursalProps> = ({ }) => {
	const params = useParams();
	return <>
		<div className='container'>
			<div>
				<h1 className=' text-xl'>Gestión de Sucursal</h1>
			</div>
			<div>
			<div>
				<div className='flex justify-end'>
					<button className='btn btn-xs bg-black text-white hover:bg-slate-800'>Nuevo usuario</button>
				</div>
			</div>
			<div className='grid grid-rows-2 p-2'>
				<div className='overflow-auto'>
					<table className='table table-xs table-pin-rows table-pin-cols'>
						<thead>
							<tr>
								<th></th>
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
						<tbody>
							<tr>
								<th>1</th>
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
		</div>
	</>
};

export default GestionSucursal;
