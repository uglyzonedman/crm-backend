import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('user')
@ApiTags('Пользователи ')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Получить текущего авторизованного пользователя' })
  @ApiResponse({
    status: 200,
    description: 'Информация о пользователе получена',
  })
  @ApiResponse({
    status: 401,
    description: 'Неавторизованный доступ',
  })
  async getMe(@User() user: { userId: string; login: string }) {
    return await this.userService.getMe(user.userId);
  }

  @Get('all')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Получить список всех пользователей' })
  @ApiResponse({
    status: 200,
    description: 'Список пользователей успешно получен',
  })
  @ApiResponse({
    status: 401,
    description: 'Неавторизованный доступ',
  })
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
