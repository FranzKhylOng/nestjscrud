import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  create(user: User) {
    this.model.create(user);
  }

  update(id: string, updates: User) {
    return this.model.updateOne({ id }, updates);
  }

  retrieve(id: string) {
    return this.model.findOne({ id });
  }

  delete(id: string) {
    this.model.deleteOne({ id });
  }
}
