import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('My API Documentation')
    .setDescription('My API description')
    .setVersion('1.0')
    .addTag('items') // lógica de negocio
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // http://localhost:3000/documentation
  SwaggerModule.setup('documentation', app, document);

  await app.listen(3000);
}
bootstrap();
