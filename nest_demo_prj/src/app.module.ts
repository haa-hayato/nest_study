import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MasterModule } from './master/master.module';

@Module({
  imports: [UsersModule, MasterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
