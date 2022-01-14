import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Symptom } from "./symptom.entity";


@Injectable()
export class SymptomService {
  constructor(
    @InjectRepository(Symptom)
    private readonly symptomRepository: Repository<Symptom>,
  ) {}

  async findAll(): Promise<Symptom[]> {
    return this.symptomRepository.find();
  }

  create(data): Promise<Symptom> {
    const symptom  = this.symptomRepository.create();
    return this.symptomRepository.save(symptom);
  }
}