import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const { HOST, PORT } = process.env;

  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, HOST);
}

start();
