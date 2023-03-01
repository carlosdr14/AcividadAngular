import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/Login/log.service';
    import { catchError } from 'rxjs/operators';
    import { of } from 'rxjs';
import { Token } from '@angular/compiler';
    
  
@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  email: string = '';
  password: string = '';

  constructor(private authService: LoginService, private router: Router) {}

  onSubmit() {
    console.log(this.email);
    console.log(this.password);
    const form = {
      email: this.email,
      password: this.password,

    }

    this.authService.login(form).subscribe(
      (res) => {
        if (res==400)
        {
          alert("Contraseña o Email Incorrectos")
        }
        else if(res==401)
        {
          alert("Usuario no activado")
        }
        else
        {
          this.authService.setToken(res);
          this.router.navigate(['/menu']);
        }
      },
      (err) => {
        if (err == 500)
        {
          alert("Nos encontramos en mantenimiento");
        }
      }
    );

    
  }
  navegar() {
    this.router.navigate(['/registrar']);
  }
}
