import { Body, 
    Controller, 
    Delete, 
    Get, 
    Param,
    Patch,
    Post, 
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
constructor(private readonly usersService: UserService){
}
@Get()
  findAll(){
 return this.usersService;
}
@Get(':id')
findOne(@Param('id')id: string){
    return this.usersService;
}
 @Post()
 create(@Body() createUserDto: CreateUserDto){
     return this.usersService.create(createUserDto);
}
 @Patch(':id')
 update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto ){
    return this.usersService.update;
}
@Delete(':id')
remove(@Param('id') id: string){

    return this.usersService.remove(id);
}
}
