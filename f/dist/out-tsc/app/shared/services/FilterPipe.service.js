import { __decorate } from "tslib";
import { Pipe, Injectable } from '@angular/core';
let FilterPipe = class FilterPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(item => item.nombre.toLowerCase().includes(searchText));
    }
};
FilterPipe = __decorate([
    Pipe({
        name: 'filter',
        pure: false // Opcional: Si quieres que se actualice automáticamente cuando cambien los datos.
    }),
    Injectable({
        providedIn: 'root' // Hace que Angular lo maneje como un servicio sin necesidad de providers manuales
    })
], FilterPipe);
export { FilterPipe };
