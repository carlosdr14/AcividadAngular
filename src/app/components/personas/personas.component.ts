import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
selector: 'app-personas',
templateUrl: './personas.component.html',
styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
@ViewChild('contenido') contenido: any;

@ViewChild('eliminar') eliminar:any;

constructor(private modalService: NgbModal) { }

abrirModal() {
this.modalService.open(this.contenido);
}

EliminarP() {
this.modalService.open(this.eliminar);
}

}
