import axios from 'axios';
import { Injectable } from '@angular/core';
import { Pedido } from '../entities/pedido';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private apiUrl = 'http://localhost:8080/pedidos';

  async realizarPedido(pedido: Pedido) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(this.apiUrl, pedido, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error al realizar el pedido');
    }
  }
}
