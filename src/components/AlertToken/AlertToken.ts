import Swal from "sweetalert2";

export function tokenExpired() {
    Swal.fire({
        icon: 'warning',
        title: 'Token Expirado',
        text: 'Tu sesión ha expirado. Por favor, inicia sesión nuevamente.',
        confirmButtonText: 'Iniciar Sesión',
        showCancelButton: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = '/login';
        }
    });
}
