import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/Cars/car.service';

@Component({
  selector: 'app-editarcar',
  templateUrl: './editarcar.component.html',
  styleUrls: ['./editarcar.component.css']
})
export class EditarcarComponent {

  id: number=0;
  brand: string='';
  model: string='';
  year: string='';
  color: string='';

  constructor(private carservice:CarService, private router: Router) {}

  onSubmit() {
    const car = {
      id: this.id,
      brand: this.brand,
      model: this.model,
      year: this.year,
      color: this.color
    };
    const token = localStorage.getItem('token') ?? '';

    this.carservice.addCar(car,token).subscribe(
      (res) => {
        alert('Successful');
        this.router.navigate(['/cars']); // redirigir a la página de coches
      },
      (err) => {
        alert('Error favor de verificar los datos');
      }
    );
  }
}
