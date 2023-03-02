import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarService } from 'src/app/services/Cars/car.service';
import { Router } from '@angular/router';
import { CarM } from 'src/app/Models/car.model';
import { BikeM } from 'src/app/Models/biker.model';
import { BikerService } from 'src/app/services/Bikers/bike.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eliminarcar',
  templateUrl: './eliminarcar.component.html',
  styleUrls: ['./eliminarcar.component.css'],
  providers: [Location]
})
export class EliminarcarComponent {

  cars: CarM[]=[]
  bikes:BikeM[]=[]
  items: string[] = [];
  id: number = 0;
  bikess:BikeM[]=[]
  carss:CarM[]=[]

  constructor(private modal: NgbModal, private carService: CarService,
    private location: Location,private router: Router,private bikeService:BikerService,
    private activeRoute:ActivatedRoute) { }

    ngOnInit(): void {
      this.activeRoute.queryParams.subscribe(params => {
        const id = params['id'];
        console.log("ID",id); 
        this.id = id;
      });
      
      const token = localStorage.getItem('token') ?? '';
      console.log(token);
    
  
      this.carService.CarUser(token,this.id).subscribe((res) => {
          this.cars = res;
          console.log(res);
      },
      (err) => {
        if (err == 500)
        {
          alert("Nos encontramos en mantenimiento");
        }
      });
      this.bikeService.BikeUser(token,this.id).subscribe((res) => {
        this.bikes = res;
        console.log(res);
    },
    (err) => {
      if (err == 500)
      {
        alert("Nos encontramos en mantenimiento");
      }
    });
    this.bikeService.getBikes(token).subscribe((res) => {
      this.bikess = res;
      console.log(res);
    
    }
    );
    this.carService.getCars(token).subscribe((res) => {
      this.carss = res;
      console.log(res);
    
    }
    );

  }

}
