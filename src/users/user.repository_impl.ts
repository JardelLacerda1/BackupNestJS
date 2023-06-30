import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { UserDataSource } from './user.datasource';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDataSource: UserDataSource) {}

  public searchId(id: string): Promise<UserEntity> {
    try {
      return this.userDataSource.searchId(id);
    } catch (e) {
      console.error(e);
    }
  }
  public create(user: UserEntity): Promise<UserEntity> {
    try {
      return this.userDataSource.create(user);
    } catch (e) {
      console.error(e);
    }
  }
  public update(user: UserEntity): Promise<Record<string, boolean>> {
    try {
      return this.userDataSource.update(user);
    } catch (e) {
      console.error(e);
    }
  }
  public remove(id: string): Promise<Record<string, boolean>> {
    try {
      return this.userDataSource.remove(id);
    } catch (e) {
      console.error(e);
    }
  }
}
