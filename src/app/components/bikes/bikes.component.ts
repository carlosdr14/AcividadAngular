import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BikerService } from 'src/app/services/Bikers/bike.service';

import { BikeM } from 'src/app/Models/biker.model';
import { LoginService } from 'src/app/services/Login/log.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css'],
  providers: [Location]
})

export class BikesComponent {

  bike?: BikeM;
@ViewChild('contenido') contenido: any;

@ViewChild('eliminar') eliminar:any;


bikes: BikeM[] = [];
constructor(private modal: NgbModal, private bikeService: BikerService,
  private location: Location,private router: Router, private authService:LoginService,) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token') ?? '';
    console.log(token);
  
  // Or 'admin', depending on the role of the user
    this.bikeService.getBikes(token).subscribe((res) => {
        this.bike = res;
        console.log(res);
    });
  
  }
EditarB() {
this.modal.open(this.contenido);
}



EliminarB() {
  this.modal.open(this.eliminar);
  }
  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/inicio']);
  }
  
}

