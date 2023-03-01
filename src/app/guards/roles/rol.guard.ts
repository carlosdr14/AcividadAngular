import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/VerificacionRoles/roles.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getCurrentUser().pipe(
      map(user => {
        if (user.role === 2) {
          return true;
        } else {
          // Redirigir a la página de inicio de sesión si el usuario no tiene el rol necesario
          return false;
        }
      }),
    );
  }
  
}
