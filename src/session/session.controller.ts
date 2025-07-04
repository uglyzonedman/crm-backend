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

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('add-session')
  async addSession(@Body() dto: AddSessionDto, @Req() req) {
    return this.sessionService.addSession(dto, req);
  }

  @Put('update-session')
  async updateSession(
    @Body('refreshToken') refreshToken: string,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    if (!refreshToken) {
      throw new UnauthorizedException('Нет refresh токена в cookie');
    }

    return this.sessionService.updateSession(refreshToken, req, res);
  }

  @Delete('revoke-sessions/:refreshToken')
  async revokeAllSessionsExceptCurrent(
    @Param('refreshToken') refreshToken: string,
  ) {
    return this.sessionService.revokeAllSessionsExceptCurrent(refreshToken);
  }
}
