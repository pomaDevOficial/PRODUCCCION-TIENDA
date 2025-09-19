import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
let NotificationService = class NotificationService {
    toastr;
    constructor(toastr) {
        this.toastr = toastr;
    }
    async showSuccess(message, title = 'Éxito') {
        console.log('Toast Success:', message); // 👈 Debe aparecer en consola
        this.toastr.success(message, title);
    }
    showError(message, title = 'Error') {
        console.log('Toast Error:', message); // 👈 Debe aparecer en consola
        this.toastr.error(message, title);
    }
    showWarning(message, title = 'Advertencia') {
        this.toastr.warning(message, title);
    }
    showInfo(message, title = 'Información') {
        this.toastr.info(message, title);
    }
    async showConfirm(message, title = '¿Estás seguro?') {
        const result = await Swal.fire({
            title,
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, confirmar',
            cancelButtonText: 'Cancelar'
        });
        return result.isConfirmed;
    }
};
NotificationService = __decorate([
    Injectable({
        providedIn: 'root' // Disponible globalmente en la app
    })
], NotificationService);
export { NotificationService };
