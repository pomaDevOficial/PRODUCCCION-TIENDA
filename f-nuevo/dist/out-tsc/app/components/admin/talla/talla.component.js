import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { CommonModule } from '@angular/common';
let TallaComponent = class TallaComponent {
    talla;
    fb;
    messageService;
    confirmationService;
    tallas = [];
    tallaForm;
    mostrarDialogo = false;
    loading = true;
    editar = false;
    constructor(talla, fb, messageService, confirmationService) {
        this.talla = talla;
        this.fb = fb;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
    }
    ngOnInit() {
        this.initForm();
        this.cargarTallas();
    }
    initForm() {
        this.tallaForm = this.fb.group({
            id: [null],
            nombre: ['', Validators.required],
            idestado: [1, Validators.required] // Valor por defecto activo
        });
    }
    cargarTallas() {
        this.talla.getTallas().subscribe({
            next: (res) => {
                this.loading = false;
                this.tallas = res.data;
            },
            error: (err) => {
                console.error('Error al cargar tallas', err);
            }
        });
    }
    abrirRegistro() {
        this.editar = false;
        this.mostrarDialogo = true;
        this.tallaForm.reset({ idestado: 1 });
    }
    editarTalla(talla) {
        this.editar = true;
        this.mostrarDialogo = true;
        this.tallaForm.patchValue({
            id: talla.id,
            nombre: talla.nombre,
        });
    }
    cerrarDialogo() {
        this.mostrarDialogo = false;
    }
    actualizarListado() {
        this.cargarTallas();
    }
    guardarTalla() {
        if (this.tallaForm.invalid) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Formulario incompleto',
                detail: 'Por favor, complete el nombre de la Talla'
            });
            return;
        }
        const tallaData = this.tallaForm.value;
        this.talla.createTalla(tallaData).subscribe({
            next: (nuevaMarca) => {
                this.cargarTallas();
                this.cerrarDialogo();
            },
            error: (err) => {
                console.error('Error al registrar la talla', err);
            }
        });
    }
    guardarEdicion() {
        if (this.tallaForm.invalid)
            return;
        const marcaData = this.tallaForm.value;
        this.talla.updateTalla(marcaData.id, marcaData)
            .subscribe({
            next: (res) => {
                this.cargarTallas();
                this.cerrarDialogo();
                this.editar = false;
            },
            error: (err) => {
                console.error("Error al actualizar la talla", err);
            }
        });
    }
    eliminarTalla(talla) {
        this.confirmationService.confirm({
            message: '¿Seguro que deseas eliminar esta talla?',
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí, eliminar',
            rejectLabel: 'Cancelar',
            acceptButtonStyleClass: 'p-button-danger p-button-sm', // 🔴 Rojo
            rejectButtonStyleClass: 'p-button-secondary p-button-sm', // ⚪ Gris
            accept: () => {
                this.talla.eliminarTalla(talla.id, '').subscribe(() => {
                    this.cargarTallas();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Eliminado',
                        detail: 'La talla fue eliminada correctamente'
                    });
                });
            }
        });
    }
};
TallaComponent = __decorate([
    Component({
        selector: 'app-talla',
        templateUrl: './talla.component.html',
        imports: [CommonModule, TableModule, ButtonModule, ReactiveFormsModule, FormsModule, ToastModule, ConfirmDialogModule, DialogModule, InputTextModule, TagModule,
            SelectModule, MultiSelectModule, ButtonModule, IconFieldModule, InputIconModule],
        styleUrls: ['./talla.component.css'],
        providers: [ConfirmationService, MessageService]
    })
], TallaComponent);
export { TallaComponent };
