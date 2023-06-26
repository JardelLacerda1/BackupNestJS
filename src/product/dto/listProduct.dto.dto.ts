class ListProductFeatures {
    nome: string;
    descricao: string;
  }
  
  class ListImgProductDTO {
    url: string;
    descricao: string;
  }
  
  export class ListProductoDTO {
    id: string;
    usuarioId: string;
    nome: string;
    valor: number;
    quantidade: number;
    descricao: string;
    categoria: string;
    caracteristicas: ListProductFeatures[];
    imagens: ListImgProductDTO[];
  }