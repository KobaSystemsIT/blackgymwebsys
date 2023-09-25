import React, { useEffect, useState } from 'react';
import './GestionProductosView.css';
import { Products } from '@/models/products';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AppStore } from '@/redux/store';
import Swal from 'sweetalert2';
import { Alert } from '@/components/AlertComponent/AlertComponent';
import { crudProducts } from '@/services/Products/products.service';

export type GestionProductosViewProps = {
}

const GestionProductosView: React.FC<GestionProductosViewProps> = ({ }) => {
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	const params: any = useParams();
	const navigate = useNavigate();
	const [isDisabled, setDisabled] = useState(false);

	const handleGoBack = () => {
		navigate(-1);
	};

	const [product, setProduct] = useState<Products>({
		productID: 0,
		productName: '',
		productPrice: 0
	});

	const updateProduct = async () => {
		const confirmation = await Swal.fire({
			title: '¿Desea actualizar los datos de este producto?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Sí',
			cancelButtonText: 'Cancelar',
		});

		if (confirmation.isConfirmed) {
			try {
				setDisabled(true);
				const response = await crudProducts(params.productID, product.productName, product.productPrice, 0, 3, token);
				if (response) {
					setDisabled(false);
					Alert(response.mensaje, true);
					setTimeout(() => {
						handleGoBack();
					}, 2500);
				}
			} catch (error: any) {
				console.log(error);
				Alert(error, false);
			}
		}
	};

	const getDataProduct = async () => {
		try {
			const { data } = await crudProducts(params.productID, '', 0, 0, 5, token);
			setProduct(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getDataProduct();
	}, []);


	return (
		<div className='flex flex-col pb-10'>
			<h1 className='font-semibold text-xl p-2 lg:text-start text-center'>Gestión de Producto</h1>
			<hr />
			<div className='mt-10 rounded-xl border-2 p-6 shadow-xl'>
				<form className="grid lg:grid-flow-row md:grid-cols-2 lg:text-sm text-xs gap-6">
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text '>Nombre del producto:</span>
						</label>
						<input value={product.productName} onChange={(e) => setProduct({ ...product, productName: e.target.value })} type="text" id="nameProduct" name="nameProduct" required className='input input-bordered w-full' />
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text '>Precio del producto:</span>
						</label>
						<input value={product.productPrice} onChange={(e) => setProduct({ ...product, productPrice: parseInt(e.target.value) })} type="productPrice" id="productPrice" name="productPrice" required className='input input-bordered w-full' />
					</div>
				</form>
				<div className='flex lg:flex-row flex-col gap-4 mt-10 lg:justify-end md:justify-end'>
					<button className='btn btn-success btn-sm font-normal' disabled={isDisabled} onClick={updateProduct}>Actualizar datos</button>
					<button type="button" className='btn btn-warning btn-sm font-normal' onClick={handleGoBack}>Volver</button>
				</div>
			</div>
		</div>
	);
};

export default GestionProductosView;
