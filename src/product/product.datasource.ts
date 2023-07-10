import { Injectable } from '@nestjs/common';
import { ProductEntity } from './entitiesProduct/products.entity';

export abstract class ProductDataSource {
  public abstract searchId(id: string): Promise<ProductEntity>;

  public abstract create(users: ProductEntity): Promise<ProductEntity>;

  public abstract update(user: ProductEntity): Promise<Record<string, boolean>>;

  public abstract remove(id: string): Promise<Record<string, boolean>>;
}

@Injectable()
export class ProductDataSourceImpl implements ProductDataSource {
  public searchId(id: string): Promise<ProductEntity> {
    console.log('searchId Product DATA SOURCE COM SUCESSO');
    const productEntity = new ProductEntity({
      nameproduct: 'Jardel lacerda',

    });
    return Promise.resolve(productEntity);
  }
  public create(user: ProductEntity): Promise<ProductEntity> {
    const productEntity = new ProductEntity({
      ...user
      });
    console.log('CREATE USER DATA SOURCE COM SUCESSO');
    return Promise.resolve(productEntity);
  }
  public update(user: ProductEntity): Promise<Record<string, boolean>> {
    throw new Error('Method not implemented.');
  }
  public remove(id: string): Promise<Record<string, boolean>> {
    throw new Error('Method not implemented.');
  }
}

    /* 
    userEntity.id = generateUUID();
    userEntity.name = dataDoUser.name;
    userEntity.idCompany = dataDoUser.nameCompany;
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

