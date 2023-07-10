import { Module } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { ProductController } from "./product.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./entitiesProduct/products.entity";
import { ProductRepositoryImpl } from "./product.repository_impl";
import { ProductDataSource, ProductDataSourceImpl } from "./product.datasource";


@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [
    {
      provide: ProductRepository,
      useClass: ProductRepositoryImpl,
    },
    {
      provide: ProductDataSource,
      useClass: ProductDataSourceImpl,
    },
  ],
})
export class ProductModule {}
