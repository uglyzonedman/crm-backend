import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async send(@Body() body: { to: string; subject: string; text: string }) {
    await this.mailService.sendMail(body.to, body.subject, body.text);
    return { message: 'Письмо отправлено' };
  }
}
