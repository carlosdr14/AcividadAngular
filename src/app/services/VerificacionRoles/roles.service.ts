import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonaM } from 'src/app/Models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private rolesUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<PersonaM> {
    return this.http.get<PersonaM>(`${this.rolesUrl}/clients`);
  }

}
