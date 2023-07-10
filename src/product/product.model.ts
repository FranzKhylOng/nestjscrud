import { Injectable } from '@nestjs/common';
import loki from 'lokijs';

const db = new loki('prouct.db');

export interface Product {
  id: string;
  name: string;
  quantity: number;
  description: string;
}

const products = db.addCollection<Product>('products');

@Injectable()
export class ProductModel {
  create(product) {
    products.insert(product);
  }

  update(id: string, updates: Partial<Product>) {
    const product = products.findOne({ id });
    if (product) {
      Object.assign(product, updates);
      products.update(product);
      return product;
    }
    return null;
  }

  retrieve(id: string) {
    return products.findOne({ id });
  }

  delete(id: string) {
    const product = products.findOne({ id });
    if (product) {
      products.remove(product);
      return product;
    }
    return null;
  }
}
