import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'majest228@gmail.com',
      pass: 'xoes qdff rogf hfir',
    },
  });

  async sendMail(to: string, subject: string, text: string) {
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #4CAF50;">📬 У вас новое сообщение</h2>
        <p><strong>Тема:</strong> ${subject}</p>
        <p>${text}</p>
        <hr />
        <p style="font-size: 12px; color: #999;">Это письмо отправлено автоматически. Пожалуйста, не отвечайте на него.</p>
      </div>
    `;

    await this.transporter.sendMail({
      from: 'majest228@gmail.com',
      to,
      subject,
      text,
      html: htmlContent,
    });
  }
}
