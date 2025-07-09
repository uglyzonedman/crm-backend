import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'user123', description: 'Логин пользователя' })
  login: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'Электронная почта',
  })
  email: string;

  @ApiProperty({
    example: 'StrongPassword123!',
    description: 'Пароль пользователя',
    minLength: 6,
  })
  password: string;

  @ApiProperty({
    example: 'StrongPassword123!',
    description: 'Повтор пароля для подтверждения',
    minLength: 6,
  })
  repeatPassword: string;

  @ApiProperty({
    example: 'freelancer-id',
    description: 'ID роли (например: admin-id, client-id, freelancer-id)',
  })
  roleId: string;
}

export class LoginDto {
  @ApiProperty({
    example: 'user123 или user@example.com',
    description: 'Логин или email пользователя',
  })
  @IsNotEmpty()
  @IsString()
  identifier: string;

  @ApiProperty({
    example: 'securePassword123',
    description: 'Пароль пользователя',
  })
  password: string;
}

class UserDto {
  @ApiProperty({ example: 'c70945e6-344f-45c9-88b7-8c6b30a86698' })
  id: string;

  @ApiProperty({ example: 'chertami' })
  login: string;

  @ApiProperty({ example: 'chertami@gmail.com' })
  email: string;

  @ApiProperty({ example: '2025-06-22T17:23:54.315Z' })
  createdAt: string;
}

class TokensDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  accessToken: string;

  @ApiProperty({ example: '2025-06-22T18:16:45.389Z' })
  accessTokenExpiresAt: string;

  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  refreshToken: string;

  @ApiProperty({ example: '2025-06-29T17:31:45.389Z' })
  refreshTokenExpiresAt: string;
}

export class LoginResponseDataDto {
  @ApiProperty({ type: UserDto })
  user: UserDto;

  @ApiProperty({ type: TokensDto })
  tokens: TokensDto;
}

export class LoginResponseDto {
  @ApiProperty({ example: 'success' })
  status: string;

  @ApiProperty({ example: 'Успешный вход' })
  message: string;

  @ApiProperty({ type: LoginResponseDataDto })
  data: LoginResponseDataDto;
}

export class RegisterDataDto {
  @ApiProperty({ example: 'c70945e6-344f-45c9-88b7-8c6b30a86698' })
  id: string;

  @ApiProperty({ example: 'chertami@gmail.com' })
  email: string;

  @ApiProperty({ example: 'chertami' })
  login: string;

  @ApiProperty({ example: '2025-06-22T17:23:54.315Z' })
  createdAt: string;
}

export class RegisterResponseDto {
  @ApiProperty({ example: 'success' })
  status: string;

  @ApiProperty({ example: 'Регистрация прошла успешно' })
  message: string;

  @ApiProperty({ type: RegisterDataDto })
  data: RegisterDataDto;
}
