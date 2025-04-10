// src/app/services/historial.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historial } from '../entities/historial';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistorialService {
  private apiUrl = 'http://localhost:8080/historial'; // Ajusta a tu URL real

  constructor(private http: HttpClient) {}

  getHistorial(): Observable<Historial[]> {
    return this.http.get<Historial[]>(this.apiUrl);
  }
}
