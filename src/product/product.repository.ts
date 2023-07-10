import { Injectable } from '@nestjs/common';
import { ProductEntity } from './entitiesProduct/products.entity';

@Injectable()
export abstract class ProductRepository {
  public abstract searchId(id: string): Promise<ProductEntity>;

  public abstract create(products: ProductEntity): Promise<ProductEntity>;

  public abstract update(product: ProductEntity): Promise<Record<string, boolean>>;

  public abstract remove(id: string): Promise<Record<string, boolean>>;
}