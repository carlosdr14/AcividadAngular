import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/Login/log.service';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent {
  email: string='';
  password: string='';
  error: string = '';

  constructor(private authService: LoginService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/menu']);
        },
        _error => {
          this.error = 'Correo o contraseña incorrectos';
        }
      );
  }

  navegar() {
    this.router.navigate(['/registrar']);
  }
}
