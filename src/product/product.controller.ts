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
import { CriaProdutoDTO } from './dto/createProduct.dto';
import { ProductEntity } from './entitiesProduct/products.entity';
import { UpdateProductDTO } from './dto/updateProduct.dto';
import { ProductRepository } from './product.repository';

@Controller('/produtos')
export class ProductController {
  constructor(private readonly productService: ProductRepository) {}
  @Post()
  async criaNovo(@Body() dadosProduto: CriaProdutoDTO) {
    const produto = new ProductEntity();

    produto.id = randomUUID();
    produto.nome = dadosProduto.nome;
    produto.usuarioId = dadosProduto.usuarioId;
    produto.valor = dadosProduto.valor;
    produto.quantidade = dadosProduto.quantidade;
    produto.descricao = dadosProduto.descricao;
    produto.categoria = dadosProduto.categoria;
    // produto.caracteristicas = dadosProduto.caracteristicas;
    // produto.imagens = dadosProduto.imagens;
    const produtoCadastrado = this.productService.salva(produto);
    return produtoCadastrado;
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Put('/:id')
  async atualiza(
    @Param('id') id: string,
    @Body() dadosProduto: UpdateProductDTO,
  ) {
    const produtoAlterado = await this.productService.atualiza(
      id,
      dadosProduto,
    );

    return {
      mensagem: 'produto atualizado com sucesso',
      produto: produtoAlterado,
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const produtoRemovido = await this.productService.remove(id);

    return {
      mensagem: 'produto removido com sucesso',
      produto: produtoRemovido,
    };
  }
}