import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  LoginDto,
  LoginResponseDto,
  RegisterDto,
  RegisterResponseDto,
} from './auth.dto';
import { Request, Response } from 'express';

@ApiTags('Авторизационный сервис')
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
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
    @Req() req: Request,
  ) {
    return this.authService.login(dto, res, req);
  }
  // @Post('verify-login/:code')
  // async verifyLoginCode(
  //   @Param('code') code: string,
  //   @Res({ passthrough: true }) res: Response,
  //   @Req() req: Request,
  // ) {
  //   return this.authService.verifyLoginCode(code, res, req);
  // }
  @Get('activated-account/:code')
  async activatedAccount(@Param('code') code: string, @Res() res: Response) {
    const result = await this.authService.activatedAccount(code);

    return res.redirect('http://localhost:3000/auth/sign-in');
  }
}
