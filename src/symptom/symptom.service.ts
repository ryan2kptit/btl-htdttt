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
      if(faceSkin[0] === 'vàng da mặt và mắt (bệnh vàng da)' || faceSkin) return 'binh thuong' 
    }

    if(faceSkin.length == 0 && eye.length != 0 && ear.length == 0 && mouth.length == 0) {
      if(eye[0] === 'Sưng phù') return 'binh thuong' 
    }

    if(faceSkin.length == 0 && eye.length == 0 && ear.length != 0 && mouth.length == 0) {
      if(ear[0] === 'vàng da mặt và mắt (bệnh vàng da)') return 'binh thuong' 
    }

    if(faceSkin.length != 0 && eye.length == 0 && ear.length == 0 && mouth.length != 0) {
      if(mouth[0] === 'Sưng phù') return 'binh thuong' 
    }

    if(faceSkin.length == 0 && eye.length == 0 && ear.length == 0 && mouth.length == 0) {
       return 'binh thuong' 
    }

    if(eye[0] == 'Mắt đỏ' && faceSkin[0] === 'Xuất hiện các nốt ban đỏ li ti' && ear[0] === 'Sưng phù') return 'bi benh'

    if(eye[0] == 'Mắt đỏ') {
      faceSkin.forEach(element => {
        if(element === 'Có các mảng tối hoặc nhiều màu sắc khác nhau, có đường kính hơn 6 mm') return 'bi benh'
      });
    }

    if(eye[0] == 'Mắt đỏ' && faceSkin[0] == 'vàng da mặt và mắt (bệnh vàng da)' && mouth[0] === 'Ho') return 'bi benh'

    if(eye[0] == 'Mắt đỏ' && mouth[0] === 'Ho') return 'bi benh'

    if(ear[0] == 'Sưng phù' && mouth[0] === 'Ho') return 'bi benh'

    if(eye[0] == 'Xuất hiện những u thịt nhỏ trên những vùng da như vùng mặt, mí mắt' && mouth[0] === 'Ho') return 'bi benh'

    if(eye[0] == 'Mắt đỏ' && mouth[0] === 'Ở môi:môi sưng, thương tổn đỏ da bong vảy') return 'bi benh'

    return 'mac benh nghiem trong'
  }

}