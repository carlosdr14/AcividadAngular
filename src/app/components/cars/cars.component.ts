import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
@ViewChild('contenido') contenido: any;

@ViewChild('eliminar') eliminar:any;

constructor(private modal: NgbModal) { }

EditarC() {
this.modal.open(this.contenido);
}

EliminarC() {
this.modal.open(this.eliminar);
}


}
