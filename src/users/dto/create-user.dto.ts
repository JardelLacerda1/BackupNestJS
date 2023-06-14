import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    readonly name: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    readonly password: string;

    @IsString()
    readonly idCompany: string;

    @IsString({each:true})
    readonly tags: string[];
    
    @IsString()
    readonly description: string;
}
