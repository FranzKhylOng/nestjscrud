import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop()
  name: string;
  @Prop()
  quantity: number;
  @Prop()
  description: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
