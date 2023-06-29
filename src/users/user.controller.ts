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
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(
    private userRepository: UserRepository,
    private userService: UserService,
  ) {}

  @Post()
  async createUser(
    @Body() dataDoUser: CreateUserDto) {
    const userEntity = new UserEntity();
    userEntity.id = uuid();
    userEntity.name = dataDoUser.name;
    userEntity.nameCompany = dataDoUser.nameCompany;
    userEntity.email = dataDoUser.email;
    userEntity.password = dataDoUser.password;
    
    
    this.userService.createUser(userEntity);

    return {
      user: new ListUserDTO(
        userEntity.id,
        userEntity.name,
        userEntity.nameCompany,
        userEntity.email,
        
      ),
      messagem: 'Usuario criado com sucesso',
    };
  }

  @Get()
  async listingUsers() {
    const savedUsers = await this.userService.listUsers();
  
    return savedUsers;
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() newData: UpdateUserDto,
    ) {
    const updatedUser = await this.userService.updateUser(
     id,
     newData,
     );
    return {
      user: updatedUser,
      message: ' Usuario atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async remove(
    @Param('id') id: string) {
    const usersRemove = await this.userService.deleteUser(id);

    return {
      user: usersRemove,
      message: ' Usuario Removido com sucesso',
    };
  }
}
