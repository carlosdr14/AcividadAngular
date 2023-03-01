import { Component, ViewChild,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaService } from 'src/app/services/Personas/persona.service';
import { PersonaM } from 'src/app/Models/persona.model';
import { Location } from '@angular/common';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/Login/log.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

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

    personas: PersonaM[] = [];
    id: number = 0;
    name: string = '';
    phone: string = '';
    role: string = '';
    active: string = '';
    constructor(private modalService: NgbModal, private personaService: PersonaService, private fb: FormBuilder,
        private location: Location,private router: Router,private authService: LoginService) {
    
    }

    ngOnInit(): void {
        const token = localStorage.getItem('token') ?? '';
        console.log(token);

    // Or 'admin', depending on the role of the user
        this.personaService.getPersonas(token).subscribe((res) => {
            this.personas = res;
            console.log(res)
            
        });
        } 



        cerrarSesion() {
            this.authService.logout();
            this.router.navigate(['/inicio']);
          }


   


    abrirModal(persona: any) {
        this.modalService.open(this.contenido, { centered: true });
        this.id = persona.id;
        console.log("id",this.id);
       
      }
    abrirC()
    {
       const token = localStorage.getItem('token') ?? '';
       const id = this.id;
       const form = {
            name: this.name,
            phone: this.phone,
            role: JSON.parse(this.role),
           active: JSON.parse(this.active)
            } 

        this.personaService.updatePersona(form,id,token).subscribe(
            (res) => {
                this.ngOnInit();
                alert("Successful");
            },
            (err) => {
                if (err.status == 500)
                {
                  alert("Nos encontramos en mantenimiento");
                }
                

            }
        );

            console.log("formulario",form);
            console.log("id",id);
        
            
           }

    EliminarP( persona: any) {
        
        this.id = persona.id;
        console.log("id",this.id);
        const token = localStorage.getItem('token') ?? '';
        this.personaService.deletePersona(this.id,token).subscribe(
            (res) => {
                alert("Successful");
            }
        );
    }
}
