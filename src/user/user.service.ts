import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { generatedCode } from 'src/utils/generatedCode';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async getMe(id: string) {
    if (!id) {
      throw new BadRequestException({
        status: 'error',
        message: 'ID пользователя не указан',
      });
    }

    const currentUser = await this.prisma.user.findUnique({
      where: { id },
      omit: {
        password: true,
      },
    });

    if (!currentUser) {
      throw new NotFoundException({
        status: 'error',
        message: 'Пользователь не найден',
      });
    }

    return {
      status: 'success',
      message: 'Успешно',
      data: currentUser,
    };
  }
  async recoveryPasswordSendMessage(email: string) {
    const findUser = await this.prisma.user.findFirst({
      where: { email: email },
    });

    if (!findUser) {
      throw new BadRequestException('Пользователь с таким email не найден');
    }

    const code: string = generatedCode(6);
    const expiresAt = new Date(Date.now() + 2 * 60 * 1000);

    await this.prisma.recoveryPasswordCode.create({
      data: {
        userId: findUser.id,
        recoveryCode: code,
        isUsed: false,
        expiresAt: expiresAt,
      },
    });

    return code;
  }
}
