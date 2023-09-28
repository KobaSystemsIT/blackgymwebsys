import { ModalPuntoDeVenta } from '@/components/ModalPuntoDeVenta';
import React from 'react';
import './PuntoVenta.css';

export type PuntoVentaProps = {
}

const PuntoVenta: React.FC<PuntoVentaProps> = ({ }) => {
	return (<>
		<div>
			<div className='flex h-16 px-2 justify-between items-center'>
				<h1 className='text-black lg:text-2xl md:text-lg text-base'>Punto de Venta</h1>
				<ModalPuntoDeVenta></ModalPuntoDeVenta>
			</div>
		</div>
	</>);
};

export default PuntoVenta;
