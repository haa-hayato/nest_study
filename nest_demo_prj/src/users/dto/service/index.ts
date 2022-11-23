export class UserDTO {
  id: number;
  name: string | null;
  age: number | null;
  is_login: boolean;
  occupation: { id: number; name: string } | null;
  created_at: Date;
  deleated_at: Date | null;
}
