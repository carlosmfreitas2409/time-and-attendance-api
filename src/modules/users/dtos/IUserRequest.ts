import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

class IUserRequest {
  @IsNotEmpty({ message: 'Informe seu nome.' })
  @IsString({ message: 'Informe um nome válido.' })
  name: string;

  @IsNotEmpty({ message: 'Informe seu e-mail.' })
  @IsEmail({ allow_ip_domain: false }, { message: 'Informe um e-mail válido.' })
  email: string;

  @IsNotEmpty({ message: 'Informe uma senha.' })
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, {
    message:
      'No mínimo 8 caracteres, com no mínimo um número, uma letra maiúscula e uma letra minúscula.',
  })
  password: string;
}

export { IUserRequest };
