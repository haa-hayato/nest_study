import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //バリデーション用記述
  app.useGlobalPipes(new ValidationPipe());

  //swagger用記述
  const config = new DocumentBuilder()
    .setTitle('Nest study API')
    .setDescription('Nest.js学習用')
    .setVersion('1.0')
    .addTag('study')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3002);
}
bootstrap();
