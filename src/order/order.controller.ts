import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.model';

@Controller()
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @Post('/order')
  async create(@Body() body: Order) {
    return await this.service.create(body);
  }

  @Put('/order/:id')
  async update(@Param('id') id: string, @Body() updates: Order) {
    this.service.update(id, updates);
  }

  @Get('/order/:id')
  async retrieve(@Param('id') id: string) {
    return this.service.retrieve(id);
  }

  @Delete('/order/:id')
  async delete(@Param('id') id: string) {
    this.service.delete(id);
  }
}
