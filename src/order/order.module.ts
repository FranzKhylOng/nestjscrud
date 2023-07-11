import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderModel } from './order.model';
import { OrderService } from './order.service';

@Module({
  controllers: [OrderController],
  providers: [OrderModel, OrderService],
})
export class OrderModule {}
