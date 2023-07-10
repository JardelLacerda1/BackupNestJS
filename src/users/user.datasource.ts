import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';

export abstract class UserDataSource {
  public abstract searchId(id: string): Promise<UserEntity>;

  public abstract create(users: UserEntity): Promise<UserEntity>;

  public abstract update(user: UserEntity): Promise<Record<string, boolean>>;

  public abstract remove(id: string): Promise<Record<string, boolean>>;
}

@Injectable()
export class UserDataSourceImpl implements UserDataSource {
  public searchId(id: string): Promise<UserEntity> {
    console.log('searchId DATA SOURCE COM SUCESSO');
    const userEntity = new UserEntity({
      idCompany: '12345',
      name: 'Jardel lacerda',
      email:'jaredelL@hotmail.com',
    });
    return Promise.resolve(userEntity);
  }
  public create(user: UserEntity): Promise<UserEntity> {
    const userEntity = new UserEntity({
      ...user
      });
    console.log('CREATE USER DATA SOURCE COM SUCESSO');
    return Promise.resolve(userEntity);
  }
  public update(user: UserEntity): Promise<Record<string, boolean>> {
    throw new Error('Method not implemented.');
  }
  public remove(id: string): Promise<Record<string, boolean>> {
    throw new Error('Method not implemented.');
  }
}

    /* 
     */

