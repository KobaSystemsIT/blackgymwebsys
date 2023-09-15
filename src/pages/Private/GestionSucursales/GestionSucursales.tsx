import React, { useLayoutEffect, useState } from 'react';
import './GestionSucursales.css';
import { Roles } from '@/models';
import { ClubesData } from '@/models/clubes';
import { faUser, faUsersRectangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { useParams } from 'react-router-dom';
import { getClubesData } from '@/services/Clubes/clubes.service';

export type GestionSucursalesProps = {};

const GestionSucursales: React.FC<GestionSucursalesProps> = ({}) => {
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;

  const [clubesData, setClubesData] = useState<ClubesData[]>([]);
  const params: any = useParams();

  const obtainClubes = async () => {
    try {
      const { data } = await getClubesData(params.idClub, 1, token);
      setClubesData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useLayoutEffect(() =>{
    obtainClubes();
  },[]);

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4">
        {clubesData.map((sucursal) => (
          <div key={sucursal.idClub} className="sucursal flex flex-col">
            <a href={`/Dashboard/Gestion_de_Sucursal/${sucursal.idClub}`}>
              <img src="https://blackgymfitclub.com/assets/LogoWhiteBlackGym-2e55f490.svg" alt="Logo" className="logo" />
              <div className="nombre">{sucursal.nameClub}</div>
              <div className="iconos">
                <div className="icono">
                  <FontAwesomeIcon icon={faUsersRectangle} /> Staff: {sucursal.StaffActivo}
                </div>
                <div className="icono">
                  <FontAwesomeIcon icon={faUser} /> Usuarios: {sucursal.ClientesActivos}
                </div>
              </div>
              <div className="modal">
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GestionSucursales;