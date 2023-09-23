import React, { useEffect, useState } from 'react';
import './GestionInventarios.css';
import { getClubes } from '@/services/Clubes/clubes.service';
import { Clubes } from '@/models/clubes';

export type GestionInventariosProps = {
}

const GestionInventarios: React.FC<GestionInventariosProps> = ({}) => {
  const [clubes, setClubes] = useState<Clubes[]>([]);

  const obtainClubes = async () => {
    try {
      const { data } = await getClubes();
      setClubes(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    obtainClubes();
  }, []);

  return (
    <div className='gestioninventarios'>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-6">
        {clubes.map((sucursal) => (
          <div key={sucursal.idClub} className="sucursal flex flex-col">
            <a href={`/Dashboard/Inventario/${sucursal.idClub}`}>
              <img src="https://blackgymfitclub.com/assets/LogoWhiteBlackGym-2e55f490.svg" alt="Logo" className="flex w-[70%]" />
              <h1 className='text-white p-2 text-start font-semibold'>Inventario</h1>
              <h1 className='text-white p-2 text-center font-semibold text-club'>{sucursal.nameClub}</h1>
              {/* <div className=" text-right text-white">
                <h1>Staffs Activos: {sucursal.StaffActivo}</h1>
                <h1>Clientes Activos: {sucursal.ClientesActivos}</h1>
              </div> */}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GestionInventarios;
