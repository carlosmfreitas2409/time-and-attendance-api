import { ValidationError } from 'class-validator';

interface IValidationError {
  property: string;
  errors: string[];
}

export const formatErrors = (errors: ValidationError[]): IValidationError[] =>
  errors && errors.length
    ? errors.map(({ property, constraints }) => ({
        property,
        errors: Object.values(constraints),
      }))
    : [];
