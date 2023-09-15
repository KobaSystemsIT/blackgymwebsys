// import React, { useEffect } from 'react';
import './GestionSucursales.css';
import { Roles } from '@/models';
import { ClubesData } from '@/models/clubes';
import { getClubes } from '@/services/Clubes/clubes.service';
import { faPlus, faRotate, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getClubesData } from '../../../services/Clubes/clubes.service';

export type GestionSucursalesProps = {};

const GestionSucursales: React.FC<GestionSucursalesProps> = ({}) => {
  const clubState = useSelector((store: AppStore) => store.club);
  const userState = useSelector((store: AppStore) => store.user);
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;

  const [clubesData, setClubesData] = useState<ClubesData[]>([]);
  const params: any = useParams();
	const isAdmin = userState.rol === Roles.ADMIN;


  const obtainClubes = async () => {
    try {
      const { data } = await getClubesData(params.idClub, 1, token);
      setClubesData(data);
    } catch (error) {
      console.error(error)
    }
  }
  useLayoutEffect(() =>{
    obtainClubes();
  },[]);

  const sucursales = [
    { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOASbZNSKNuDeFv3nRAKwtPSzMwkkdX9CbrQ&usqp=CAU" },
  ];

  const img = [

  ];


  return (
    <div>
      <h1>Sucursales:</h1>
      <div className="sucursal-container">
        {clubesData.map((sucursal) => (
          <div key={sucursal.idClub} className="sucursal">
            <Link to={`/Dashboard/Gestion_de_Sucursal/${sucursal.idClub}`}>
              {sucursales.map((img) =>(
                <div className="imagen">
                <img src={img.imageUrl} />
                </div>
              ))}
              <div className="nombre">{sucursal.nameClub}</div>
              <div className="direccion">Miembros del staff activos : {sucursal.StaffActivo}</div>
              <div className="direccion">Clientes activos :{sucursal.ClientesActivos}</div>
              <div className="modal">
                <p>Hola</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GestionSucursales;