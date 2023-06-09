import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UsersModule, 
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
     database: process.env.DB_DATABASE,
     host: process.env.DB_HOST,
     password: process.env.DB_PASSWORD,
     port: Number(process.env.DB_PORT),
     username: process.env.DB_USERNAME,
     entities: [`${__dirname}/../*.entity{.js,.ts}`],
     migrations: [`${__dirname}/migration/{.ts,*.js}'}`],
     migrationsRun: true,


    }) ,
      /*/
      useClass: PostgresConfigService,
      inject:[PostgresConfigService]
      /*/
  ],
})
export class AppModule {}
