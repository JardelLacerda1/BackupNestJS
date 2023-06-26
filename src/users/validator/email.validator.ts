import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmailValidetor implements ValidatorConstraintInterface {
  constructor(private userService: UserRepository) {}
  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const EmailAlreadyExists = this.userService.checkEmailExists(value);
    return !EmailAlreadyExists;
  }
}
export const UniqueEmail = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: Object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: UniqueEmailValidetor,
    });
  };
};
