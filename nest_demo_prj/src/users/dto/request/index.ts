import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsNotEmpty,
  IsNumberString,
} from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({ nullable: true })
  @IsString({ message: 'nameは文字です' })
  @IsOptional()
  name: string;

  @ApiProperty({ nullable: true })
  @IsNumber({}, { message: 'ageは数値です' })
  @IsOptional()
  age: number;

  @ApiProperty({ nullable: true })
  @IsBoolean({ message: 'is_loginは数値です' })
  @IsOptional()
  is_login: boolean;

  @ApiProperty({ nullable: true })
  @IsNumber({}, { message: 'occupation_idは数値です' })
  @IsOptional()
  occupation_id: number;
}

export class EditUserQueryDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'idは必須です' })
  @IsNumberString({}, { message: 'idは数値です' })
  id: string;
}

export class EditUserDTO extends CreateUserDTO {}
