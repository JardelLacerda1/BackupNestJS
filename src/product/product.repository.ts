import { Injectable } from '@nestjs/common';
import { ProductEntity } from './entitiesProduct/products.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  findAll() {
    return this.products;
  }

  save(dataProduct: ProductEntity) {
    this.products.push(dataProduct);
    return dataProduct;
  }

  private searchById(id: string) {
    const possibleProduct = this.products.find((product) => product.id === id);

    if (!possibleProduct) {
      throw new Error('Produto não existe');
    }

    return possibleProduct;
  }

  async update(id: string, dataProduct: Partial<ProductEntity>) {
    const dataNotUpdatable = ['id', 'userId'];
    const product = this.searchById(id);
    Object.entries(dataProduct).forEach(([key, value]) => {
      if (dataNotUpdatable.includes(key)) {
        return;
      }
      product[key] = value;
    });

    return product;
  }

  async remove(id: string) {
    const removedProduct = this.searchById(id);
    this.products = this.products.filter((product) => product.id !== id);
    return removedProduct;
  }
}
