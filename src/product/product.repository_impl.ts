import { Injectable } from '@nestjs/common';
import { ProductEntity } from './entitiesProduct/products.entity';
import { ProductDataSource } from './product.datasource';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
  constructor(private readonly productDataSource: ProductDataSource) {}

  public searchId(id: string): Promise<ProductEntity> {
    try {
      return this.productDataSource.searchId(id);
    } catch (e) {
      console.error(e);
    }
  }
  public create(product: ProductEntity): Promise<ProductEntity> {
    try {
      return this.productDataSource.create(product);
    } catch (e) {
      console.error(e);
    }
  }
  public update(product: ProductEntity): Promise<Record<string, boolean>> {
    try {
      return this.productDataSource.update(product);
    } catch (e) {
      console.error(e);
    }
  }
  public remove(id: string): Promise<Record<string, boolean>> {
    try {
      return this.productDataSource.remove(id);
    } catch (e) {
      console.error(e);
    }
  }
}
