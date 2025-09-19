import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/environment';
let UsuarioServicio = class UsuarioServicio {
    http;
    apiUrl;
    constructor(http) {
        this.http = http;
        this.apiUrl = `${environment.endpoint}api/v1/usuarios`;
    }
    // Crear un nuevo usuario
    createUsuario(usuario) {
        return this.http.post(this.apiUrl, usuario);
    }
    // Obtener todos los usuarios
    getUsuarios() {
        return this.http.get(this.apiUrl);
    }
    // Obtener usuario por ID
    getUsuarioById(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    // Actualizar usuario por ID
    updateUsuario(id, usuario) {
        return this.http.put(`${this.apiUrl}/${id}`, usuario);
    }
    // Activar usuario
    activarUsuario(idUsuario) {
        return this.http.patch(`${this.apiUrl}/${idUsuario}/activar`, {});
    }
    // Activar usuario
    desactivarUsuario(idUsuario) {
        return this.http.patch(`${this.apiUrl}/${idUsuario}/desactivar`, {});
    }
};
UsuarioServicio = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UsuarioServicio);
export { UsuarioServicio };
