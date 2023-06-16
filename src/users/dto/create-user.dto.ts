import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { UniqueEmail } from '../validator/email-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: ' O Campo name precisa ser preenchido' })
  readonly name: string;

  @IsNotEmpty({ message: ' O Campo name precisa ser preenchido' })
  @MinLength(3)
  readonly NameCompany: string;

  @IsEmail(undefined, { message: 'Email ou senha inválido' })
  @UniqueEmail({ message: 'Email já cadastrado em nosso sistema' })
  readonly email: string;

  @MinLength(6, { message: 'É necessario no minimo 6 caracteres em sua senha' })
  readonly password: string;
}
