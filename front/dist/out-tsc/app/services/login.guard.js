import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LoginGuard = class LoginGuard {
    auth;
    router;
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        const token = this.auth.getToken();
        const authenticated = this.auth.isAuthenticated();
        if (token && authenticated) {
            // Si hay token y no está expirado → redirigir a Admin
            this.router.navigate(['/Admin']);
            return false;
        }
        return true; // Usuario no está logeado → permite acceder a login
    }
};
LoginGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginGuard);
export { LoginGuard };
