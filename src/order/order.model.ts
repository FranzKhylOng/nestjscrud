import { Injectable } from '@nestjs/common';
import loki from 'lokijs';

const db = new loki('order.db');

export interface Order {
  id: string;
  user: string;
  product: string;
  quantity: number;
}

const orders = db.addCollection<Order>('orders');

@Injectable()
export class OrderModel {
  create(order) {
    orders.insert(order);
  }

  update(id: string, updates: Partial<Order>) {
    const order = orders.findOne({ id });
    if (order) {
      Object.assign(order, updates);
      orders.update(order);
      return order;
    }
    return null;
  }

  retrieve(id: string) {
    return orders.findOne({ id });
  }

  delete(id: string) {
    const order = orders.findOne({ id });
    if (order) {
      orders.remove(order);
      return order;
    }
    return null;
  }
}
