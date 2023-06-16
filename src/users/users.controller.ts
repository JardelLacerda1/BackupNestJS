import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from './dto/Create-user.dto';
import { ListUserDTO } from './dto/ListUser.dto';
import { UpdateUserDto } from './dto/Update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  async create(@Body() dadosDoUser: CreateUserDto) {
    const usersEntity = new UserEntity();
    usersEntity.email = dadosDoUser.email;
    usersEntity.password = dadosDoUser.password;
    usersEntity.name = dadosDoUser.name;
    usersEntity.id = uuid();
    this.usersService.create(usersEntity);

    return {
      user: new ListUserDTO(usersEntity.id, usersEntity.name),
      massage: 'Usuario criado com sucesso',
    };
  }

  @Get()
  async listingUsers() {
    const savedUsers = await this.usersService.findAll();
    const usersList = savedUsers.map(
      (user) => new ListUserDTO(user.id, user.name),
    );
    return usersList;
  }
  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateInformation: UpdateUserDto,
  ) {
    const updatedUser = await this.usersService.update(id, updateInformation);

    return {
      user: updatedUser,
      message: ' Usuario atualizado com sucesso',
    };
  }
}
