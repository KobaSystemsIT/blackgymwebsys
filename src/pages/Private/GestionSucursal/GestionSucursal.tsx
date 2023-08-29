import React from 'react';
import { useParams } from 'react-router-dom';

export type GestionSucursalProps = {
}

const GestionSucursal: React.FC<GestionSucursalProps>  = ({}) => {
	const { idClub } = useParams<{ idClub: string }>();
	return <>
	<div className='container'>
		<div className='card'>
			<div className=' card-body'>
				<h1>Sucursal {idClub}</h1>
			</div>
		</div>
	</div>
	</>
};

export default GestionSucursal;
