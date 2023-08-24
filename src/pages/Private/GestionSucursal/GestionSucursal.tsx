import React from 'react';
import './GestionSucursal.css';
import { useParams } from 'react-router-dom';

export type GestionSucursalProps = {
}

const GestionSucursal: React.FC<GestionSucursalProps>  = ({}) => {
	const { idClub } = useParams<{ idClub: string }>();
	return <div>
	<h1>Detalles de la sucursal {idClub}</h1>
	{/* Renderiza los detalles y datos de la sucursal */}
  </div>;
};

export default GestionSucursal;
