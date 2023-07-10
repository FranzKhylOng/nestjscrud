import { Injectable } from '@nestjs/common';
import { Order, OrderModel } from './order.model';

@Injectable()
export class OrderService {
  constructor(private readonly order: OrderModel) {}

  create(order: Order) {
    this.order.create(order);
  }

  update(id: string, updates: Order) {
    return this.order.update(id, updates);
  }

  retrieve(id: string) {
    return this.order.retrieve(id);
  }

  delete(id: string) {
    this.order.delete(id);
  }
}
