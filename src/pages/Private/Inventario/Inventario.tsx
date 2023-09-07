import React, { useState, useEffect } from 'react';
import './Inventario.css';
import { useSelector } from 'react-redux';
import { AppStore } from "@/redux/store";
import { viewInventoryData } from "@/services";
import { useParams } from 'react-router-dom';
import { faPlus, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Inventory } from '@/models/inventory/inventory';

export type InventarioProps = {};

const Inventario: React.FC<InventarioProps> = () => {

  const userState = useSelector((store: AppStore) => store.user);
	const token = userState.token;

  const [inventory, setInventoryData] = useState<Inventory[]>([]);
  const params: any = useParams();

  const obtainInventoryData = async () => {
    try {
      const {inventory} = await viewInventoryData(params.idClub, token);
      console.log(inventory)
      setInventoryData(inventory);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
		obtainInventoryData();
	}, []);
  
  return (
    <div>
      <div className='grid p-2 gap-8 items-center'>
        <div className=' overflow-hidden'>
          <div className=' flex p-2 bg-gray-200 rounded-lg justify-between items-center'>
            <h1 className='text-black text-sm'>Inventario</h1>
            <button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent'>Nuevo producto</button>
          </div>
        </div>
      </div>
      <div className='max-h-48 overflow-auto m-2'>
      <table className='table table-zebra table-xs table-pin-rows table-pin-cols bg-white mt-5 text-center'>
						<thead>
							<tr>
								<th>ID</th>
								<th>Producto</th>
								<th>Stock</th>
								<th>Fecha</th>
							</tr>
						</thead>
						<tbody>
							{inventory.map((data) => (
								<tr key={data.inventoryID}>
									<td>{data.inventoryID}</td>
									<td>{data.productName}</td>
									<td>{data.currentStock}</td>
									<td>{data.dateReorder ? data.dateReorder.toString().split('T')[0] : "N/A"}</td>
									<td>
										<div className='grid grid-flow-col gap-2'>
											<button title='Editar Usuario'><FontAwesomeIcon icon={faUserPen} className='h-4'/></button>
											<button title='Gestionar Subscripción'><FontAwesomeIcon icon={faPlus} className='h-4'/></button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
    </div>
  );
};

export default Inventario;