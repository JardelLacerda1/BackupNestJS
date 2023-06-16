import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class UserService {
  private users: UserEntity[] = [];

  async create(users: UserEntity) {
    this.users.push(users);
  }
  findAll() {
    return this.users;
  }

  async update(id: string, updateData: Partial<UserEntity>) {
    const newUserData = this.users.find((savedUser) => savedUser.id === id);

    if (!newUserData) {
      throw new Error('Usuario não existe');
    }

    Object.entries(updateData).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }
      newUserData[chave] = valor;
    });
    return newUserData;
  }

  async EmailAlreadyExists(email: string) {
    const UserAlreadyExists = this.users.find((users) => users.email === email);
    return UserAlreadyExists !== undefined;
  }
}
