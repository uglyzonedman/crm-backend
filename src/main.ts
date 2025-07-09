import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser'; // ✅ добавил

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser()); // ✅ добавил

  const config = new DocumentBuilder()
    .setTitle('Сваггер крутого программиста (нет)')
    .setDescription('Дока для людей, которые будут кайфовать')
    .setVersion('1488.322')
    .addBearerAuth()
    .build();

  app.setGlobalPrefix('api');

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
