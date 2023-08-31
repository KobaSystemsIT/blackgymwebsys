import React, { useState, useEffect } from 'react';
import './Inventario.css';
import { useSelector } from 'react-redux';
import { AppStore } from "@/redux/store";
import {viewInventoryData} from "@/services";

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
					setInventoryData(response.data);
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
						<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent'>Nuevo producto</button>\
					</div>
				</div>
			</div>
			// Hacer el map de inventoryData aquí usando map
			k
			<div className='inventory'>Inventory</div>
			{/* Renderiza la tabla de inventario utilizando inventoryData en tu JSX */}
		</div>
			
	);
}

export default Inventario;