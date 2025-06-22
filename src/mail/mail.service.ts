import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'majest228@gmail.com',
      pass: 'xoes qdff rogf hfir', // именно App Password от Google
    },
  });

  async sendMail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: 'majest228@gmail.com',
      to,
      subject,
      text,
    };

    return this.transporter.sendMail(mailOptions);
  }
}
