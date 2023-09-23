import React, { useEffect, useState } from 'react';
import './GestionClubView.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { Clubes } from '@/models';
import { getClubDatabyId } from '@/services/Clubes/clubes.service';


const GestionClubView: React.FC = () => {
	const tokenState = useSelector((store: AppStore) => store.token);
	const token = tokenState.token;
	const params: any = useParams();
	const navigate = useNavigate();

	let idClub: number = params.idClub;

	const [club, setClub] = useState<Clubes>({
		idClub: 0,
		nameClub: '',
		addressClub: '',
		dataIFrame: ''
	});

	const handleGoBack = () => {
		navigate(-1);
	};

	const getClubbyId = async () => {
		try {
			const {data} = await getClubDatabyId(idClub, token);
			setClub(data);
			console.log(club)
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getClubbyId();
	}, []);
	return (
		<>
			<div className='p-2 flex flex-col'>
				<div className='grid lg:grid-flow-col md:grid-flow-col gap-6'>
					<div className="grid shadow-xl border-2 rounded-2xl">
						<div className="items-center text-center lg:px-10 lg:py-10 p-4">
							<h2 className="lg:text-xl text-base font-semibold"></h2>
							<div>
								<hr className="mt-2 mb-2" />
								<h1 className='lg:text-lg font-semibold text-base mb-3'>Dirección:</h1>
							</div>
						</div>
					</div>
					<div>
						<h1 className='font-semibold text-xl p-2 lg:text-start text-center'>Gestión de Club</h1>
						<hr />
						<div className='mt-10 rounded-xl border-2 p-6 shadow-xl'>
							<form className="grid lg:grid-flow-row md:grid-cols-2 lg:text-sm text-xs gap-2">
								<div className='form-control w-full'>
									<label className='label'>
										<span className='label-text '>Nombre del Club:</span>
									</label>
									<input value={club.nameClub} onChange={(e) => setClub({ ...club, nameClub: e.target.value })} type="text" id="nameClub" name="nameClub" required className='input input-bordered w-full max-w-xs' />
								</div>
								<div className='form-control w-full'>
									<label className='label'>
										<span className='label-text '>Dirección:</span>
									</label>
									<input value={club.addressClub} onChange={(e) => setClub({ ...club, addressClub: e.target.value })} type="text" id="addressClub" name="addressClub" required className='input input-bordered w-full max-w-xs' />
								</div>
								<div className='form-control w-full'>
									<label className='label'>
										<span className='label-text '>DataIframe del Club:</span>
									</label>
									<input value={club.dataIFrame} onChange={(e) => setClub({ ...club, dataIFrame: e.target.value })} type="text" id="dataIFrame" name="dataIFrame" required className='input input-bordered w-full max-w-xs' />
								</div>
							</form>
							<div className='flex lg:flex-row flex-col gap-4 mt-10 lg:justify-end md:justify-end'>
								<button className='btn btn-success btn-sm font-normal'>Actualizar datos</button>
								<button type="button" className='btn btn-warning btn-sm font-normal' onClick={handleGoBack}>Volver</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
};

export default GestionClubView;
