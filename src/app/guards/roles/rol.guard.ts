import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/VerificacionRoles/roles.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private rolservice: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.rolservice.getUserRole().then(role => {
        if (role === "admin") {
          return true;
        } else {
          this.router.navigate(['/menu']); // redirigir a la página de inicio de sesión si el usuario no es un administrador
          return false;
        }
      });
  }
}
