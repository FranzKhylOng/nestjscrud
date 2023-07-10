import { Injectable } from '@nestjs/common';
import { Product, ProductModel } from './product.model';

@Injectable()
export class ProductService {
  constructor(private readonly product: ProductModel) {}

  create(product: Product) {
    this.product.create(product);
  }

  update(id: string, updates: Product) {
    return this.product.update(id, updates);
  }

  retrieve(id: string) {
    return this.product.retrieve(id);
  }

  delete(id: string) {
    this.product.delete(id);
  }
}
