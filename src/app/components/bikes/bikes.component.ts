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
id?: number;
brand: string = '';
model: string = '';
year: string = '';
color: string = '';


constructor(private modal: NgbModal, private bikeService: BikerService,
  private location: Location,private router: Router, private authService:LoginService,) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token') ?? '';
    console.log(token);
  
  // Or 'admin', depending on the role of the user
    this.bikeService.getBikes(token).subscribe((res) => {
        this.bikes = res;
        console.log(res);
    });
  
  }
EditarB(bike:BikeM) {
  this.id=bike.id;
this.modal.open(this.contenido);
}
abrirC()
{
  const id = this.id ?? 0;
  console.log(id);
  const bike = {
    brand: this.brand,
    model: this.model,
    year: this.year,
    color: this.color
  };
  console.log(bike);
  const token = localStorage.getItem('token') ?? '';
  this.bikeService.updateBiker(id,bike,token).subscribe(
    (res) => {
      console.log(res);
      this.modal.dismissAll();
      this.ngOnInit();
    }
  );

}


EliminarB() {
  this.modal.open(this.eliminar);
  }
  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/inicio']);
  }
  
}

