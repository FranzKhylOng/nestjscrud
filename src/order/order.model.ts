import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from 'src/product/product.model';
import { User } from 'src/user/user.model';

@Schema()
export class Order {
  @Prop()
  user: User;
  @Prop()
  product: Product;
  @Prop()
  quantity: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
