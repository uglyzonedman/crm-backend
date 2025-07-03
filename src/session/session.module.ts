import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/strategies/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '45m' },
    }),
  ],
  controllers: [SessionController],
  providers: [SessionService, PrismaService, JwtStrategy],
})
export class SessionModule {}
