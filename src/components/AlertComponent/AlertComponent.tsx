import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

export type AlertComponentProps = {
	message: string
	type: boolean
}

const AlertComponent: React.FC<AlertComponentProps> = ({ message, type }) => {
	const data = message;
	useEffect(() => {
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer)
				toast.addEventListener('mouseleave', Swal.resumeTimer)
			},
			customClass: {
				container: 'custom-toast-container',
				title: 'custom-toast-title',
			},
		})

		if(type){
			Toast.fire({
				icon: 'success',
				title: data
			})
		}else {
			Toast.fire({
				icon: 'error',
				title: data
			})
		}
	}, [data, type]);

	return null;
};

export default AlertComponent;
