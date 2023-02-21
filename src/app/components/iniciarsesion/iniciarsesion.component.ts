import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/Login/log.service';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent {
  username!:string;
  password!:string;

  constructor(private router: Router,private loginService: LoginService) { }

  navegar()
  {
    this.router.navigate(['/registrar']);
  }

  onSubmit(): void {
    this.loginService.login(this.username, this.password).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/home']); // Redirigimos al usuario a la página de inicio si se ha autenticado correctamente
        } else {
          alert('Nombre de usuario o contraseña incorrectos'); // Mostramos un mensaje de error si las credenciales no son válidas
        }
      }
    );
  }
  
}
