import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/Login/log.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
@ViewChild('contenido') contenido: any;

@ViewChild('eliminar') eliminar:any;

constructor(private modal: NgbModal, private loginservice:LoginService, private router:Router) { }

EditarC() {
this.modal.open(this.contenido);
}

EliminarC() {
this.modal.open(this.eliminar);
}

cerrarSesion() {
  this.loginservice.logout();
  this.router.navigate(['/inicio']);
}


}
