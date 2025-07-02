import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  LoginDto,
  LoginResponseDto,
  RegisterDto,
  RegisterResponseDto,
} from './auth.dto';
import { Response } from 'express';

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
  @Post('verify-login/:code')
  async verifyLoginCode(@Param('code') code: string) {
    return this.authService.verifyLoginCode(code);
  }
  @Get('activated-account/:code')
  async activatedAccount(@Param('code') code: string, @Res() res: Response) {
    const result = await this.authService.activatedAccount(code);

    return res.redirect('http://localhost:3000/auth/sign-in');
  }
}
