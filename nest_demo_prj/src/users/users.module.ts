import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MasterService } from 'src/master/master.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, MasterService], //マスターサービスも使う記述をしている
})
export class UsersModule {}
