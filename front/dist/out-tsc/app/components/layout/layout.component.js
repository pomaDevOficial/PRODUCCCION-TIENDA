import { __decorate, __param } from "tslib";
import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
let LayoutComponent = class LayoutComponent {
    router;
    authService;
    platformId;
    sidebarVisible = false;
    // DECLARA LA PROPIEDAD AQUÍ
    menuLateral = [];
    constructor(router, authService, platformId) {
        this.router = router;
        this.authService = authService;
        this.platformId = platformId;
    }
    ngOnInit() {
        this.menuLateral = [
            { label: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
            { label: 'Productos', icon: 'inventory', link: '/productos' },
            { label: 'Pedidos', icon: 'shopping_cart', link: '/pedidos' },
        ];
    }
    logout() {
        console.log('Cerrando sesión...');
        this.authService.logout();
    }
    isRutaActiva(rutas) {
        return rutas.some(ruta => this.router.url.startsWith(ruta));
    }
};
LayoutComponent = __decorate([
    Component({
        selector: 'app-layout',
        imports: [
            CommonModule,
            RouterOutlet,
            RouterModule,
            ReactiveFormsModule,
            MatToolbarModule,
            MatIconModule,
            MatButtonModule,
            MatMenuModule,
            MatSidenavModule,
            MatListModule
        ],
        templateUrl: './layout.component.html',
        styleUrls: ['./layout.component.css']
    }),
    __param(2, Inject(PLATFORM_ID))
], LayoutComponent);
export { LayoutComponent };
