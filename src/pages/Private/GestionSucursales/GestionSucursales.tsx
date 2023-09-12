import React, { useEffect } from 'react';
import './GestionSucursales.css';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { Link } from 'react-router-dom';

export type GestionSucursalesProps = {};

const GestionSucursales: React.FC<GestionSucursalesProps> = ({}) => {
  const clubState = useSelector((store: AppStore) => store.club);

  const sucursales = [
    { idClub: 1, nameClub: "BlackGym Oriente", address: "oriente", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOASbZNSKNuDeFv3nRAKwtPSzMwkkdX9CbrQ&usqp=CAU" },
    { idClub: 2, nameClub: "BlackGym Teran", address: "teran", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOASbZNSKNuDeFv3nRAKwtPSzMwkkdX9CbrQ&usqp=CAU" },
    { idClub: 3, nameClub: "BlackGym Poniente", address: "Poniente", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOASbZNSKNuDeFv3nRAKwtPSzMwkkdX9CbrQ&usqp=CAU" },
    { idClub: 4, nameClub: "BlackGym Villaflores", address: "Villaflores", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOASbZNSKNuDeFv3nRAKwtPSzMwkkdX9CbrQ&usqp=CAU" },
    { idClub: 5, nameClub: "BlackGym Las Palmas", address: "Las Palmas", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOASbZNSKNuDeFv3nRAKwtPSzMwkkdX9CbrQ&usqp=CAU" },
    { idClub: 6, nameClub: "BlackGym Sur", address: "Sur", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOASbZNSKNuDeFv3nRAKwtPSzMwkkdX9CbrQ&usqp=CAU" },	
  ];

  const img = [

  ];


  return (
    <div>
      <h1>Sucursales:</h1>
      <div className="sucursal-container">
        {sucursales.map((sucursal) => (
          <div key={sucursal.idClub} className="sucursal">
            <Link to={`/Dashboard/Gestion_de_Sucursal/${sucursal.idClub}`}>
              <div className="imagen">
                <img src={sucursal.imageUrl} alt={`Imagen de ${sucursal.nameClub}`} />
              </div>
              <div className="nombre">{sucursal.nameClub}</div>
              <div className="direccion">{sucursal.address}</div>
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