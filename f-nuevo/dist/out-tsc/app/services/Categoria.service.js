import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/environment';
let CategoriaServicio = class CategoriaServicio {
    http;
    apiUrl;
    constructor(http) {
        this.http = http;
        this.apiUrl = `${environment.endpoint}api/v1/categorias`;
    }
    getCategorias() {
        return this.http.get(this.apiUrl + '/registradas');
    }
    createCategoria(marca) {
        return this.http.post(this.apiUrl, marca);
    }
    updateCategoria(id, talla) {
        return this.http.put(`${this.apiUrl}/${id}`, talla);
    }
    eliminarCategoria(id, talla) {
        return this.http.patch(`${this.apiUrl}/${id}/eliminar`, talla);
    }
};
CategoriaServicio = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CategoriaServicio);
export { CategoriaServicio };
