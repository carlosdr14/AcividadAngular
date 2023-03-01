
import { Component, ViewChild } from '@angular/core';
import { Route } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaService } from 'src/app/services/Personas/persona.service';
import { PersonaM } from 'src/app/Models/persona.model';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  id: number = 0;
  email: string = '';
  name: string = '';
  phone: string = '';
  password: string = '';
  password_confirmation: string = '';
  role: number = 0;
  active: boolean = false;
  activation_code = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  codigo: string = '';
  
  @ViewChild('contenido') contenido: any;

  constructor(private modal: NgbModal, private persona: PersonaService, private activatedRoute: ActivatedRoute,) {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;

  }

  abrirC() {
    id: this.id;
   const Email=  this.email;
    const form = {
      email: this.email,
      name: this.name,
      phone: this.phone,
      password: this.password,
      password_confirmation: this.password_confirmation,
      role: this.role,
      active: this.active,
      activation_code: this.activation_code,
    }
    console.log("formulario",form);
    
    this.persona.addPersona(form).subscribe(
      (res) => {
        alert("Successful");
      },
      (err) => {
        alert(err);
      }
    );

    this.persona.getOne(Email).subscribe(
      (res) => {
        
        this.id = res.id;
        console.log("id", this.id);
      },
      (err) => {
        alert(err);
      }
    );


    this.modal.open(this.contenido);


 
    


  }
  activar() {

    codigo: this.codigo;
    
    console.log("codigo", this.codigo);
    console.log("id", this.id);
    this.persona.activarCliente(this.id,Number( this.codigo)).subscribe(
      (res) => {
        alert("Successful");
      },
      (err) => {
        alert(err);
      }
    );


  
  }
  
  

}
