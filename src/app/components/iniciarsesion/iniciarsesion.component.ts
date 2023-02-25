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
  email: string = '';
  password: string = '';
  active= 0;
  loginForm!: NgForm;

  constructor(private router: Router, private authService: LoginService) { }

  onSubmit() {
    if (this.authService.login(this.email, this.password)) {
      // Si el inicio de sesión es exitoso, redirigir a la página de inicio.
      this.router.navigate(['/inicio']);
    } else {
      // Si el inicio de sesión falla, mostrar un mensaje de error.
      alert('El nombre de usuario o la contraseña son incorrectos.');
    }
  }
  navegar() {
    this.router.navigate(['/registrar']);
  }
}
