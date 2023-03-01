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

id?: number;
brand: string = '';
model: string = '';
year: string = '';
color: string = '';

constructor(private modal: NgbModal, private carService: CarService,
  private location: Location,private router: Router, private authService:LoginService) { }


  ngOnInit(): void {
    const token = localStorage.getItem('token') ?? '';
    console.log(token);
  
  // Or 'admin', depending on the role of the user
    this.carService.getCars(token).subscribe((res) => {
        this.cars = res;
        console.log(res);
    },
    (err) => {
      if (err == 500)
      {
        alert("Nos encontramos en mantenimiento");
      }
    });
  
  }


EditarC(car:CarM) {
  this.id = car.id;
this.modal.open(this.contenido);
}

abrirC()

{
  const id = this.id ?? 0;

  const car = {
    
    brand: this.brand,
    model: this.model,
    year: this.year,
    color: this.color
  };
  console.log(car);
  console.log(id);
  const token = localStorage.getItem('token') ?? '';
  this.carService.updateCar(id,car,token).subscribe((res) => {
    this.ngOnInit();
    alert("Se ha actualizado correctamente");
  },
  (err) => {
    if (err == 500)
    {
      alert("Nos encontramos en mantenimiento");
    }
    if (err == 400)
    {
      alert("No se ha podido actualizar");
    }
  }

  );

}

EliminarC( car:any ) {
const id = car.id;
const token = localStorage.getItem('token') ?? '';
console.log(id);
this.carService.deleteCar(token,id).subscribe((res) => {
  alert("Se ha eliminado correctamente");
},
(err) => {
  if (err == 500)
  {
    alert("Nos encontramos en mantenimiento");
  }
  if (err == 400)
  {
    alert("No se ha podido eliminar");
  }
}

);


}

cerrarSesion() {
  this.authService.logout();
  this.router.navigate(['/inicio']);
}


}
