import React from 'react';
import './GestionInventarios.css';

export type GestionInventariosProps = {
}

type Sucursal = {
  idClub: string;
  nombre: string;
  totalProductos: number;
  inversion: number;
};

const data: Record<string, Sucursal> = {
  item1: { idClub: "1", nombre: "Sucursal 1", totalProductos: 100, inversion: 2000 },
  item2: { idClub: "2", nombre: "Sucursal 2", totalProductos: 150, inversion: 3000 },
  item3: { idClub: "3", nombre: "Sucursal 2", totalProductos: 150, inversion: 3000 },
  item4: { idClub: "4", nombre: "Sucursal 2", totalProductos: 150, inversion: 3000 },
  item5: { idClub: "5", nombre: "Sucursal 2", totalProductos: 150, inversion: 3000 },
  item6: { idClub: "6", nombre: "Sucursal 2", totalProductos: 150, inversion: 3000 },
};

const GestionInventarios: React.FC<GestionInventariosProps> = ({}) => {
  const sucursales = Object.keys(data).map(key => ({
    ...data[key]
  }));

  return (
    <div className='gestioninventarios'>
      <div className="grid-container">
        {sucursales.map((sucursal, index) => (
          <div className="grid-item" key={index}>
            <h2>{sucursal.nombre}</h2>
            <p>Total de productos: {sucursal.totalProductos}</p>
            <p>Total de inversión: {sucursal.inversion}</p>
            <a href={`/Dashboard/Gestion_de_Inventario/${sucursal.idClub}`}>Ver inventario</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GestionInventarios;
