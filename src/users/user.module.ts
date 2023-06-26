import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UniqueEmailValidetor } from './validator/email.validator';
import { UserEntity } from './entities/user.entity';
import { UserService } from './users.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    UniqueEmailValidetor
  ],
})
export class UsersModule {}
