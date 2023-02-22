import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/Login/log.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  constructor(private loginservice:LoginService, private router: Router) { }

  cerrarSesion() {
    this.loginservice.logout();
    this.router.navigate(['/inicio']);
  }


}
