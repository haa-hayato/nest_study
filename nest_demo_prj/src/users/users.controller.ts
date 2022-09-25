import { Controller, Get, Param } from '@nestjs/common';
import { User } from './models/User'
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    async getUsers(): Promise<User[]> {
        return await this.userService.getUsers();
    }

    @Get('/:id')
    async getUser(@Param('id') userId: number): Promise<User> {
        return await this.userService.getUserById(userId)
    }
}
