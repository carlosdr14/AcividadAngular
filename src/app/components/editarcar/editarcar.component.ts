import { Component } from '@angular/core';
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
  year: number=0;
  color: string='';

  constructor(private carservice:CarService) {}

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
      },
      (err) => {
        alert('Error favor de verificar los datos');
      }
    );
  }
}
