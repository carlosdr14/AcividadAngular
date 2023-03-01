import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BikerService } from 'src/app/services/Bikers/bike.service';

@Component({
  selector: 'app-editarbiker',
  templateUrl: './editarbiker.component.html',
  styleUrls: ['./editarbiker.component.css']
})
export class EditarbikerComponent {
  id: number=0;
  brand: string='';
  model: string='';
  year: string='';
  color: string='';

  constructor(private bikeservice:BikerService, private router: Router) {}

  onSubmit() {
    const car = {
      id: this.id,
      brand: this.brand,
      model: this.model,
      year: this.year,
      color: this.color
    };
    const token = localStorage.getItem('token') ?? '';

    this.bikeservice.addBiker(car,token).subscribe(
      (res) => {
        alert('Successful');
        this.router.navigate(['/bikes']); // redirigir a la página de coches
      },
      (err) => {
        alert('Error favor de verificar los datos');
      }
    );
  }

}
