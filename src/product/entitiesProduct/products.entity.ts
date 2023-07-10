import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity({ name: '/product' })
  export class ProductEntity {
    @PrimaryGeneratedColumn('rowid')
    id?: string;
  
    @Column({ name: 'nameProduct', nullable: false })
    nameproduct: string;

    @Column({ name: 'valor', nullable: false })
    valor?: string;

    @Column({ name: 'description', nullable: false })
    description?: string;
  
  
    @CreateDateColumn({ name: 'created_at' })
    createdAt?: string;
  
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;
  
    static fromJson(json: Record<string, any>): ProductEntity {
      const product = new ProductEntity({
        ...(json as ProductEntity),
      });
      return product;
    }
    constructor({
      id,
      nameproduct,
      createdAt,
      deletedAt,
    }: {
      id?: string;
      nameproduct: string;
      createdAt?: string;
      deletedAt?: string;
     
    }) {
      Object.assign(this, {
        id,
        nameproduct,
        createdAt,
        deletedAt,
      });
    }
  }
  