import Swal from 'sweetalert2';
export function Alert(message:string, type:boolean) {
	const data = message;
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer)
			toast.addEventListener('mouseleave', Swal.resumeTimer)
		}
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
}
