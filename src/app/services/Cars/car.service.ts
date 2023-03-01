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
  private obtenercar = this.urlapi + "/bikes"
  private crearCar = this.urlapi + "/bikes"
  private obtenercarid = this.urlapi + "/bikes/{id}"
  private modificarCar = this.urlapi + "/bikes/{id}"
  private eliminarCar = this.urlapi + "/bikes/{id}"

  



  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      console.error('An error occurred:', error.error);
    } else {
      console.error('El backend devolvió el código ${error.status}, el cuerpo era:', error.error)
    }
    return throwError(() => new Error('Algo malo sucedió; por favor, inténtelo de nuevo más tarde.'));
  }

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:8000/api';

  get refresh$() { return this._refresh$ }

  
  addCar(car: CarM): Observable<CarM> {
    return this.http.post<CarM>(this.crearCar, car)
      .pipe(catchError(this.handleError))
      .pipe(tap(() => {
        this._refresh$.next();
      }));
  }

  getOneCar(id: number): Observable<CarM> {
    return this.http.get<CarM>(this.obtenercarid + id)
      .pipe(retry(3), catchError(this.handleError));
  }

  updateCar(car:CarM ): Observable<CarM> {
    return this.http.put<CarM>(this.modificarCar + car.id, car)
      .pipe(catchError(this.handleError))
      .pipe(tap(() => {
        this._refresh$.next();
      }));
  }

  deleteCar(car:CarM): Observable<CarM> {
    return this.http.delete<CarM>(this.eliminarCar + car.id)
      .pipe(retry(3), catchError(this.handleError));
  }

  getCars(token: string): Observable<CarM[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
  
    });
    return this.http.get<CarM[]>(`${this.apiUrl}/cars`, { headers });
  }

}