import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/environment';
let TallaServicio = class TallaServicio {
    http;
    apiUrl;
    constructor(http) {
        this.http = http;
        this.apiUrl = `${environment.endpoint}api/v1/tallas`;
    }
    getTallas() {
        return this.http.get(this.apiUrl + '/registradas');
    }
    createTalla(marca) {
        return this.http.post(this.apiUrl, marca);
    }
    updateTalla(id, talla) {
        return this.http.put(`${this.apiUrl}/${id}`, talla);
    }
    eliminarTalla(id, talla) {
        return this.http.patch(`${this.apiUrl}/${id}/eliminar`, talla);
    }
};
TallaServicio = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TallaServicio);
export { TallaServicio };
