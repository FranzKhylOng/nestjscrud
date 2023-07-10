import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserModel, UserService],
})
export class UserModule {}
