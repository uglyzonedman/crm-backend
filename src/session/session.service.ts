import {
  BadGatewayException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AddSessionDto } from './session.dto';
import { Prisma } from 'generated/prisma';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SessionService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

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

  async updateSession(refreshToken: string, req: any) {
    const currentRefreshToken = await this.prisma.sessionUser.findFirst({
      where: {
        refreshToken: refreshToken,
      },
      include: {
        user: true,
      },
    });

    if (!currentRefreshToken) throw new BadGatewayException('..');

    await this.prisma.sessionUser.update({
      where: {
        id: currentRefreshToken.id,
      },
      data: {
        isRevoked: true,
      },
    });

    const payload = {
      sub: currentRefreshToken.user.id,
      login: currentRefreshToken.user.login,
    };
    const now = Date.now();
    const newAccessTokenExpiresInMs = 45 * 60 * 1000;
    const newRefreshTokenExpiresInMs = 7 * 24 * 60 * 60 * 1000;

    const newAccessToken = this.jwtService.sign(payload, { expiresIn: '45m' });
    const newRefreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    const newSession = await this.prisma.sessionUser.create({
      data: {
        refreshToken: newRefreshToken,
        expiresAt: new Date(now + newRefreshTokenExpiresInMs).toISOString(),
        ip: req.ip || '',
        userAgent: req.headers['user-agent'] || '',
        isRevoked: false,
        userId: currentRefreshToken.user.id,
      },
    });

    const response = {
      ...newSession,
      accessToken: newAccessToken,
      accessTokenExpiresInMs: newAccessTokenExpiresInMs,
      refreshToken: newRefreshToken,
      refreshTokenExpiresInMs: newRefreshTokenExpiresInMs,
    };

    return {
      status: 'success',
      message: 'done',
      data: response,
    };
  }

  async revokeAllSessionsExceptCurrent(refreshToken: string) {
    const session = await this.prisma.sessionUser.findFirst({
      where: { refreshToken },
    });

    if (!session) throw new NotFoundException('Сессия не найдена');

    await this.prisma.sessionUser.updateMany({
      where: {
        userId: session.userId,
        id: { not: session.id },
        isRevoked: false,
      },
      data: {
        isRevoked: true,
      },
    });

    return {
      status: 'success',
      message: 'Все сессии, кроме текущей, отключены',
    };
  }
}
