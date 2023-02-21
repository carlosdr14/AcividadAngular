import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaService } from 'src/app/services/Personas/persona.service';
import { PersonaM } from 'src/app/Models/persona.model';
import { Location } from '@angular/common';

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
    form!: FormGroup;
    persona?: PersonaM;

    @ViewChild('contenido') contenido: any;
    @ViewChild('eliminar') eliminar: any;

    constructor(private modalService: NgbModal, private personaService: PersonaService, private fb: FormBuilder,
        private location: Location) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            password: ['', Validators.required],
            role: ['', Validators.required],
            active: ['', Validators.required],
            activation_code: ['', Validators.required],
        })
    }


    OnSubmit(values: PersonaM) {
        this.personaService.addPersona(values).subscribe();
        this.form.reset();
        this.location.back();
    }


    abrirModal() {
        this.modalService.open(this.contenido);
    }

    EliminarP() {
        this.modalService.open(this.eliminar);
    }
}
