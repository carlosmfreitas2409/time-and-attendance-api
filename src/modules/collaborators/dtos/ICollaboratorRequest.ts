import { IsCPF } from 'brazilian-class-validator';
import {
  IsEmail,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsPhoneNumber,
  IsOptional,
  ArrayMinSize,
  ArrayMaxSize,
  MaxLength,
} from 'class-validator';

class ICollaboratorRequest {
  @IsNotEmpty({ message: 'Informe seu nome.' })
  @IsString({ message: 'Informe um nome válido.' })
  @MaxLength(100, { message: 'Número máximo de caracteres atingido.' })
  name: string;

  @IsNotEmpty({ message: 'Informe seu e-mail.' })
  @IsEmail({ allow_ip_domain: false }, { message: 'Informe um e-mail válido.' })
  @MaxLength(100, { message: 'Número máximo de caracteres atingido.' })
  email: string;

  @IsNotEmpty({ message: 'Informe seu CPF.' })
  @IsCPF({ message: 'Informe um CPF válido.' })
  cpf: number;

  @IsOptional()
  @IsPhoneNumber('BR', { message: 'Informe um número de telefone válido.' })
  phone_number: string;

  @IsNotEmpty({ message: 'Informe seus conhecimentos.' })
  @IsNumber({}, { message: 'Informe uma skill válida', each: true })
  @ArrayMinSize(1, { message: 'Informe no mínimo um conhecimento' })
  @ArrayMaxSize(3, { message: 'Informe no máximo três conhecimentos' })
  skills: number[];
}

export { ICollaboratorRequest };
