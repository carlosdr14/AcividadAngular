
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarService } from 'src/app/services/Cars/car.service';
import { Router } from '@angular/router';
import { CarM } from 'src/app/Models/car.model';
import { BikeM } from 'src/app/Models/biker.model';
import { BikerService } from 'src/app/services/Bikers/bike.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-eliminarcar',
  templateUrl: './eliminarcar.component.html',
  styleUrls: ['./eliminarcar.component.css'],
  providers: [Location]
})
export class EliminarcarComponent {

  cars: CarM[]=[]
  bikes:BikeM[]=[]
  items = ['item 1'+ 1];


  constructor(private modal: NgbModal, private carService: CarService,
    private location: Location,private router: Router,private bikeService:BikerService) { }

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
      this.bikeService.getBikes(token).subscribe((res) => {
        this.bikes = res;
        console.log(res);
    },
    (err) => {
      if (err == 500)
      {
        alert("Nos encontramos en mantenimiento");
      }
    });
    
    }

}
