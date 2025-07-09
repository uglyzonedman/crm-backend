import { ApiProperty } from '@nestjs/swagger';

export class AddSessionDto {
  @ApiProperty({
    example: 'some-refresh-token',
    description: 'Refresh-токен для сессии',
  })
  refreshToken: string;

  @ApiProperty({
    example: '2025-08-01T12:00:00.000Z',
    description: 'Дата и время истечения токена',
    type: Date,
    format: 'date-time',
  })
  expiresAt: Date;

  @ApiProperty({
    example: 'uuid-пользователя',
    description: 'ID пользователя',
  })
  userId: string;
}
