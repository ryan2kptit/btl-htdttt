import { Controller } from "@nestjs/common";
import { Symptom } from "./symptom.entity";
import { SymptomService } from "./symptom.service";

@Controller('symp')
export class SymptomController {
  constructor(private readonly symptomService: SymptomService) {}

  async findAll(): Promise<Symptom[]> {
    return this.symptomService.findAll();
  }

  async create(data): Promise<Symptom> {
    console.log(data);
    return this.symptomService.create(data);
  }
}