import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SendMailDto {
  @ApiProperty({ example: 'user@example.com', description: 'Email получателя' })
  @IsEmail()
  to: string;

  @ApiProperty({ example: 'Добро пожаловать!', description: 'Тема письма' })
  @IsNotEmpty()
  subject: string;

  @ApiProperty({
    example: 'Спасибо за регистрацию.',
    description: 'Текст письма',
  })
  @IsNotEmpty()
  text: string;
}
