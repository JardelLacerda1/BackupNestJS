import { Body, 
    Controller, 
    Delete, 
    Get, 
    Param,
    Patch,
    Post, 
    Res
} from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
constructor(private readonly usersService: UserService){
}
@Get()
  findAll(){
 return this.usersService.findAll();
}
@Get(':id')
findOne(@Param('id') id: string){

    return this.usersService.findOne(id);
}
 @Post()
 create(@Body() body){
     return this.usersService.create(body);
}
 @Patch(':id')
 update(@Param('id') id: string, @Body() body){
    return this.usersService.update(id,body);;
}
@Delete(':id')
remove(@Param('id') id: string){

    return this.usersService.remove(id);
}
}
