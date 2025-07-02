import { Body, Controller, Ip, Post, Req } from '@nestjs/common';
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
}
