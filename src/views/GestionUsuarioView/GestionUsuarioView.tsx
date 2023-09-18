import React, { useLayoutEffect } from 'react';
import './GestionUsuarioView.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getDataUser } from '@/services/Clients/clients.service';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';

export type GestionUsuarioViewProps = {
}

const GestionUsuarioView: React.FC<GestionUsuarioViewProps> = ({ }) => {
	const navigate = useNavigate();
	const params: any = useParams();
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	let idUser:number = params.idUser;


	const handleGoBack = () => {
		navigate(-1); // Esto navegará hacia atrás en la pila de rutas
	};

	const getData = async () => {
		try {
			getDataUser(idUser, token)
		} catch (error) {
			console.log(error);
		}
	}

	useLayoutEffect(() => {
		getData();
	}, []);
	return (
		<>
			<div className='p-2 flex flex-col'>
				<div className='p-4'>
					<h1 className='font-semibold text-xl p-2'>Gestión de Usuario</h1>
					<hr />
					<div className='mt-10 rounded-xl border-2 p-6 shadow-xl'>
						<form className="grid lg:grid-cols-3 md:grid-cols-2 lg:text-sm text-xs gap-4">
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text '>Nombre:</span>
								</label>
								<input type="text" id="username" name="username" required className='input input-bordered w-full max-w-xs' />
							</div>
							<div className='form-control w-full '>
								<label className='label'>
									<span className='label-text '>Apellidos:</span>
								</label>
								<input type="text" id="lastname" name="lastname" required className='input input-bordered w-full max-w-xs' />
							</div>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text '>Teléfono:</span>
								</label>
								<input type="number" id="phoneNumber" name="phoneNumber" required className='input input-bordered w-full max-w-xs' />
							</div>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text '>Correo:</span>
								</label>
								<input type="email" id="email" name="email" required className='input input-bordered w-full max-w-xs' />
							</div>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text '>Contacto de emergencia:</span>
								</label>
								<input type="text" id="nameemergencycontact" name="nameemergencycontact" required className='input input-bordered w-full max-w-xs' />
							</div>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text '>Número de contacto:</span>
								</label>
								<input type="number" id="emergencynumbercontact" name="emergencynumbercontact" required className='input input-bordered w-full max-w-xs' />
							</div>
						</form>
						<div className='flex flex-row gap-4 mt-10 lg:justify-end md:justify-end'>
							<button className='btn btn-success btn-sm font-normal'>Actualizar</button>
							<button type="button" className='btn btn-warning btn-sm font-normal' onClick={handleGoBack}>Volver</button>
						</div>
					</div>
				</div>
				<div className='mt-10 p-4'>
					<h1 className='font-semibold text-xl p-2'>Gestión de Subscripción</h1>
					<hr />
					<div className='mt-10 rounded-xl border-2 p-6 shadow-xl'>
						<form className="grid lg:grid-cols-3 md:grid-cols-2 lg:text-sm text-xs gap-4">
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text '>Tipo de Subscripción:</span>
								</label>
								<input type="text" id="username" name="username" required className='input input-bordered w-full max-w-xs' />
							</div>
							<div className='form-control w-full '>
								<label className='label'>
									<span className='label-text '>Precio:</span>
								</label>
								<input type="text" id="lastname" name="lastname" required className='input input-bordered w-full max-w-xs' />
							</div>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text '>Duración:</span>
								</label>
								<input type="number" id="phoneNumber" name="phoneNumber" required className='input input-bordered w-full max-w-xs' />
							</div>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text '>Fecha de Inicio:</span>
								</label>
								<input type="email" id="email" name="email" required className='input input-bordered w-full max-w-xs' />
							</div>
							<div className='form-control w-full'>
								<label className='label'>
									<span className='label-text '>Fecha fin:</span>
								</label>
								<input type="text" id="nameemergencycontact" name="nameemergencycontact" required className='input input-bordered w-full max-w-xs' />
							</div>
						</form>
						<div className='flex flex-row gap-4 mt-10 lg:justify-end md:justify-end'>
							<button className='btn btn-success btn-sm font-normal'>Registrar Subscripción</button>
							<button type="button" className='btn btn-warning btn-sm font-normal' onClick={handleGoBack}>Volver</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
};

export default GestionUsuarioView;
