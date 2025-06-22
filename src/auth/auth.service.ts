import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LoginDto, RegisterDto } from './auth.dto';
import { hashPassword } from 'src/utils/hashPassword';
import { checkPassword } from 'src/utils/checkPassword';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        login: dto.login,
      },
    });

    if (existingUser) {
      throw new BadRequestException({
        status: 'error',
        message: 'Пользователь с таким логином уже существует',
      });
    }

    const hashedPassword = await hashPassword(dto.password);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        login: dto.login,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        login: true,
        createdAt: true,
      },
    });

    return {
      status: 'success',
      message: 'Регистрация прошла успешно',
      data: user,
    };
  }

  async login(dto: LoginDto) {
    try {
      const findUser = await this.prisma.user.findFirst({
        where: { login: dto.login },
      });

      if (!findUser) {
        throw new BadRequestException({
          status: 'error',
          message: 'Пользователь с таким логином не найден',
        });
      }

      const isPasswordValid = await checkPassword(
        dto.password,
        findUser.password,
      );
      console.log('isPasswordValid', isPasswordValid);
      if (!isPasswordValid) {
        throw new BadRequestException({
          status: 'error',
          message: 'Неверный пароль',
        });
      }

      const payload = { sub: findUser.id, login: findUser.login };
      const now = Date.now();

      const accessTokenExpiresInMs = 45 * 60 * 1000;
      const refreshTokenExpiresInMs = 7 * 24 * 60 * 60 * 1000;

      const accessToken = this.jwtService.sign(payload, { expiresIn: '45m' });
      const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

      return {
        status: 'success',
        message: 'Успешный вход',
        data: {
          user: {
            id: findUser.id,
            login: findUser.login,
            email: findUser.email,
            createdAt: findUser.createdAt,
          },
          tokens: {
            accessToken,
            accessTokenExpiresAt: new Date(
              now + accessTokenExpiresInMs,
            ).toISOString(),
            refreshToken,
            refreshTokenExpiresAt: new Date(
              now + refreshTokenExpiresInMs,
            ).toISOString(),
          },
        },
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      console.error('Login error:', error);

      throw new InternalServerErrorException({
        status: 'error',
        message: 'Произошла внутренняя ошибка при входе',
      });
    }
  }
}
