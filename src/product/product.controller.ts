import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProducDTO } from './dto/createProduct.dto';
import { ProductEntity } from './entitiesProduct/products.entity';
import { UpdateProductDTO } from './dto/updateProduct.dto';
import { ProductRepository } from './product.repository';
import { ProductService } from './product.service';

@Controller('produtos')
export class ProductController {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly productService: ProductService
    ) {}

  @Post()
  async NewCreate(
    @Body() dataProduct: CreateProducDTO) {
    const product = new ProductEntity();

    product.id = randomUUID();
    product.name = dataProduct.name;
    product.userId = dataProduct.userId;
    product.value = dataProduct.value;
    product.amount = dataProduct.amount;
    product.description = dataProduct.description;
    product.category = dataProduct.category;
    // produto.caracteristicas = dadosProduto.caracteristicas;
    // produto.imagens = dadosProduto.imagens;

    const registeredProduct = this.productService.createProduct(product);
    return registeredProduct;
  }
  
  @Get()
  async findAll() {
    return this.productRepository.findAll();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() dataProduct: UpdateProductDTO,
  ) {
    const changedProduct = await this.productRepository.update(
      id,
      dataProduct,
    );

    return {
      mensagem: 'produto atualizado com sucesso',
      product: changedProduct,
    };
  }

  @Delete('/:id')
  async remove(
    @Param('id') id: string) {
    const productRemoved = await this.productRepository.remove(id);

    return {
      mensagem: 'Produto removido com sucesso',
      product: productRemoved,
    };
  }
}
