import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      // Si existe un token en el LocalStorage, redirige al usuario a la página principal
      this.router.navigate(['/menu']);
      return false;
    } else {
      // Si no existe un token en el LocalStorage, permite el acceso a la página de inicio de sesión
      return true;
    }
  }
}
