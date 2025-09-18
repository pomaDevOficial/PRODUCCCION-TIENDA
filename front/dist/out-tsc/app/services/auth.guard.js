import { __decorate, __param } from "tslib";
import { Injectable } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
let AuthGuard = class AuthGuard {
    platformId;
    authService;
    router;
    toastr;
    constructor(platformId, authService, router, toastr) {
        this.platformId = platformId;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    canActivate(route, state) {
        console.log('AuthGuard: Verificando autenticación...');
        if (!this.authService.isAuthenticated()) {
            if (isPlatformBrowser(this.platformId)) { // <-- verifica que sea navegador
                localStorage.clear(); // Borra todo el localStorage
                this.router.navigate(['/login']);
                this.toastr.warning('Tu sesión ha expirado, inicia sesión nuevamente.');
            }
            return false;
        }
        const rol = this.authService.getRol();
        console.log('AuthGuard: Rol obtenido ->', rol);
        const url = state.url;
        // Si la ruta empieza con '/admin', solo rol 1 (administrador) puede acceder
        if (url.startsWith('/admin') && rol !== 1) {
            console.log('AuthGuard: Acceso denegado. Solo administradores pueden entrar a /admin');
            this.toastr.error('No tienes permisos para acceder a esta sección.');
            this.router.navigate(['/login']);
            return false;
        }
        // Si la ruta empieza con '/empleado', solo rol 2 (empleado) puede acceder
        if (url.startsWith('/empleado') && rol !== 2) {
            console.log('AuthGuard: Acceso denegado. Solo empleados pueden entrar a /empleado');
            this.toastr.error('No tienes permisos para acceder a esta sección.');
            this.router.navigate(['/login']);
            return false;
        }
        console.log(`AuthGuard: Acceso permitido para rol ${rol} en la ruta ${url}`);
        return true;
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject(PLATFORM_ID))
], AuthGuard);
export { AuthGuard };
