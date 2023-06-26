import { Injectable } from '@nestjs/common';
import { ProductEntity } from './entitiesProduct/products.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  findAll() {
    return this.products;
  }

  salva(dadosProduto: ProductEntity) {
    this.products.push(dadosProduto);
    return dadosProduto;
  }

  private searchById(id: string) {
    const possivelProduto = this.products.find((produto) => produto.id === id);

    if (!possivelProduto) {
      throw new Error('Produto não existe');
    }

    return possivelProduto;
  }

  async atualiza(id: string, dadosProduto: Partial<ProductEntity>) {
    const dadosNaoAtualizaveis = ['id', 'usuarioId'];
    const produto = this.searchById(id);
    Object.entries(dadosProduto).forEach(([chave, valor]) => {
      if (dadosNaoAtualizaveis.includes(chave)) {
        return;
      }
      produto[chave] = valor;
    });

    return produto;
  }

  async remove(id: string) {
    const produtoRemovido = this.searchById(id);
    this.products = this.products.filter((produto) => produto.id !== id);
    return produtoRemovido;
  }
}