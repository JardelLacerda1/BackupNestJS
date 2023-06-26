import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ListUserDTO } from "./dto/listUser.dto";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";


@Injectable()
export class UserService {
constructor(
@InjectRepository(UserEntity)
private readonly userRepository: Repository<UserEntity>){}

async listUsers(){
    const usersSaved =await this.userRepository.find();
    const ListUsers = usersSaved.map(
        (user) => new ListUserDTO(user.id, user.name, user.nameCompany, user.email)
    )
    return ListUsers;
}
}