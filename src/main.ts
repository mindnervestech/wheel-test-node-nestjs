import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(ApplicationModule, appOptions);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  // Swagger configuation option
  const options = new DocumentBuilder()
    .setTitle('NestJS Example App')
    .setDescription('The API description')
    .setVersion('1.0')
    .setBasePath('api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  // Swagger route
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();
