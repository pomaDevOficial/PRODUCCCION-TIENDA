import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/environment';
let RolServicio = class RolServicio {
    http;
    apiUrl;
    constructor(http) {
        this.http = http;
        this.apiUrl = `${environment.endpoint}api/v1/roles`;
    }
    // Crear un nuevo rol
    createRol(rol) {
        return this.http.post(this.apiUrl, rol);
    }
    // Obtener todos los roles
    getRoles() {
        return this.http.get(this.apiUrl);
    }
    // Obtener solo roles registrados (activos/no eliminados)
    getRolesRegistrados() {
        return this.http.get(`${this.apiUrl}/registrados`);
    }
    // Obtener solo roles eliminados
    getRolesEliminados() {
        return this.http.get(`${this.apiUrl}/eliminados`);
    }
    // Obtener rol por ID
    getRolById(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    // Actualizar un rol por ID
    updateRol(id, rol) {
        return this.http.put(`${this.apiUrl}/${id}`, rol);
    }
    // Eliminar lógicamente un rol (cambiar estado a eliminado)
    deleteRol(id) {
        return this.http.patch(`${this.apiUrl}/${id}/eliminar`, {});
    }
    // Restaurar un rol eliminado
    restaurarRol(id) {
        return this.http.patch(`${this.apiUrl}/${id}/restaurar`, {});
    }
};
RolServicio = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RolServicio);
export { RolServicio };
