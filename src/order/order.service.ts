import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.model';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private model: Model<Order>) {}

  create(order: Order) {
    this.model.create(order);
  }

  update(id: string, updates: Order) {
    return this.model.findByIdAndUpdate(id, updates);
  }

  retrieve(id: string) {
    return this.model.findById(id);
  }

  delete(id: string) {
    this.model.findByIdAndDelete(id);
  }
}
