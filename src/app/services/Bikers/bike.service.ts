import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, Subject, tap, throwError } from 'rxjs';
import { BikeM } from 'src/app/Models/biker.model';
import { environment } from 'src/environments/enviroment.development';

@Injectable({
  providedIn: 'root'
})
export class BikerService {
  urlapi = environment.URL_API;
  private _refresh$ = new Subject<void>();
  private obtenerbiker = this.urlapi + "/"
  private crearBiker = this.urlapi + "/"
  private obtenerbikerid = this.urlapi + "/"
  private modificarBiker = this.urlapi + "/"
  private eliminarBiker = this.urlapi + "/"
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

  getBiker(): Observable<BikeM[]> {
    return this.http.get<BikeM[]>(this.obtenerbiker)
    .pipe(retry(3), catchError(this.handleError))
  }

  addBiker(biker: BikeM): Observable<BikeM> {
    return this.http.post<BikeM>(this.crearBiker, biker)
      .pipe(catchError(this.handleError))
      .pipe(tap(() => {
        this._refresh$.next();
      }));
  }

  getOneBiker(id: number): Observable<BikeM> {
    return this.http.get<BikeM>(this.obtenerbikerid + id)
      .pipe(retry(3), catchError(this.handleError));
  }

  updateBiker(biker:BikeM ): Observable<BikeM> {
    return this.http.put<BikeM>(this.modificarBiker + biker.id, biker)
      .pipe(catchError(this.handleError))
      .pipe(tap(() => {
        this._refresh$.next();
      }));
  }

  deleteBiker(biker:BikeM): Observable<BikeM> {
    return this.http.delete<BikeM>(this.eliminarBiker + biker.id)
      .pipe(retry(3), catchError(this.handleError));
  }

}
