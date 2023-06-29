import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MinLength,
} from 'class-validator';
import { UniqueEmail } from '../validator/email.validator';

export class UpdateUserDto {
  @IsNotEmpty({ message: ' O Campo name precisa ser preenchido' })
  @IsOptional()
  readonly name: string;

  @IsNotEmpty({ message: ' O Campo empresa precisa ser preenchido' })
  @MinLength(3, { message: 'É necessario no minimo 3 caracteres no campo empresa' })
  @IsOptional()
  readonly nameCompany: string;

  @IsEmail(undefined, { message: 'Email ou senha inválido' })
  @UniqueEmail({ message: 'Email já cadastrado em nosso sistema' })
  @IsOptional()
  readonly email: string;
  
  @IsNotEmpty()
  @MinLength(6, { message: 'É necessario no minimo 6 caracteres em sua senha' })
  
  readonly password: string;
}
