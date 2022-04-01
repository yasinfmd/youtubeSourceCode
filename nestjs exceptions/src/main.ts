import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExcepitonFilter } from './http-excepiton.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExcepitonFilter());
  await app.listen(3000);
}
bootstrap();
