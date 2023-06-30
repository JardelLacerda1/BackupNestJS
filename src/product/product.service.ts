import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entitiesProduct/products.entity';
import { Repository } from 'typeorm';
import { ListProductoDTO } from './dto/listProduct.dto.dto';
import { UpdateProductDTO } from './dto/updateProduct.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(productEntity: ProductEntity) {
    await this.productRepository.save(productEntity);
  }

  async listProducts() {
    const savedProducts = await this.productRepository.find();
    const productList = savedProducts.map(
      (product) => new ListProductoDTO(),
    );
    return productList;
  }

  async removeProduct(id: string) {
    await this.productRepository.delete(id);
  }

  async updateProduct(id: string, newData: UpdateProductDTO) {
    const entityName = await this.productRepository.findOneBy({ id });

    Object.assign(entityName, newData);
  }
}
