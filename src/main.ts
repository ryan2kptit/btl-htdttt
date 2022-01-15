import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // const validatorOptions: ValidatorOptions = {            // custom when restrics
  //   skipMissingProperties: true,
  //   whitelist: true,
  //   forbidNonWhitelisted: true,
  //   forbidUnknownValues: true,
  // };

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.enableCors();
  app.use(cookieParser());
  //setupSwagger(app);
  //app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(3001);
}
bootstrap();


