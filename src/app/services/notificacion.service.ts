import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificacionService {
  private socket: WebSocket;

  constructor() {
    this.socket = new WebSocket('ws://localhost:8081/notificaciones');

    this.socket.onmessage = (event) => {
      alert('📢 Nueva Notificación: ' + event.data);
    };
  }
}
