import { Suppliers } from '@/models/suppliers/suppliers';
import { AppStore } from '@/redux/store';
import { crudSuppliers } from '@/services/Suppliers/suppliers.service';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './ModalPaySuppliers.css';

export type ModalPaySuppliersProps = {
}

const ModalPaySuppliers: React.FC<ModalPaySuppliersProps> = ({ }) => {
	const tokenState = useSelector((store: AppStore) => store.token);
	const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
	const token = tokenState.token;
	const [supplier, setSupplier] = useState<Suppliers[]>([]);

	const [supplierSelected, setSupplierSelected] = useState(0);
	const [comments, setComments] = useState('');

	const openModal = () => {
		window.modalPaySuppliers.showModal();
	};

	const closeModal = () => {
		window.modalPaySuppliers.close();
	}
	const getData = async () => {
		try {
			const { data } = await crudSuppliers(0, '', 2, token);
			setSupplier(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);


	return <>
		{/* <button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent'
			onClick={openModal}
		>
			<h1>Pago a proveedores</h1>
		</button>
		<dialog id="modalPaySuppliers" className="modal-box">
			<div>
				<h3 className="font-bold text-lg text-center m-4">Pago a proveedor</h3>
				<form className="grid text-black lg:text-sm text-xs gap-4">
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Proveedor:</span>
						</label>
						<select required
							onChange={(e) => setSupplierSelected(parseInt(e.target.value))}
							className='input input-bordered w-full'
						>
							<option value=''>Seleccione un proveedor</option>
							{supplier.map((supplier) => (
								<option key={supplier.idSupplier} value={supplier.idSupplier}>
									{supplier.nameSupplier}
								</option>
							))}
						</select>
					</div>
					<div className='grid lg:grid-cols-2 grid-flow-row gap-4'>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Monto a pagar:</span>
							</label>
							<input type="number" id="totalACobrar" name="totalACobrar" value={pagoCliente} onChange={(e) => calculateTotal(parseInt(e.target.value))} required className='input input-bordered w-full' />
						</div>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Método de pago:</span>
							</label>
							<select
								onChange={(e) => setPaymentSelected(parseInt(e.target.value))}
								className='input input-bordered w-full'
							>
								<option value=''>Seleccione un método de pago</option>
								{paymentOptions.map((pay) => (
									<option key={pay.idPaymentOption} value={pay.idPaymentOption}>
										{pay.paymentDescription}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className='form-control w-full'>
									<label className='label'>
										<span className='label-text'>Comentarios:</span>
									</label>
									<textarea value={comments} onChange={(e)=>setComments(e.target.value)} className="textarea textarea-bordered" placeholder="Comentarios"></textarea>
								</div>
					<div className='grid grid-cols-2 gap-6'>
						<button className=' btn btn-success btn-sm font-normal' onClick={newSale} disabled={isDisabled}>Agregar</button>
						<button type="button" className='btn btn-sm font-normal' onClick={closeModalVenta}>
							Cerrar
						</button>
					</div>
				</form>
				<br />
				{showEmptyFieldsAlert && (
					<div className="text-red-600">
						Por favor, complete todos los campos.
					</div>
				)}
			</div>
		</dialog> */}
	</>
};

export default ModalPaySuppliers;
