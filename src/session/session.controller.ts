import {
  Body,
  Controller,
  Delete,
  Ip,
  Param,
  Post,
  Put,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { AddSessionDto } from './session.dto';
import { Request, Response } from 'express';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('session')
@ApiTags('Сессии')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('add-session')
  @ApiOperation({ summary: 'Добавить новую сессию пользователя' })
  @ApiResponse({ status: 201, description: 'Сессия успешно добавлена' })
  @ApiResponse({ status: 400, description: 'Ошибка добавления сессии' })
  async addSession(@Body() dto: AddSessionDto, @Req() req) {
    return this.sessionService.addSession(dto, req);
  }

  @Put('update-session')
  @ApiOperation({ summary: 'Обновить сессию пользователя (refresh токен)' })
  @ApiResponse({ status: 200, description: 'Сессия успешно обновлена' })
  @ApiResponse({
    status: 401,
    description: 'Неверный токен или сессия просрочена',
  })
  @ApiResponse({
    status: 500,
    description: 'Ошибка сервера при обновлении сессии',
  })
  async updateSession(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.sessionService.updateSession(req, res);
  }

  @Delete('revoke-sessions/:refreshToken')
  @ApiOperation({
    summary: 'Отозвать все сессии пользователя, кроме текущей',
  })
  @ApiParam({
    name: 'refreshToken',
    type: String,
    description: 'Refresh токен текущей сессии, которую не нужно отзывать',
    example: 'some-refresh-token-value',
  })
  @ApiResponse({
    status: 200,
    description: 'Сессии успешно отозваны',
  })
  @ApiResponse({
    status: 404,
    description: 'Сессия с таким токеном не найдена',
  })
  @ApiResponse({
    status: 500,
    description: 'Ошибка сервера при отзыве сессий',
  })
  async revokeAllSessionsExceptCurrent(
    @Param('refreshToken') refreshToken: string,
  ) {
    return this.sessionService.revokeAllSessionsExceptCurrent(refreshToken);
  }
}
