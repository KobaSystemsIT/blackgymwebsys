import React from 'react';
import './GestionSucursales.css';
import { PrivateRoutes } from '@/models';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { Link, useNavigate } from 'react-router-dom';

export type GestionSucursalesProps = {
}

const GestionSucursales: React.FC<GestionSucursalesProps>  = ({}) => {
	const clubState = useSelector((store: AppStore) => store.club); 
	const idClub = ('' + clubState.idClub + '');
	const navigate = useNavigate();

  const handleNavigateToGestionSucursal = (idClub: string) => {
    navigate(`/Dashboard/GestionSucursal/${idClub}`);
  };
	return <>
	<div>
	<button onClick={() => handleNavigateToGestionSucursal(idClub)}>Ir a Sucursal 123</button>
		<br />
		<hr />
	</div>
	</>;
};

export default GestionSucursales;
