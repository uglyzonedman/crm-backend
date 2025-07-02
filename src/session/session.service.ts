import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AddSessionDto } from './session.dto';
import { Prisma } from 'generated/prisma';

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

  async addSession(dto: AddSessionDto, req: any) {
    try {
      const newSession = await this.prisma.sessionUser.create({
        data: {
          expiresAt: dto.expiresAt,
          refreshToken: dto.refreshToken,
          ip: req.ip || '',
          isRevoked: false,
          userAgent: req.headers['user-agent'] || '',
          userId: dto.userId,
        },
      });

      return {
        status: 'success',
        message: 'Сессия успешно создана',
        data: newSession,
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new HttpException(
          'Сессия с таким refreshToken уже существует',
          HttpStatus.CONFLICT,
        );
      }
      throw new HttpException(
        'Ошибка при создании сессии',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
