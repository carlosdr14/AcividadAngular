import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent {
@ViewChild('contenido') contenido: any;

@ViewChild('eliminar') eliminar:any;

constructor(private modal: NgbModal) { }

EditarB() {
this.modal.open(this.contenido);
}

EliminarB() {
this.modal.open(this.eliminar);
}

}
