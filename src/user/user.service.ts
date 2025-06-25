import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

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
}
