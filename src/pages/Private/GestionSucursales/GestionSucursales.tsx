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

	return <>
	<div>
	<a href={`/Dashboard/Gestion_de_Sucursal/${idClub}`}>Sucursal</a>
	</div>
	</>;
};

export default GestionSucursales;
