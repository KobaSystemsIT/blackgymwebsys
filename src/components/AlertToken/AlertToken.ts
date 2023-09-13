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
            // Redirige al usuario a la página de inicio de sesión
            window.location.href = '/login';; // Reemplaza esto con la ruta de tu página de inicio de sesión
        }
    });
}
