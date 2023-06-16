import { Injectable, Param } from '@nestjs/common';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class UserService {
  private users: UserEntity[] = [];
  private searchId(id: string) {
    const newUserData = this.users.find((savedUser) => savedUser.id === id);

    if (!newUserData) {
      throw new Error('Usuario não existe');
    }
    return newUserData;
  }
  async create(users: UserEntity) {
    this.users.push(users);
  }
  findAll() {
    return this.users;
  }
  async update(id: string, updateData: Partial<UserEntity>) {
    const users = this.searchId(id);

    Object.entries(updateData).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }
      users[chave] = valor;
    });
    return users;
  }
  checkEmailExists(email: string): boolean {
    return !!this.users.find((users) => users.email === email);
  }
  async remove(id: string) {
    const users = this.searchId(id);
    this.users = this.users.filter((saved) => saved.id !== id);
    return users;
  }
}
