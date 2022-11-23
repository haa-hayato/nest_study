import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class SuccsessResponse {
  results = 'success';
}

export type ErrorResponse = {
  error: true;
  statusCode: number;
  message: string;
  path: string;
};

export class ParamsDTO {
  @ApiProperty()
  @IsNumberString({}, { message: 'idは数値です' })
  @IsNotEmpty({ message: 'idは必須です' })
  id: string;
}
