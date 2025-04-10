// historial.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Historial {
  id: number;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private apiUrl = 'http://localhost:8080/historial'; // Asegurate que este endpoint sea correcto

  constructor(private http: HttpClient) {}

  obtenerHistorial(): Observable<Historial[]> {
  return this.http.get<any[]>(this.apiUrl).pipe(
    map((res) =>
      res.map(item => ({
        id: item.ID,
        estado: item.Estado
      }))
    )
  );
}

}
