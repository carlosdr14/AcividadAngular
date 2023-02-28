import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/Login/log.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent {
@ViewChild('contenido') contenido: any;

@ViewChild('eliminar') eliminar:any;

constructor(private modal: NgbModal,private loginservice:LoginService, private router:Router) { }

EditarB() {
this.modal.open(this.contenido);
}

EliminarB() {
this.modal.open(this.eliminar);
}

cerrarSesion() {
  this.loginservice.logout();
  this.router.navigate(['/inicio']);
}

}
