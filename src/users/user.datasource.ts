import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { generateUUID } from 'src/utils/utils';

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
    const userEntity = new UserEntity();
    return Promise.resolve(userEntity);
  }

  public create(user: UserEntity): Promise<UserEntity> {
    const userEntity = new UserEntity();
    console.log('CREATE USER DATA SOURCE COM SUCESSO');
    return Promise.resolve(userEntity);
    /* 
    userEntity.id = generateUUID();
    userEntity.name = dataDoUser.name;
    userEntity.nameCompany = dataDoUser.nameCompany;
    userEntity.email = dataDoUser.email;
    userEntity.password = dataDoUser.password;

    this.userService.createUser(userEntity);

    return {
      user: new ListUserDTO(
        userEntity.id,
        userEntity.name,
        userEntity.nameCompany,
        userEntity.email,
      ),
      messagem: 'Usuario criado com sucesso',
    }; */
  }
  public update(user: UserEntity): Promise<Record<string, boolean>> {
    throw new Error('Method not implemented.');
  }
  public remove(id: string): Promise<Record<string, boolean>> {
    throw new Error('Method not implemented.');
  }
}
