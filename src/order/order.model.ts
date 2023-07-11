import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Order {
  @Prop()
  user: string;
  @Prop()
  product: string;
  @Prop()
  quantity: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
