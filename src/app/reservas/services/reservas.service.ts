import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservas } from 'src/app/interfaces/reservas.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  ruta = environment.api;

  constructor(private http: HttpClient) { }

  guardarReserva = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.ruta}/reserva/guardar-reserva`, data);
  }

  getReservas = (): Observable<Reservas[]> => {
    return this.http.get<Reservas[]>(`${this.ruta}/reserva/traer-reservas`);
  }
  
}
