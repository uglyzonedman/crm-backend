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

  async getAllUsers() {
    const all = await this.prisma.user.findMany({});

    return {
      status: 'success',
      message: 'Успешно',
      data: all,
    };
  }
}
