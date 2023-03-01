
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, Subject, tap, throwError } from 'rxjs';
import { PersonaM } from 'src/app/Models/persona.model';
import { environment } from 'src/environments/viroment';
import {  HttpHeaders } from '@angular/common/http';




@Injectable({ providedIn: 'root' })


export class PersonaService {
  urlapi = environment.URL_API;
  private _refresh$ = new Subject<void>();
  private obtenerpersonas = this.urlapi + "/clients"
  private activarPersona = this.urlapi + "/active/{id}"
  private crearPersona = this.urlapi + "/clients"
  private obtenerpersona = this.urlapi + "/clients/{id}"
  private modificarPersona = this.urlapi + "/clients/{id}"
  private eliminarPersona = this.urlapi + "/clients/{id}"



  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      console.error('An error occurred:', error.error);
    } else {
      console.error('El backend devolvió el código ${error.status}, el cuerpo era:', error.error)
    }
    return throwError(() => new Error('Algo malo sucedió; por favor, inténtelo de nuevo más tarde.'));
  }

  constructor(private http: HttpClient) { }

  get refresh$() { return this._refresh$ }

  getPersona(): Observable<PersonaM[]> {
    return this.http.get<PersonaM[]>(this.obtenerpersonas)
    .pipe(retry(3), catchError(this.handleError))
  }


  addPersona(persona: PersonaM): Observable<any> {
    return this.http.post<PersonaM>(this.crearPersona, persona)
      .pipe(catchError(this.handleError))
      .pipe(tap(() => {
        this._refresh$.next();
      }));
  }
  apiUrl = 'http://localhost:8000/api';



  activarCliente(id: number, codigo: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/active/${id}`, {activation_code: codigo});
  }
  getOne( email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/getuser`, {email: email});
  }

  updatePersona(persona: PersonaM,id:number, token:string): Observable<PersonaM> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
  
    });
    return this.http.put<PersonaM>(`${this.apiUrl}/clients/${id}`, persona, { headers })
      .pipe(catchError(this.handleError))
      .pipe(tap(() => {
        this._refresh$.next();
      }));

  }

  deletePersona(id:number, token:string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete<any>(`${this.apiUrl}/clients/${id}`, { headers })
      .pipe(retry(3), catchError(this.handleError));
  }

  getPersonas(token: string): Observable<PersonaM[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
  
    });
    return this.http.get<PersonaM[]>(`${this.apiUrl}/allusers`, { headers });
  }


}
