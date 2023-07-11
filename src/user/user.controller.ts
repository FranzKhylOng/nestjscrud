import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('/user')
  async create(@Body() body: User) {
    return await this.service.create(body);
  }

  @Put('/user/:id')
  async update(@Param('id') id: string, @Body() updates: User) {
    this.service.update(id, updates);
  }

  @Get('/user/:id')
  async retrieve(@Param('id') id: string) {
    return this.service.retrieve(id);
  }

  @Delete('/user/:id')
  async delete(@Param('id') id: string) {
    this.service.delete(id);
  }
}
