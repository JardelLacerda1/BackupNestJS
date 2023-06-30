import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserEntity } from './entities/user.entity';
import { UserRepositoryImpl } from './user.repository_impl';
import { UserDataSource, UserDataSourceImpl } from './user.datasource';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    {
      provide: UserRepository,
      useClass: UserRepositoryImpl,
    },
    {
      provide: UserDataSource,
      useClass: UserDataSourceImpl,
    },
  ],
})
export class UsersModule {}
