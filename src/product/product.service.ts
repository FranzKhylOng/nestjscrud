import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private model: Model<Product>) {}

  create(product: Product) {
    this.model.create(product);
  }

  update(id: string, updates: Product) {
    return this.model.updateOne({ id }, updates);
  }

  retrieve(id: string) {
    return this.model.findOne({ id });
  }

  delete(id: string) {
    this.model.deleteOne({ id });
  }
}
