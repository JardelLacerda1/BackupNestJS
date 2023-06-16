import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { UniqueEmailValidetor } from './validator/email.validator';

@Module({
  controllers: [UsersController],
  providers: [UserService, UniqueEmailValidetor],
})
export class UsersModule {}
