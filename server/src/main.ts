import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 7777;

const options = {
  // TODO DELETEME
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors(options); // TODO DELETEME
  app.enableCors({
    // TODO DELETEME
    origin: 'localhost:3000',
  });
  await app.listen(PORT);
  console.log('listening on', PORT);
}
bootstrap();
