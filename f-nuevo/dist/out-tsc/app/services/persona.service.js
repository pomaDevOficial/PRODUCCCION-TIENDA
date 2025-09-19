import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/environment';
let PersonaServicio = class PersonaServicio {
    http;
    apiUrl;
    constructor(http) {
        this.http = http;
        this.apiUrl = `${environment.endpoint}api/v1/personas`;
    }
    // Crear una nueva persona
    createPersona(persona) {
        return this.http.post(this.apiUrl, persona);
    }
    // Obtener todas las personas
    getPersonas() {
        return this.http.get(this.apiUrl);
    }
    // Obtener solo personas registradas
    getPersonasRegistradas() {
        return this.http.get(`${this.apiUrl}/registradas`);
    }
    // Obtener solo personas eliminadas
    getPersonasEliminadas() {
        return this.http.get(`${this.apiUrl}/eliminadas`);
    }
    // Verificar si existe una persona por DNI
    verificarDni(nroidentidad) {
        return this.http.get(`${this.apiUrl}/verificar-dni/${nroidentidad}`);
    }
    // Obtener persona por ID
    getPersonaById(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    // Actualizar persona por ID
    updatePersona(id, persona) {
        return this.http.put(`${this.apiUrl}/${id}`, persona);
    }
    // Eliminar persona (cambio de estado lógico)
    eliminarPersona(id) {
        return this.http.patch(`${this.apiUrl}/${id}/eliminar`, {});
    }
    // Restaurar persona eliminada
    restaurarPersona(id) {
        return this.http.patch(`${this.apiUrl}/${id}/restaurar`, {});
    }
};
PersonaServicio = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PersonaServicio);
export { PersonaServicio };
