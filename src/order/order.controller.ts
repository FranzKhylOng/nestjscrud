import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import crypto from 'crypto';
import { OrderModel, Order } from './order.model';

@Controller()
export class OrderController {
  constructor(private readonly orderModel: OrderModel) {}

  @Post('/order')
  async create(@Body() body: Order) {
    const newOrder = {
      id: crypto.randomBytes(64).toString('hex'),
      ...body,
    };

    this.orderModel.create(newOrder);
    console.log('Order created:', newOrder);
  }

  @Put('/order/:id')
  async update(@Param('id') id: string, @Body() updates: Partial<Order>) {
    this.orderModel.update(id, updates);
  }

  @Get('/order/:id')
  async retrieve(@Param('id') id: string) {
    return this.orderModel.retrieve(id);
  }

  @Delete('/order/:id')
  async delete(@Param('id') id: string) {
    this.orderModel.delete(id);
  }
}
