import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Farmacia')
    .setDescription('Projeto Farmacia')
    .setContact(
      'Fernanda Paoleschi',
      'https://github.com/fernandapaoleschi',
      'fernandapaoleschi1@gmail.com'
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  // Timezone
  process.env.TZ = '-03:00';

  // Validação global
  app.useGlobalPipes(new ValidationPipe());

  // CORS (IMPORTANTE para front separado)
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  });

  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();