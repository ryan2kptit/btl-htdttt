import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Symptom } from './symptom/symptom.entity';
import { SymptomModule } from './symptom/symptom.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: [Symptom],
      host: process.env.DATABASE_HOST || '',
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USERNAME || '',
      password: process.env.DATABASE_PASSWORD || '',
      database: process.env.DATABASE_NAME || '',
      synchronize: true,
    }),
    SymptomModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
