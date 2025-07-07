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
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.sessionService.updateSession(req, res);
  }

  @Delete('revoke-sessions/:refreshToken')
  async revokeAllSessionsExceptCurrent(
    @Param('refreshToken') refreshToken: string,
  ) {
    return this.sessionService.revokeAllSessionsExceptCurrent(refreshToken);
  }
}
