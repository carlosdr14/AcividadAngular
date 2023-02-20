import { Component, ViewChild } from '@angular/core';
import { Route } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  @ViewChild('contenido') contenido: any;

  constructor(private modal: NgbModal) { }

  abrirC() {
    this.modal.open(this.contenido);
  }

}
