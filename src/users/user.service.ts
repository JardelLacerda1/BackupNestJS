import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ListUserDTO } from "./dto/listUser.dto";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";
import { UpdateUserDto } from "./dto/updateUser.dto";


@Injectable()
export class UserService {
constructor(
@InjectRepository(UserEntity)
private readonly userRepository: Repository<UserEntity>){}


async createUser(userEntity: UserEntity){
    await this.userRepository.save(userEntity);
}

async listUsers(){
    const usersSaved = await this.userRepository.find();
    const ListUsers = usersSaved.map(
        (user) => new ListUserDTO(
            user.id,
            user.name,
            user.email,
            user.nameCompany,
        )
    );
    return ListUsers;
}
async updateUser(id: string, userEntity: UpdateUserDto){
    await this.userRepository.update(id, userEntity);
}
async deleteUser(id:string) {
   await this.userRepository.delete(id);
}
}