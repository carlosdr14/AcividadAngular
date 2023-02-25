import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, retry, Subject, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/viroment';
import { login } from 'src/app/Models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token;

  constructor() {
    // Aquí podrías inicializar el token desde el almacenamiento local o una cookie, si existe.
    this.token = localStorage.getItem('token');
  }

  login(username: string, password: string): boolean {
    // Aquí podrías realizar una llamada a un servicio de autenticación para obtener el token.
    // En este ejemplo, se asume que el token es válido si el usuario es "admin" y la contraseña es "password".
    if (username === 'admin' && password === 'password') {
      this.token = 'fake-token';
      localStorage.setItem('token', this.token);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    // Aquí deberías eliminar el token del almacenamiento local o la cookie.
    this.token = null;
    localStorage.removeItem('token');
  }

  hasToken(): boolean {
    // Aquí simplemente verificamos si el token existe.
    return !!this.token;
  }

  getToken(): string {
    // Aquí podrías devolver el token almacenado.
    return this.token= '';
  }

}