import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
let GlobalService = class GlobalService {
    fb;
    router;
    route;
    // public fb = inject(FormBuilder);
    // public router = inject(Router)
    // public route = inject(ActivatedRoute)
    constructor(fb, router, route) {
        this.fb = fb;
        this.router = router;
        this.route = route;
    }
    // Exponer Validators para su uso en cualquier componente
    static maxLength(length) {
        return Validators.maxLength(length);
    }
    static required() {
        return Validators.required;
    }
    static soloNumeros() {
        return Validators.pattern("^[0-9]*$"); // 🔥 Esto solo permite números
    }
    static validarSoloNumeros(event) {
        const input = event.target;
        input.value = input.value.replace(/[^0-9]/g, '');
    }
    formgroup = FormGroup;
    navegar(ruta) {
        this.router.navigate([ruta]);
    }
};
GlobalService = __decorate([
    Injectable({
        providedIn: 'root', // Esto lo hace global
    })
], GlobalService);
export { GlobalService };
