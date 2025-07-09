import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SendMailDto } from './mail.dto';

@Controller('mail')
@ApiTags('Почтовый сервис')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  @ApiOperation({ summary: 'Отправить письмо на почту' })
  @ApiResponse({ status: 201, description: 'Письмо успешно отправлено' })
  @ApiResponse({ status: 400, description: 'Ошибка отправки письма' })
  async send(@Body() body: SendMailDto) {
    await this.mailService.sendMail(body.to, body.subject, body.text);
    return { message: 'Письмо отправлено' };
  }
}
