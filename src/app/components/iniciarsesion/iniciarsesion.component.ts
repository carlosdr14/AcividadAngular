import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent {

  constructor(private router: Router) { }

  navegar()
  {
    this.router.navigate(['/registrar']);
  }
}
