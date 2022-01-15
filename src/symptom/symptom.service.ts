import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PrimaryColumnOptions, Repository } from "typeorm";
import { CreateSymptomDto } from "./dto";
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

  create(data: CreateSymptomDto): Promise<Symptom> {
    const symptom  = this.symptomRepository.create(data);
    return this.symptomRepository.save(symptom);
  }

  findByCondition(type: number): Promise<Symptom[]> {
    return this.symptomRepository.find({type: type});
  }

  async handle(data) {
    const { faceSkin, eye, ear, mouth } = data;
    if(faceSkin.length != 0 && eye.length == 0 && ear.length == 0 && mouth.length == 0) {
      faceSkin[0] === ''
    }

  }

}