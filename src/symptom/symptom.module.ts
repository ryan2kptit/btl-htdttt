import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SymptomController } from './symptom.controller';
import { Symptom } from './symptom.entity';
import { SymptomService } from './symptom.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Symptom])],
  providers: [SymptomService],
  exports: [SymptomService],
  controllers: [SymptomController],
})
export class SymptomModule {}
