import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserEntity } from './entities/user.entity';

@Controller('/users')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post()
  async create(@Body() userData: Record<string, any>) {
    const user: UserEntity = UserEntity.fromJson(userData);
    return this.userRepository.create(user);
  }

  @Put('/:id')
  async update(@Body() userData: Record<string, any>) {
    const user: UserEntity = UserEntity.fromJson(userData);
    return this.userRepository.update(user);
  }

  @Get('/:id')
  async searchId(@Param('id') id: string) {
    console.log('entry searchId');
    const response = await this.userRepository.searchId(id);
    console.log(response);
    return response;
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return this.userRepository.remove(id);
  }
 

}
