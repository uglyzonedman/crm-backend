import {
  Body,
  Controller,
  Delete,
  Ip,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { AddSessionDto } from './session.dto';
import { Request } from 'express';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('add-session')
  async addSession(@Body() dto: AddSessionDto, @Req() req) {
    return this.sessionService.addSession(dto, req);
  }

  @Put('update-session')
  async updateSession(@Body('refreshToken') refreshToken: string, @Req() req) {
    return this.sessionService.updateSession(refreshToken, req);
  }

  @Delete('revoke-sessions/:refreshToken')
  async revokeAllSessionsExceptCurrent(
    @Param('refreshToken') refreshToken: string,
  ) {
    return this.sessionService.revokeAllSessionsExceptCurrent(refreshToken);
  }
}
