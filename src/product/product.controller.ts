import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller()
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Post('/product')
  async create(@Body() body: Product) {
    return await this.service.create(body);
  }

  @Put('/product/:id')
  async update(@Param('id') id: string, @Body() updates: Product) {
    this.service.update(id, updates);
  }

  @Get('/product/:id')
  async retrieve(@Param('id') id: string) {
    return this.service.retrieve(id);
  }

  @Delete('/product/:id')
  async delete(@Param('id') id: string) {
    this.service.delete(id);
  }
}
