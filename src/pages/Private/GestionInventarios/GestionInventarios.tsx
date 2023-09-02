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
      <div className="grid-container">
        {clubes.map((club) => (
          <a href={`/Dashboard/Gestion_de_Inventarios/${club.idClub}`} className="card bordered" key={club.idClub}>
            <div className="flex flex-col h-full">
              <div className="flex flex-row items-start">
                <figure className="flex-none">
                  <img className="object-cover w-32 h-32" src="https://via.placeholder.com/150" alt="Fachada del club" />
                </figure>
                <div className="card-body flex-grow">
                  <h2 className="card-title">{club.nameClub}</h2>
                  <p>{club.addressClub}</p>
                </div>
              </div>
              <div className="flex justify-end items-end mt-auto">
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GestionInventarios;
