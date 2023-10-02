import { PaymentOptions } from '@/models/paymentOptions/paymentOptions';
import { Products } from '@/models/products';
import { AppStore } from '@/redux/store';
import { getPaymentData } from '@/services/PaymentOptions/paymentoptions.service';
import { crudProducts, pointOfSale } from '@/services/Products/products.service';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Alert } from '../AlertComponent/AlertComponent';
import './ModalPuntoDeVenta.css';

export type ModalPuntoDeVentaProps = {
}

const ModalPuntoDeVenta: React.FC<ModalPuntoDeVentaProps> = ({ }) => {
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
	const params: any = useParams();

	const [products, setProducts] = useState<Products[]>([]);
	const [paymentOptions, setPaymentOptions] = useState<PaymentOptions[]>([]);
	const [idProduct, setIdProduct] = useState(0);
	const [amountProduct, setAmountProduct] = useState(0);
	const [isDisabled, setDisabled] = useState(false);
	const [total, setTotal] = useState(0);
	const [pagoCliente, setPagoCliente] = useState(0);
	const [restate, setRestate] = useState(0);

	const [paymentSelected, setPaymentSelected] = useState(0);

	const openModal = () => {
		window.modalPuntoDeVenta.showModal();
	};

	const closeModalVenta = () => {
		setIdProduct(0);
		setAmountProduct(0);
		setTotal(0);
		setPagoCliente(0);
		setRestate(0);
		window.modalPuntoDeVenta.close();
	};

	const handleProductChange = (event: any) => {
		const selectedProduct = parseInt(event.target.value, 10)
		if (selectedProduct) {
			setIdProduct(selectedProduct);
		}
	};

	const handleAmountChange = (event: any) => {
		const selectedProduct = parseInt(event.target.value, 10);
		const targetClub = products.find((product) => product.productID === idProduct);
		let valor: any = (targetClub?.productPrice)?.toString();

		if (selectedProduct && !isNaN(parseFloat(valor))) {
			let total: number = selectedProduct * parseFloat(valor);
			setTotal(total);
			setAmountProduct(selectedProduct);
		} else {
			setTotal(0);
			setAmountProduct(selectedProduct);
		}
	};

	const calculateTotal = (pagaCliente: number) => {
		setPagoCliente(pagaCliente);
		let totalLocal = pagaCliente - total;
		setRestate(totalLocal);
	};

	const getProducts = async () => {
		try {
			const { data } = await crudProducts(1, '', 1, 1, 2, token);
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	};

	const newSale = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (idProduct === 0 || amountProduct === 0) {
			setShowEmptyFieldsAlert(true);
		} else {
			try {
				setShowEmptyFieldsAlert(false);
				setDisabled(true);
				//console.log(amountProduct, parseFloat(parseInt), idProduct, parseInt(params.idClub), token);
				const result = await pointOfSale(amountProduct, total, idProduct, parseInt(params.idClub), 1, paymentSelected, token);
				if (result) {
					Alert(result.mensaje, true);
					setTimeout(() => {
						closeModalVenta();
						setDisabled(false);
						window.location.reload()
					}, 2500);
				}
			} catch (error) {
				setTimeout(() => {
					Alert('Hubo un error al procesar la solicitud', false)
				}, 3000)
			}
		}
	}

	const getPayment = async () => {
		try {
			const { data } = await getPaymentData(token);
			setPaymentOptions(data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getProducts();
		getPayment();
	}, []);

	return (
		<>
			<button className='btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent'
				onClick={openModal}
			>
				<h1>Nueva Venta</h1>
			</button>
			<dialog id="modalPuntoDeVenta" className="modal-box">
				<div>
					<h3 className="font-bold text-lg text-center m-4">Nueva Venta</h3>
					<form className="grid text-black lg:text-sm text-xs gap-4">
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Producto:</span>
							</label>
							<select required
								onChange={handleProductChange}
								className='input input-bordered w-full'
							>
								<option value=''>Seleccione un producto</option>
								{products.map((products) => (
									<option key={products.productID} value={products.productID}>
										{products.productName}
									</option>
								))}
							</select>
						</div>
						<div className='grid lg:grid-cols-2 grid-flow-row gap-4'>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text'>¿Cuantos productos son?:</span>
								</label>
								<input type="number" id="currentStock" name="currentStock" onChange={handleAmountChange} required className='input input-bordered w-full' />
							</div>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text'>Costo por productos:</span>
								</label>
								<input type="text" id="currentStock" name="currentStock" value={total} onChange={(e) => setTotal(parseInt(e.target.value))} required className='input input-bordered w-full' />
							</div>
						</div>
						<div className='grid lg:grid-cols-2 grid-flow-row gap-4'>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text'>¿Con cuánto paga el cliente?:</span>
								</label>
								<input type="number" id="totalACobrar" name="totalACobrar" value={pagoCliente} onChange={(e) => calculateTotal(parseInt(e.target.value))} required className='input input-bordered w-full' />
							</div>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text'>Cambio:</span>
								</label>
								<input type="number" id="totalACobrar" name="totalACobrar" value={restate} onChange={() => setRestate(restate)} required className='input input-bordered w-full' />
							</div>
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
			</dialog>
		</>
	);
};

export default ModalPuntoDeVenta;
