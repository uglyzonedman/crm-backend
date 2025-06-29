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
import { generatedCode } from 'src/utils/generatedCode';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
    private readonly mailService: MailService,
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

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        login: dto.login,
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
        where: {
          OR: [{ email: dto.identifier }, { login: dto.identifier }],
        },
      });

      if (!findUser) {
        throw new BadRequestException({
          status: 'error',
          message: 'Пользователь с таким логином или email не найден',
        });
      }

      const login_code = generatedCode(6);
      const expiresAt = new Date(Date.now() + 2 * 60 * 1000);

      await this.prisma.authCode.create({
        data: {
          code: login_code,
          expiresAt,
          type: 'email',
          isUsed: false,
          userId: findUser.id,
        },
      });

      this.mailService.sendMail(
        findUser.email,
        'Код авторизации',
        `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333;">
      <h2 style="color: #2c3e50;">Код авторизации</h2>
      <p>Здравствуйте!</p>
      <p>Вы запросили код авторизации. Пожалуйста, введите следующий код:</p>
      <div style="font-size: 24px; font-weight: bold; background-color: #ecf0f1; padding: 10px 20px; display: inline-block; border-radius: 5px; margin: 20px 0;">
        ${login_code}
      </div>
      <p style="color: #7f8c8d;">Срок действия кода: 2 минуты.</p>
      <p>Если вы не запрашивали этот код, просто проигнорируйте это письмо.</p>
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />
      <p style="font-size: 12px; color: #aaa;">С уважением, Ваша команда поддержки</p>
    </div>
    `,
      );

      return {
        status: 'success',
        message: 'Код авторизации отправлен на почту',
        data: {
          user: {
            id: findUser.id,
            login: findUser.login,
            email: findUser.email,
            createdAt: findUser.createdAt,
          },
          code: {
            expiresAt: expiresAt.toISOString(),
          },
        },
      };
    } catch (error) {
      console.error('Ошибка при отправке кода авторизации:', error);

      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new BadRequestException({
        status: 'error',
        message:
          'Не удалось отправить код авторизации. Повторите попытку позже.',
      });
    }

    // return {
    //   status: 'success',
    //   message: 'Успешный вход',
    //   data: {
    //     user: {
    //       id: findUser.id,
    //       login: findUser.login,
    //       email: findUser.email,
    //       createdAt: findUser.createdAt,
    //     },
    //     tokens: {
    //       accessToken,
    //       accessTokenExpiresAt: new Date(
    //         now + accessTokenExpiresInMs,
    //       ).toISOString(),
    //       refreshToken,
    //       refreshTokenExpiresAt: new Date(
    //         now + refreshTokenExpiresInMs,
    //       ).toISOString(),
    //     },
    //   },
    // };
    // } catch (error) {
    //   if (error instanceof BadRequestException) {
    //     throw error;
    //   }

    //   console.error('Login error:', error);

    //   throw new InternalServerErrorException({
    //     status: 'error',
    //     message: 'Произошла внутренняя ошибка при входе',
    //   });
    // }
    // }
  }

  async verifyLoginCode(code: string) {
    try {
      const authCode = await this.prisma.authCode.findFirst({
        where: { code },
      });

      if (!authCode) {
        throw new BadRequestException('Код не найден');
      }

      await this.prisma.authCode.update({
        where: { id: authCode.id },
        data: { isUsed: true },
      });

      const user = await this.prisma.user.findFirst({
        where: { id: authCode.userId },
      });

      if (!user) {
        throw new BadRequestException('Пользователь не найден');
      }

      const payload = { sub: user.id, login: user.login };
      const now = Date.now();
      const accessTokenExpiresInMs = 45 * 60 * 1000; // 45 минут
      const refreshTokenExpiresInMs = 7 * 24 * 60 * 60 * 1000; // 7 дней

      const accessToken = this.jwtService.sign(payload, { expiresIn: '45m' });
      const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

      return {
        status: 'success',
        message: 'Успешный вход',
        data: {
          user: {
            id: user.id,
            login: user.login,
            email: user.email,
            createdAt: user.createdAt,
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

      console.error('Ошибка при проверке кода:', error);
      throw new InternalServerErrorException(
        'Произошла ошибка при проверке кода',
      );
    }
  }
}
