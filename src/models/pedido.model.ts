import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Persona} from './persona.model';
import {Producto} from './producto.model';

@model()
export class Pedido extends Entity {
  @property({
    type: 'string',
    Id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Id_Producto: string;

  @property({
    type: 'number',
    required: true,
  })
  Cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  Estado: number;

  @belongsTo(() => Persona)
  personaId: string;

  @hasOne(() => Producto)
  producto: Producto;

  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
