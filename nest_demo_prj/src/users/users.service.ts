import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './models/User';

@Injectable()
export class UsersService {
    private userRepository: UsersRepository = new UsersRepository();

    async getUsers(): Promise<User[]> {
        return await this.userRepository.getAll();
    }

    async getUserById(userId: number): Promise<User> {
        return await this.userRepository.getById(userId)
    }
}
