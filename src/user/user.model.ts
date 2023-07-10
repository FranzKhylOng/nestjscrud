import { Injectable } from '@nestjs/common';
import loki from 'lokijs';

const db = new loki('example.db');

export interface User {
  id: string;
  username: string;
  password: string;
  address: string;
  wishlist: string[];
}

const users = db.addCollection<User>('users');

@Injectable()
export class UserModel {
  create(user) {
    users.insert(user);
  }

  update(id: string, updates: Partial<User>) {
    const user = users.findOne({ id });
    if (user) {
      Object.assign(user, updates);
      users.update(user);
      return user;
    }
    return null;
  }

  retrieve(id: string) {
    return users.findOne({ id });
  }

  delete(id: string) {
    const user = users.findOne({ id });
    if (user) {
      users.remove(user);
      return user;
    }
    return null;
  }
}
