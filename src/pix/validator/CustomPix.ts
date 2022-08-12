import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, isEmail } from "class-validator";
import { cpf } from 'cpf-cnpj-validator';

export function IsPixValid(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      propertyName: propertyName,
      target: object.constructor,
      options: validationOptions,
      validator: IsPixConstraint
    })
  }
}

@ValidatorConstraint({ name: 'IsPixValid' })
export class IsPixConstraint implements ValidatorConstraintInterface {
  validate(value: string) {
    return isEmail(value) || cpf.isValid(value);
  }
}
