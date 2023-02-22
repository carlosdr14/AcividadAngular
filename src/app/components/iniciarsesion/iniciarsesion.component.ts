import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent {
  email: string = '';
  password: string = '';
  active: number = 1;
  loginForm!: NgForm;

  constructor(private router: Router) { 
  }

  onSubmit(form: NgForm): void {
    console.log(form);
    this.router.navigate(['/menu']);
  }
  navegar() {
    this.router.navigate(['/registrar']);
  }
}
