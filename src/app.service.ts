import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Cron } from '@nestjs/schedule';
import { subMinutes } from 'date-fns';
@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getHello() {
    return this.prisma.user.findMany();
  }

  @Cron('*/1 * * * *')
  async handleExpiredCodes() {
    const expirationTime = subMinutes(new Date(), 2);
    const result = await this.prisma.authCode.deleteMany({
      where: {
        createdAt: { lt: expirationTime },
        isUsed: false,
      },
    });
    console.log(`Удалено ${result.count} просроченных кодов`);
  }
}
