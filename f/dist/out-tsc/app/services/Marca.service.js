import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/environment';
let MarcaServicio = class MarcaServicio {
    http;
    apiUrl;
    constructor(http) {
        this.http = http;
        this.apiUrl = `${environment.endpoint}api/v1/marcas`;
    }
    getMarcas() {
        return this.http.get(this.apiUrl + '/registradas');
    }
    createMarca(marca) {
        return this.http.post(this.apiUrl, marca);
    }
    updateMarca(id, marca) {
        return this.http.put(`${this.apiUrl}/${id}`, marca);
    }
    eliminarMarca(id, marca) {
        return this.http.patch(`${this.apiUrl}/${id}/eliminar`, marca);
    }
};
MarcaServicio = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MarcaServicio);
export { MarcaServicio };
