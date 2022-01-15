import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { CreateSymptomDto } from "./dto";
import { Symptom } from "./symptom.entity";
import { SymptomService } from "./symptom.service";

@Controller('symptoms')
export class SymptomController {
  constructor(private readonly symptomService: SymptomService) {}

  @Get()
  async findAll(): Promise<Symptom[]> {
    return this.symptomService.findAll();
  }

  @Get(':type')
  async findByCondition(@Param('type') type: number): Promise<Symptom[]> {
    console.log(type);
    return this.symptomService.findByCondition(type);
  }

  @Post()
  async create(@Body() data: CreateSymptomDto): Promise<Symptom> {
    console.log(data);
    return this.symptomService.create(data);
  }

  @Post('/handle')
  async handle(@Body() data){
    console.log(data);
    return this.symptomService.handle(data);
  }
}