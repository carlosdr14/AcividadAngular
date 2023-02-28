import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUserRole(): Promise<string> {
    // Aquí puedes hacer una llamada a tu API para obtener el rol del usuario
    // En este ejemplo, se devuelve un rol fijo (1) para fines de demostración
    return Promise.resolve("admin");
  }
}
