import { Component } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../entities/pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent {
  pedido: Pedido = new Pedido();
  mensaje = '';

  constructor(private pedidoService: PedidoService) {}

  async hacerPedido() {
    try {
      await this.pedidoService.realizarPedido(this.pedido);
      this.mensaje = 'Pedido realizado con éxito';
    } catch (error) {
      this.mensaje = 'Error al realizar el pedido';
    }
  }
}
