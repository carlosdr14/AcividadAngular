import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, Subject, tap, throwError } from 'rxjs';
import { CarM } from 'src/app/Models/car.model';
import { environment } from 'src/environments/enviroment.development';

import {  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  urlapi = environment.URL_API;
  private _refresh$ = new Subject<void>();
  private obtenercar = this.urlapi + "/cars"
  private crearCar = this.urlapi + "/cars"
  private obtenercarid = this.urlapi + "/cars/{id}"
  private modificarCar = this.urlapi + "/cars/{id}"
  private eliminarCar = this.urlapi + "/cars/{id}"

  



  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      console.error('An error occurred:', error.error);
    } else {
      console.error('El backend devolvió el código ${error.status}, el cuerpo era:', error.error)
    }
    return throwError(() => new Error('Algo malo sucedió; por favor, inténtelo de nuevo más tarde.'));
  }

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:8000/api';

  get refresh$() { return this._refresh$ }

  addCar(car: CarM,token:string): Observable<CarM> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
  
    });

    return this.http.post<CarM>(this.crearCar, car, { headers })
      .pipe(catchError(this.handleError))
      .pipe(tap(() => {
        this._refresh$.next();
      }));
  }
  

  getOneCar(id: number): Observable<CarM> {
    return this.http.get<CarM>(this.obtenercarid + id)
      .pipe(retry(3), catchError(this.handleError));
  }

  updateCar(id:number,car:CarM ,token:string): Observable<CarM> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,

    });
    return this.http.put<CarM>( `${this.apiUrl}/cars/${id}`, car, { headers })
      .pipe(catchError(this.handleError))
      .pipe(tap(() => {
        this._refresh$.next();
      }));
  }

  deleteCar( token:string,id:number): Observable<CarM> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete<CarM>(`${this.apiUrl}/cars/${id}`, { headers })
      .pipe(retry(3), catchError(this.handleError));
  }

  getCars(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
  
    });
    return this.http.get<any>(`${this.apiUrl}/cars`, { headers });
  }
  CarUser(token: string,id:number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
  
    });
    return this.http.get<any>(`${this.apiUrl}/CarUser/${id}`, { headers });
  }

  Car(user_id: number, car_id:number,token:string): Observable<any> {
    const form= 
    {
      user_id : user_id,
      car_id: car_id
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log("FORMULARIO DEL CARRO",form)

   
    return this.http.post<any>(`${this.apiUrl}/CAR`,form, {headers})
      .pipe(catchError(this.handleError))
      .pipe(tap(() => {
        this._refresh$.next();
      }));
  }
}