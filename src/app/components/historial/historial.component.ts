// src/app/components/historial/historial.component.ts
import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../../services/historial.service';
import { Historial } from '../../entities/historial';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent implements OnInit {
  historial: Historial[] = [];
  mensaje = '';

  constructor(private historialService: HistorialService) {}

  ngOnInit(): void {
    this.obtenerHistorial();
  }

  obtenerHistorial() {
    this.historialService.getHistorial().subscribe({
      next: (data) => {
        this.historial = data;
      },
      error: (err) => {
        console.error(err);
        this.mensaje = 'Error al cargar el historial';
      },
    });
  }
}
