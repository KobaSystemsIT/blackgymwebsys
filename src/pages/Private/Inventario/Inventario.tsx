import React, { useState, useEffect } from 'react';
import './Inventario.css';
import { useSelector } from 'react-redux';
import { AppStore } from "@/redux/store";
import { viewInventoryData } from "@/services";

export type InventarioProps = {}

const Inventario: React.FC<InventarioProps> = () => {
	const [error, setError] = useState<string | null>(null);
	const [inventoryData, setInventoryData] = useState<any[]>([]);

	// Acceder al token desde el estado de Redux
	const token = useSelector((store: AppStore) => store.user.token);

	useEffect(() => {
		// Define la función para obtener el inventario
		const getInventory = async () => {
			try {
				const response = await viewInventoryData('1', token); // Reemplaza '1' con el ID de tu club

				if (response.error) {
					// La solicitud no fue exitosa, maneja el error según corresponda
					setError(`Error: ${response.error}`);
				} else {
					// La solicitud fue exitosa, establece los datos del inventario
					setInventoryData(response.inventory); // Modifiqué esto para reflejar la estructura de la respuesta
				}
			} catch (error) {
				// Maneja los errores de red u otros errores aquí
				setError(`Error de red: ${error}`);
			}
		};

		// Llama a la función para obtener el inventario
		getInventory();
	}, [token]); // Asegúrate de incluir el token como dependencia para que se actualice cuando cambie

	return (
		<div>
			<div className='grid p-2 gap-8 items-center'>
				<div className=' overflow-hidden'>
					<div className=' flex p-2 bg-gray-200 rounded-lg justify-between items-center'>
						<h1 className='text-black text-sm'>Inventario</h1>
						<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent'>Nuevo producto</button>
					</div>
				</div>
			</div>
			<div className='inventory'>
				<h2>Inventario</h2>
				{error ? (
					<p>{error}</p>
				) : (
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Stock Actual</th>
								<th>Fecha de Reorden</th>
								<th>ID del Producto</th>
								<th>ID del Club</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{inventoryData.map((item) => (
								<tr key={item.inventoryID}>
									<td>{item.inventoryID}</td>
									<td>{item.currentStock}</td>
									<td>{item.dateReorder}</td>
									<td>{item.productID}</td>
									<td>{item.idClub}</td>
									<td>
										<button className='btn lg:btn-sm btn-xs bg-blue-500 text-white rounded-lg hover:bg-blue-700'>Editar</button>
										<button className='btn lg:btn-sm btn-xs bg-red-500 text-white rounded-lg hover:bg-red-700'>Eliminar</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

export default Inventario;
