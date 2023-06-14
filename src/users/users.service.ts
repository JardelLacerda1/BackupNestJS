import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'Jardel Lacerda',
      email: 'Jardellacerda2@outlook.com',
      password: '123456',
      idCompany: 'Dropdesk147',
      tags: ['ADM', 'Users'],
      description: 'Controle de Users',
    },
  ];
  
  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find(
        (user: User) => user.id === Number(id));

    if (!user) {
      throw new HttpException(
        `User ${id} não existe`, HttpStatus.NOT_FOUND);
    }
    return user;
  }

  create(createUserDto: any) {
    this.users.push(createUserDto);

  }

  update(id: string, updateUserDto: any) {
    const indexUser = this.users.findIndex(
        (users: User) => users.id === Number(id));
    this.users[indexUser] = updateUserDto;

  }

  remove(id: string) {
    const indexUser = this.users.findIndex(
      (users: User) => users.id === Number(id),
    );
    if (indexUser >= 0) {
      this.users.splice(indexUser, 1);
    }
  }
}
