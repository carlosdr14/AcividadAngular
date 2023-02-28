import { Component, ViewChild,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaService } from 'src/app/services/Personas/persona.service';
import { PersonaM } from 'src/app/Models/persona.model';
import { Location } from '@angular/common';
import { LoginService } from 'src/app/services/Login/log.service';
import { Router } from '@angular/router';


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

    personas!:
        {
            id: number,
            name: string,
            email: string,
            phone: string,
            password: string,
            role: string,
            active: boolean,
            activation_code: string,
        }[];


    constructor(private modalService: NgbModal, private personaService: PersonaService, private fb: FormBuilder,
        private location: Location, private loginservice:LoginService, private router:Router) {
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
    
  cerrarSesion() {
    this.loginservice.logout();
    this.router.navigate(['/inicio']);
  }
}
