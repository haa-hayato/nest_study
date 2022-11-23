import { ApiProperty } from '@nestjs/swagger';

class User {
  @ApiProperty({ nullable: true })
  id: number | null;

  @ApiProperty({ nullable: true })
  name: string | null;

  @ApiProperty({ nullable: true })
  is_login: boolean | null;

  @ApiProperty()
  occupation: { id: number; name: string } | null;

  @ApiProperty()
  created_at: Date;

  @ApiProperty({ nullable: true })
  deleated_at: Date | null;
}

export class GetUserDetailResponse extends User {}

// export class GetUserListResponse {
//   @ApiProperty({ isArray: true, type: User })
//   userList: User[];
// }
