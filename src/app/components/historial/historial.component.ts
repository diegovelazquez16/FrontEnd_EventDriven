// src/app/components/historial/historial.component.ts
import { Component, OnInit } from '@angular/core';
import { HistorialService, Historial } from '../../services/historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  historialPedidos: Historial[] = [];

  constructor(private historialService: HistorialService) {}

  ngOnInit(): void {
    this.historialService.obtenerHistorial().subscribe({
      next: (data: Historial[]) => {
        console.log('Historial recibido:', data); // DEBUG
        this.historialPedidos = data;
      },
      error: (err: any) => {
        console.error('Error al obtener el historial:', err);
      }
    });
  }
}
