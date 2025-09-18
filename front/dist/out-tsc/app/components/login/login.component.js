import { __decorate } from "tslib";
import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../shared/services/Global.service';
let LoginComponent = class LoginComponent {
    fb;
    router;
    authService;
    globalService;
    notify;
    form;
    hide = signal(true);
    constructor(fb, router, authService, globalService, notify) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.globalService = globalService;
        this.notify = notify;
        // this.form = this.fb.group({
        //     email: ['', [Validators.required, Validators.email]],
        //     password: ['', [Validators.required, Validators.minLength(6)]]
        //   });
        this.form = this.globalService.fb.group({
            email: ['', GlobalService.required()],
            password: ['', GlobalService.required()],
        });
    }
    ngOnInit() {
    }
    onLogin() {
        if (this.form.valid) {
            const { email, password } = this.form.value;
            this.authService.login(email, password).subscribe();
        }
        else {
            this.notify.showWarning('Por favor, complete los campos correctamente');
        }
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        imports: [
            CommonModule,
            ReactiveFormsModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatIconModule,
        ],
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
