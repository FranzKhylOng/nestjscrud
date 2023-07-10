import { Injectable } from '@nestjs/common';
import { User, UserModel } from './user.model';

@Injectable()
export class UserService {
  constructor(private readonly user: UserModel) {}

  create(user: User) {
    this.user.create(user);
  }

  update(id: string, updates: User) {
    return this.user.update(id, updates);
  }

  retrieve(id: string) {
    return this.user.retrieve(id);
  }

  delete(id: string) {
    this.user.delete(id);
  }
}
