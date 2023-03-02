import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, Subject, tap, throwError } from 'rxjs';
import { BikeM } from 'src/app/Models/biker.model';
import { environment } from 'src/environments/enviroment.development';
import {  HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class BikerService {
  urlapi = environment.URL_API;
  private _refresh$ = new Subject<void>();
  private obtenerbiker = this.urlapi + "/bikes"
  private crearBiker = this.urlapi + "/bikes"
  private obtenerbikerid = this.urlapi + "/bikes/{id}"
  private modificarBiker = this.urlapi + "/bikes/{id}"
  private eliminarBiker = this.urlapi + "/bikes/{id}"
  private obtenerbikeridpersona = this.urlapi + "/"



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
  apiUrl = 'http://localhost:8000/api';

  addBiker(car: BikeM,token:string): Observable<BikeM> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
  
    });

    return this.http.post<BikeM>(this.crearBiker, car, { headers })
      .pipe(catchError(this.handleError))
      .pipe(tap(() => {
        this._refresh$.next();
      }));
  }
  

  getBiker(): Observable<BikeM[]> {
    return this.http.get<BikeM[]>(this.obtenerbiker)
    .pipe(retry(3), catchError(this.handleError))
  }


  getOneBiker(id: number): Observable<BikeM> {
    return this.http.get<BikeM>(this.obtenerbikerid + id)
      .pipe(retry(3), catchError(this.handleError));
  }

  updateBiker(id:number,car:BikeM ,token:string): Observable<BikeM> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,

    });
    return this.http.put<BikeM>( `${this.apiUrl}/bikes/${id}`, car, { headers })
      .pipe(catchError(this.handleError))
      .pipe(tap(() => {
        this._refresh$.next();
      }));
  }

  deleteBiker(id:number, token:string): Observable<BikeM> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete<BikeM>(`${this.apiUrl}/bikes/${id}`, { headers })
      .pipe(retry(3), catchError(this.handleError));
  }

  getBikes(token: string): Observable<BikeM[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<BikeM[]>(`${this.apiUrl}/bikes`, { headers });
  }
  BikeUser(token: string,id:number): Observable<BikeM[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<BikeM[]>(`${this.apiUrl}/BikeUser/${id}`, { headers });
  }

  BIke(user_id: number,bike_id:number,token:string): Observable<any> {

    const form= 
    {
      user_id : user_id,
      bike_id: bike_id
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    console.log("FORMULARIO DEL LA BIKE",form)
    return this.http.post<any>(`${this.apiUrl}/BIKE`,form ,{ headers })
      .pipe(catchError(this.handleError))
      .pipe(tap(() => {
        this._refresh$.next();
      }));
  }

}
