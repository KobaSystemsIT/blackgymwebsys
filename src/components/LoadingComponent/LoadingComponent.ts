import Swal from 'sweetalert2';

export function Loading() {
    Swal.fire({
        toast: true,
        title: 'Cargando, por favor espere...',
        showConfirmButton: false,
        position: 'top-end',
        allowOutsideClick: false,
        showCancelButton: false,
        timer: 2000,
    })
}
