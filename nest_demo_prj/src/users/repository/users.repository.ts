import { pgPool } from '../../db';
import { User } from '../models/User';

export class UsersRepository {
  //ユーザー全取得
  async getAll(): Promise<User[]> {
    const { rows } = await pgPool.query(`SELECT * FROM users ORDER BY id`);
    return rows;
  }

  //ユーザーをIDで検索
  async getById(userId: number): Promise<User | null> {
    const { rows } = await pgPool.query(
      `SELECT * FROM users WHERE users.id = ${userId}`,
    );
    if (rows[0] == undefined) {
      return null;
    }
    return rows[0];
  }

  //ユーザー新規作成
  async create(
    name: string | null,
    age: number | null,
    is_login: boolean | null,
    occupation_id: number | null,
  ): Promise<void> {
    await pgPool.query(
      `INSERT INTO users (name, age, is_login, occupation_id) VALUES ('${name}', ${age}, ${is_login}, ${occupation_id})`,
    );
  }

  //ユーザー情報編集
  async edit(
    userId: number,
    name: string | null,
    age: number | null,
    is_login: boolean | null,
    occupation_id: number | null,
  ): Promise<void> {
    await pgPool.query(
      `UPDATE users SET (name, age, is_login, occupation_id) = ('${name}', ${age}, ${is_login}, ${occupation_id}) WHERE users.id = ${userId}`,
    );
  }

  //ユーザー論理削除
  async softDelete(userId: number): Promise<void> {
    await pgPool.query(
      `UPDATE users SET deleated_at = NOW() WHERE users.id = ${userId}`,
    );
  }
}
