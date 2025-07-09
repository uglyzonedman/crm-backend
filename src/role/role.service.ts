import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async getAllRoles() {
    try {
      const roles = await this.prisma.role.findMany();

      return {
        message: 'Все роли получены',
        status: 'success',
        data: roles,
      };
    } catch (error) {
      console.error('Ошибка при получении ролей:', error);

      return {
        message: 'Не удалось получить роли',
        status: 'error',
        data: null,
      };
    }
  }

  async getAllWithoutAdmin() {
    try {
      const roles = await this.prisma.role.findMany({
        where: {
          name: {
            notIn: ['admin'],
          },
        },
      });

      return {
        message: 'Роли без admin получены',
        status: 'success',
        data: roles,
      };
    } catch (error) {
      console.error('Ошибка при получении ролей без admin:', error);

      return {
        message: 'Не удалось получить роли',
        status: 'error',
        data: null,
      };
    }
  }
}
