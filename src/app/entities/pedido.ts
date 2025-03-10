export class Pedido {
    id?: number;
    usuarioId!: number;
    restauranteId!: number;
    producto1!: string;
    producto2?: string;
    producto3?: string;
    total!: number;
    estado!: string;
    pagoId!: number;
  }
  