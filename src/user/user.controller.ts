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
import { UserModel, User } from './user.model';

@Controller()
export class UserController {
  constructor(private readonly userModel: UserModel) {}

  @Post('/user')
  async create(@Body() body: User) {
    const newUser = {
      id: crypto.randomBytes(64).toString('hex'),
      ...body,
    };

    this.userModel.create(newUser);
    console.log('User created:', newUser);
  }

  @Put('/user/:id')
  async update(@Param('id') id: string, @Body() updates: Partial<User>) {
    this.userModel.update(id, updates);
  }

  @Get('/user/:id')
  async retrieve(@Param('id') id: string) {
    return this.userModel.retrieve(id);
  }

  @Delete('/user/:id')
  async delete(@Param('id') id: string) {
    this.userModel.delete(id);
  }
}
