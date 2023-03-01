import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from 'src/app/services/Login/log.service';

@Injectable({
  providedIn: 'root'
})
export class StatusGuard implements CanActivate {

  constructor(
    private authService: LoginService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const token = this.authService.getToken();
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      if (decodedToken.status === 0) {
        this.authService.logout();
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    } else {
      this.authService.logout();
      this.router.navigate(['/login']);
      return false;
    }
  }
}
