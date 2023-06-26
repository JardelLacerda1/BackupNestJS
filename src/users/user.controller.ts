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
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from './dto/createUser.dto';
import { ListUserDTO } from './dto/listUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(
    private userRepository: UserRepository,
    private userSevice: UserService

    ){}

  @Post()
  async create(@Body() dadosDoUser: CreateUserDto) {
    const userEntity = new UserEntity();
    userEntity.email = dadosDoUser.email;
    userEntity.password = dadosDoUser.password;
    userEntity.name = dadosDoUser.name;
    userEntity.id = uuid();

    this.userRepository.create(userEntity);

    return {
      user: new ListUserDTO(userEntity.id, userEntity.name, userEntity.nameCompany, userEntity.email),
      massage: 'Usuario criado com sucesso',
    };
  }

  @Get()
  async listingUsers() {
    const savedUsers = await this.userSevice.listUsers();
    
    return savedUsers;
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateInformation: UpdateUserDto,
  ) {
    const updatedUser = await this.userRepository.update(
      id, updateInformation
      );
    return {
      user: updatedUser,
      message: ' Usuario atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const usersRemove = await this.userRepository.remove(id);
    
    return {
      user: usersRemove,
      message: ' Usuario Removido com sucesso',
    };
    
  }
}
