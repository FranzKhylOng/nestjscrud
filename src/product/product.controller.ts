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
import { ProductModel, Product } from './product.model';

@Controller()
export class ProductController {
  constructor(private readonly productModel: ProductModel) {}

  @Post('/product')
  async create(@Body() body: Product) {
    const newProduct = {
      id: crypto.randomBytes(64).toString('hex'),
      ...body,
    };

    this.productModel.create(newProduct);
    console.log('Product created:', newProduct);
  }

  @Put('/product/:id')
  async update(@Param('id') id: string, @Body() updates: Partial<Product>) {
    this.productModel.update(id, updates);
  }

  @Get('/product/:id')
  async retrieve(@Param('id') id: string) {
    return this.productModel.retrieve(id);
  }

  @Delete('/product/:id')
  async delete(@Param('id') id: string) {
    this.productModel.delete(id);
  }
}
