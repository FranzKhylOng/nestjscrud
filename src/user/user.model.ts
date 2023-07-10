import { Injectable } from '@nestjs/common';
import R from 'ramda';

export type User = {
  id: string;
  username: string;
  password: string;
  age: number;
  address: string;
};

export let users: User[] = [];

@Injectable()
export class UserModel {
  create(user: User) {
    console.log(user);

    users = R.append(user)(users);

    console.log(users);
  }

  update(id: string, updates: User) {
    const user = R.filter((element: User) => {
      return element.id === id;
    })(users);

    users[R.findIndex(R.prop(id, 'id'))(users)] = R.head(
      R.mergeLeft(user, updates),
    );

    return user;
  }

  retrieve(id: string) {
    return R.compose(
      R.head,
      R.filter((element: User) => {
        return element.id === id;
      }),
    )(users);
  }

  delete(id: string) {
    users = R.remove(R.findIndex(R.prop(id, 'id'))(users), 1)(users) as User[];
  }
}
