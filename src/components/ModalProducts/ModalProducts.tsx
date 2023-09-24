import React, { useLayoutEffect, useState } from 'react';
import { crudProducts } from '@/services/Products/products.service';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { Alert } from '../AlertComponent/AlertComponent';
import { CategoryProducts } from '@/models/products';
import { crudCategoriesProducts } from '@/services/Categories/categories.service';

export type ModalProductsProps = {
}

const ModalProducts: React.FC<ModalProductsProps> = () => {
    const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
    const tokenState = useSelector((store: AppStore) => store.token);
    const token = tokenState.token;

    const [productName, setproductName] = useState('');
    const [productPrice, setproductPrice] = useState('');
    const [idCategory, setidCategory] = useState(0);
    const [products, setProducts] = useState<CategoryProducts[]>([]);
    const [isDisabled, setDisabled] = useState(false);

    const openModal = () => {
        window.modalProducts.showModal();
    };

    const closeModal = () => {
        setproductName('');
        setproductName('');
        window.modalProducts.close();
        setShowEmptyFieldsAlert(false);
    };

    const getProducts = async () => {
        try {
            const { data } = await crudCategoriesProducts(0, '', 2, token);
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    const newProducts = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (!productName || !productPrice) {
            setShowEmptyFieldsAlert(true);
        } else {
            setShowEmptyFieldsAlert(false);
            try {
                setDisabled(true);
                const result = await crudProducts(1, productName, Number(productPrice), idCategory, 1, token);
                if (result) {
                    Alert(result.mensaje, true);
                    setTimeout(() => {
                        closeModal();
                        setDisabled(false);
                        window.location.reload();
                    }, 3000)
                }
            } catch (error: any) {
                Alert(error.message, false);
                console.log(error);
                setTimeout(() => {
                }, 3000)
            }
        }
    };

    const handleProductChange = (event: any) => {
        const selectedProduct = parseInt(event.target.value, 10)

        if (selectedProduct) {
            setidCategory(selectedProduct);
            console.log(selectedProduct)
        }
    };

    useLayoutEffect(() => {
        getProducts();
    }, []);

    return <>
        <button className='btn lg:btn-sm btn-sm bg-black text-white rounded-lg hover:text-black hover:bg-transparent' onClick={openModal}>
            <h1 className='text-xs'>Nuevo Producto</h1>
        </button>

        <dialog id="modalProducts" className="modal-box z-10">
            <div>
                <h3 className="font-bold text-center m-4 text-base">Registro de Products</h3>
                <form className="grid text-black lg:text-sm text-xs gap-4">
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Nombre del Producto:</span>
                        </label>
                        <input value={productName} onChange={(e) => setproductName(e.target.value)} type="text" id="productName" name="productName" required className='input input-bordered w-full' />
                    </div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Precio:</span>
                        </label>
                        <input value={productPrice} onChange={(e) => setproductPrice(e.target.value)} type="number" id="productPrice" name="productPrice" required className='input input-bordered w-full' />
                    </div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Categoría:</span>
                        </label>
                        <select required
                            onChange={handleProductChange}
                            className='input input-bordered w-full'
                        >
                            <option value=''>Seleccione un producto</option>
                            {products.map((products) => (
                                <option key={products.productCategoryID} value={products.productCategoryID}>
                                    {products.nameCategory}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        <button className='btn btn-success btn-sm font-normal' onClick={newProducts} disabled={isDisabled}>Registrar</button>
                        <button type="button" className='btn btn-warning btn-sm font-normal' onClick={closeModal}>
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
        </dialog >
    </>
};

export default ModalProducts;