import { Module } from "@nestjs/common";
import { UsersModule } from "src/users/user.module";
import { ProductRepository } from "./product.repository";
import { ProductController } from "./product.controller";


@Module({
  imports: [UsersModule],
  controllers: [ProductController],
  providers: [ProductRepository],
})
export class ProductModule {}
