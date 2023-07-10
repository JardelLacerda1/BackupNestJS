import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductEntity } from './entitiesProduct/products.entity';
import { ProductRepository } from './product.repository';

@Controller('/product')
export class ProductController {
  constructor(private readonly productRepository: ProductRepository) {}

  @Post()
  async create(@Body() productData: Record<string, any>) {
    const product: ProductEntity = ProductEntity.fromJson(productData);
    return this.productRepository.create(product);
  }

  @Put('/:id')
  async update(@Body() productData: Record<string, any>) {
    const product: ProductEntity = ProductEntity.fromJson(productData);
    return this.productRepository.update(product);
  }

  @Get('/:id')
  async searchId(@Param('id') id: string) {
    console.log('entry product searchId');
    const response = await this.productRepository.searchId(id);
    console.log(response);
    return response;
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return this.productRepository.remove(id);
  }
}
  
