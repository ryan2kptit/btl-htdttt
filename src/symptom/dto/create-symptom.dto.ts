import { IsNotEmpty } from 'class-validator';
import { SymptomType } from 'src/common/constants';

export class CreateSymptomDto {
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  type: SymptomType;
}
