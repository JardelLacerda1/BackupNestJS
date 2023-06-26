import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { UniqueEmail } from '../validator/email.validator';

export class UpdateUserDto {
  @IsNotEmpty({ message: ' O Campo name precisa ser preenchido' })
  @IsOptional()
  readonly name: string;

  @IsNotEmpty({ message: ' O Campo name precisa ser preenchido' })
  @MinLength(3)
  @IsOptional()
  readonly NameCompany: string;

  @IsEmail(undefined, { message: 'Email ou senha inválido' })
  @UniqueEmail({ message: 'Email já cadastrado em nosso sistema' })
  @IsOptional()
  readonly email: string;

  @MinLength(6, { message: 'É necessario no minimo 6 caracteres em sua senha' })
  @IsOptional()
  readonly password: string;
}
