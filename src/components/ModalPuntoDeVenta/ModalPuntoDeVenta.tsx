import { PaymentOptions } from '@/models/paymentOptions/paymentOptions';
import { Products } from '@/models/products';
import { Suppliers } from '@/models/suppliers/suppliers';
import { AppStore } from '@/redux/store';
import { getPaymentData } from '@/services/PaymentOptions/paymentoptions.service';
import { crudProducts, openOrCloseCashRegister, pointOfSale } from '@/services/Products/products.service';
import { crudSuppliers, paySuppliers } from '@/services/Suppliers/suppliers.service';
import React, { useEffect, useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Alert } from '../AlertComponent/AlertComponent';
import './ModalPuntoDeVenta.css';
import { useDispatch } from 'react-redux';
import { persistLocalStorage } from '@/utilities';

export type ModalPuntoDeVentaProps = {
}

export type ModalPagoProveedores = {
}

export const ModalPuntoDeVenta: React.FC<ModalPuntoDeVentaProps> = ({ }) => {
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

export const ModalPagoProveedores: React.FC<ModalPagoProveedores> = ({ }) => {
	const userState = useSelector((store: AppStore) => store.user);
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	const adminID = userState.idUser;
	const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
	const params: any = useParams();

	const [paymentOptions, setPaymentOptions] = useState<PaymentOptions[]>([]);
	const [suppliers, setSuppliers] = useState<Suppliers[]>([]);
	const [supplier, setSupplier] = useState(0);
	const [conceptPayment, setConceptPayment] = useState('');
	const [isDisabled, setDisabled] = useState(false);
	const [fechaVenta, setFechaVenta] = useState('');
	const [payment, setPayment] = useState(0);

	const [paymentSelected, setPaymentSelected] = useState(0);

	const openModal = () => {
		window.modalPaySuppliers.showModal();
	};

	const closeModalVenta = () => {
		setSupplier(0);
		setFechaVenta('');
		setPaymentSelected(0);
		setConceptPayment('');
		window.modalPaySuppliers.close();
	};

	const handleProductChange = (event: any) => {
		const selectedProduct = parseInt(event.target.value, 10)
		if (selectedProduct) {
			setSupplier(selectedProduct);
		}
	};

	const getSuppliers = async () => {
		try {
			const { data } = await crudSuppliers(0, '', 2, token);
			setSuppliers(data);
		} catch (error) {
			console.log(error);
		};

		let startDate: string = new Date().toISOString().split('T')[0];
		setFechaVenta(startDate);
	};

	const newPay = async (event: React.MouseEvent<HTMLButtonElement>) => {

		event.preventDefault();
		if (supplier === 0 || conceptPayment === '') {
			setShowEmptyFieldsAlert(true);
		} else {
			try {
				setShowEmptyFieldsAlert(false);
				setDisabled(true);
				const result = await paySuppliers(payment, conceptPayment, supplier, parseInt(params.idClub), adminID, fechaVenta, paymentSelected, 1, token)
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
					Alert('Hubo un error al procesar la solicitud', false);
					setDisabled(false);
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
		getSuppliers();
		getPayment()
	}, []);

	return (
		<>
			<button className='btn lg:btn-sm btn-sm bg-black text-white rounded-lg hover:text-black hover:bg-transparent'
				onClick={openModal}
			>
				<h1>Pago a proveedores</h1>
			</button>
			<dialog id="modalPaySuppliers" className="modal-box">
				<div>
					<h3 className="font-bold text-lg text-center m-4">Pago a proveedores o servicios</h3>
					<form className="grid text-black lg:text-sm text-xs gap-4">
						<div className='grid lg:grid-flow-col gap-4'>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text'>Total a pagar:</span>
								</label>
								<input
									type="number"
									value={payment}
									onChange={(e) => setPayment(parseFloat(e.target.value))}
									className='input input-bordered w-full'
								/>
							</div>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text'>Fecha de Venta:</span>
								</label>
								<input
									type="date"
									value={fechaVenta}
									onChange={(e) => setFechaVenta(e.target.value)}
									className='input input-bordered w-full'
								/>
							</div>
						</div>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Proveedor:</span>
							</label>
							<select required
								onChange={handleProductChange}
								className='input input-bordered w-full'
							>
								<option value=''>Seleccione un proveedor</option>
								{suppliers.map((suppliers) => (
									<option key={suppliers.idSupplier} value={suppliers.idSupplier}>
										{suppliers.nameSupplier}
									</option>
								))}
							</select>
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

						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Concepto de pago:</span>
							</label>
							<textarea value={conceptPayment} onChange={(e) => setConceptPayment(e.target.value)} className="textarea textarea-bordered" placeholder="Comentarios"></textarea>
						</div>
						<div className='grid grid-cols-2 gap-6'>
							<button className=' btn btn-success btn-sm font-normal' onClick={newPay} disabled={isDisabled}>Agregar</button>
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

interface ModalCorteCajaProps {
	data: {
	  ventasProductos: number;
	  ventasSubs: number;
	  pagos: number;
	};
  }

  interface ModalCorteCajaHandles {
	showModal: () => void;
	closeModal: () => void;
  }

  export const ModalCorteCaja = forwardRef<ModalCorteCajaHandles, ModalCorteCajaProps>((props, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    // Expose the showModal and closeModal methods to the parent component
    useImperativeHandle(ref, () => ({
		showModal: () => {
		  setIsVisible(true);
		},
		closeModal: () => {
		  setIsVisible(false);
		},
	  }));
	
    if (!isVisible) return null;

    // Define the close modal function within the component
    const closeCorteCajaModal = () => {
        setIsVisible(false);
    };

    return (
        <>
            <dialog open={isVisible} className="modal-box">
                {/* Modal content here */}
                <div className='grid grid-cols-1 gap-6 mt-4'>
                    <button type="button" className='btn btn-sm font-normal' onClick={closeCorteCajaModal}>
                        Cerrar
                    </button>
                </div>
            </dialog>
            {/* The button to open the modal should be moved to where it's needed. */}
        </>
    );
});


export const ModalCashRegister: React.FC<ModalPagoProveedores> = ({ }) => {
	const userState = useSelector((store: AppStore) => store.user);
	const tokenState = useSelector((store: AppStore) => store.token);
	const corteCajaModalRef = useRef<ModalCorteCajaHandles>(null);
	const [corteCajaData, setCorteCajaData] = useState({
		ventasProductos: 0,
		ventasSubs: 0,
		pagos: 0
	  });
	const token = tokenState.token;
	const adminID = userState.idUser;
	const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
	const params: any = useParams();
	const dispatch = useDispatch();

	const [idCaja, setIdCaja] = useState(0);
	const [monto, setMonto] = useState(0);
	const [isDisabled, setDisabled] = useState(false);

	const openModal = () => {
		setMonto(0);
		window.modalCashRegister.showModal();
	};

	const closeModalVenta = () => {
		window.modalCashRegister.close();
	};

	const getIdCajaFromLocalStorage = () => {
		const item = localStorage.getItem('idCaja');
		if (item) {
			const parsedItem = JSON.parse(item);
			return parsedItem.idCaja;
		}
		return null;
	}

	const cajaId = getIdCajaFromLocalStorage();

	const openCorteCajaModal = () => {
		corteCajaModalRef.current?.showModal();
	  };

	const openOrClose = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (monto <= 0) {
			setShowEmptyFieldsAlert(true);
		} else {
			try {
				setShowEmptyFieldsAlert(false);
				setDisabled(true);
				if (cajaId === 0) {
					const { data } = await openOrCloseCashRegister(idCaja, monto, parseInt(params.idClub), adminID, 1, token);
					localStorage.setItem('montoCaja', monto.toString());

					if (data) {
						let idCaja: number = data.caja;
						Alert('Apertura de caja realizada correctamente', true);
						const idCajaValue = { idCaja: idCaja };
						persistLocalStorage('idCaja', idCajaValue);
						setTimeout(() => {
							closeModalVenta();
							setDisabled(false);
							window.location.reload()
						}, 2500);
					}
				} else {
					const { data } = await openOrCloseCashRegister(idCaja, monto, parseInt(params.idClub), adminID, 2, token);
					if (data) {
						Alert('Cierre de caja realizada correctamente', true);
						setCorteCajaData(data);
						setTimeout(() => {
							closeModalVenta();
							setDisabled(false);
							openCorteCajaModal();
						}, 2500);
					}
				}

			} catch (error) {
				setTimeout(() => {
					Alert('Hubo un error al procesar la solicitud', false);
					setDisabled(false);
				}, 3000)
			}
		}
	};



	// const getIdCaja = async () => {
	// 	try {
	// 		const{ data } = await openOrCloseCashRegister(idCaja, monto, parseInt(params.idClub), adminID, 3, token);
	// 		if(data){
	// 			setIdCaja(data.idCaja);
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	useEffect(() => {
	})

	return (
		<>
			<button className='btn lg:btn-sm btn-sm bg-black text-white rounded-lg hover:text-black hover:bg-transparent'
				onClick={openModal}
			>
				<h1>{cajaId === 0 ? 'Apertura' : 'Corte'} de caja</h1>
			</button>
			<dialog id="modalCashRegister" className="modal-box">
				<div>
					<h3 className="font-bold text-lg text-center m-4">{cajaId === 0 ? 'Apertura' : 'Corte'} de caja</h3>
					<form className="grid text-black lg:text-sm text-xs gap-4">
						<div className='grid lg:grid-flow-col gap-4'>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text'>Total en caja de {cajaId === 0 ? 'apertura' : 'corte'}:</span>
								</label>
								<input
									type="number"
									value={monto}
									onChange={(e) => setMonto(parseFloat(e.target.value))}
									className='input input-bordered w-full'
								/>
							</div>
						</div>
						<div className='grid grid-cols-2 gap-6'>
							<button className=' btn btn-success btn-sm font-normal' onClick={openOrClose} disabled={isDisabled}>Registrar</button>
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
			<ModalCorteCaja ref={corteCajaModalRef} data={corteCajaData}/>
		</>
	);
};

export default {
	ModalPuntoDeVenta,
	ModalPagoProveedores,
}
