import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from 'src/product/product.model';

@Schema()
export class User {
  @Prop()
  username: string;
  @Prop()
  password: string;
  @Prop()
  address: string;
  @Prop()
  wishlist: Product[];
}

export const UserSchema = SchemaFactory.createForClass(User);
