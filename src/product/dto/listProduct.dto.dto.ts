class ListProductFeatures {
    name: string;
    description: string;
  }
  
  class ListImgProductDTO {
    url: string;
    description: string;
  }
  
  export class ListProductoDTO {
    id: string;
    userId: string;
    name: string;
    value: number;
    amount: number;
    description: string;
    category: string;
    characteristics: ListProductFeatures[];
    imagens: ListImgProductDTO[];
  }