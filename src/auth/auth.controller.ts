import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  LoginDto,
  LoginResponseDto,
  RegisterDto,
  RegisterResponseDto,
} from './auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Регистрация пользователя' })
  @ApiResponse({
    status: 201,
    description: 'Пользователь зарегистрирован',
    type: RegisterResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Ошибка регистрации' })
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Вход в систему' })
  @ApiResponse({
    status: 200,
    description: 'Успешный вход',
    type: LoginResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Неверные данные' })
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
