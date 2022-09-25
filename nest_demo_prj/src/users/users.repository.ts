import { pgPool } from '..//db';
import { User } from './models/User'

export class UsersRepository {
    async getAll(): Promise<User[]> {
        const { rows } = await pgPool.query(
            `SELECT * FROM users`
        )
        return rows
    }

    async getById(userId: number): Promise<User> {
        const { rows } = await pgPool.query(
            `SELECT * FROM users WHERE users.id = ${userId}`
        )
        return rows[0]
    }
}