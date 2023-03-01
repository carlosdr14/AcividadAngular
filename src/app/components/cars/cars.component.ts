import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/Login/log.service';
import { Route, Router } from '@angular/router';
import { CarService } from 'src/app/services/Cars/car.service';
import { CarM } from 'src/app/Models/car.model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [Location]
})
export class CarsComponent {


@ViewChild('contenido') contenido: any;

@ViewChild('eliminar') eliminar:any;
car?: CarM;
cars: CarM[] = [];
constructor(private modal: NgbModal, private carService: CarService,
  private location: Location,private router: Router, private authService:LoginService) { }


  ngOnInit(): void {
    const token = localStorage.getItem('token') ?? '';
    console.log(token);
  
  // Or 'admin', depending on the role of the user
    this.carService.getCars(token).subscribe((res) => {
        this.car
    },
    (err) => {
      if (err == 500)
      {
        alert("Nos encontramos en mantenimiento");
      }
    });
  
  }


EditarC() {
this.modal.open(this.contenido);
}

EliminarC() {
this.modal.open(this.eliminar);
}

cerrarSesion() {
  this.authService.logout();
  this.router.navigate(['/inicio']);
}


}
