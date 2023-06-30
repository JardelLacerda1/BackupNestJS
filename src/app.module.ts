import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UsersModule, 
    //ProductModule,
    ConfigModule.forRoot({
      isGlobal:true
    }),
  /*   TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject:[PostgresConfigService]
    }) */
  ],
})
export class AppModule {}
