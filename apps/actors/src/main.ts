import { NestFactory } from '@nestjs/core';
import { ActorsModule } from './actors.module';

async function bootstrap() {
  const app = await NestFactory.create(ActorsModule);
  await app.listen(3104);
}
bootstrap();
