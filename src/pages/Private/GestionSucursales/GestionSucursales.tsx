import React, { useLayoutEffect, useState } from 'react';
import './GestionSucursales.css';
import { ClubesData } from '@/models/clubes';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { useParams } from 'react-router-dom';
import { getClubesData } from '@/services/Clubes/clubes.service';

export type GestionSucursalesProps = {};

const GestionSucursales: React.FC<GestionSucursalesProps> = ({ }) => {
  const tokenState = useSelector((store: AppStore) => store.token);
  const token = tokenState.token;

  const [clubesData, setClubesData] = useState<ClubesData[]>([]);
  const params: any = useParams();

  const obtainClubes = async () => {
    try {
      const { data } = await getClubesData(token);
      setClubesData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useLayoutEffect(() => {
    obtainClubes();
  }, []);

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-6">
        {clubesData.map((sucursal) => (
          <div key={sucursal.idClub} className="sucursal flex flex-col">
            <a href={`/Dashboard/Gestion_de_Sucursal/${sucursal.idClub}`}>
              <img src="https://blackgymfitclub.com/assets/LogoWhiteBlackGym-2e55f490.svg" alt="Logo" className="flex w-[70%]" />
              <div className="text-white p-2 text-start">{sucursal.nameClub}</div>
              <div className=" text-right text-white">
                <h1>Staffs Activos: {sucursal.StaffActivo}</h1>
                <h1>Clientes Activos: {sucursal.ClientesActivos}</h1>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GestionSucursales;