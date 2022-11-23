import {
  Controller,
  Get,
  Param,
  HttpCode,
  Delete,
  Post,
  Body,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { CreateUserDTO, EditUserQueryDTO, EditUserDTO } from './dto/request';
import { UsersService } from './users.service';
import { ParamsDTO, SuccsessResponse } from 'src/shared/types';
import { SUCCESS_RESPONSE } from 'src/shared/constants';
import { GetUserDetailResponse } from './dto/response';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({ summary: 'ユーザ一全取得' })
  @ApiResponse({ status: 200, type: GetUserDetailResponse, isArray: true })
  @HttpCode(200)
  @Get()
  async getUsers(): Promise<GetUserDetailResponse[]> {
    return await this.userService.getUsers();
  }

  @ApiOperation({ summary: 'ユーザーをIdで検索' })
  @ApiResponse({ status: 200, type: GetUserDetailResponse })
  @ApiParam({ name: 'id' })
  @HttpCode(200)
  @Get('/:id')
  async getUser(@Param() { id }: ParamsDTO): Promise<GetUserDetailResponse> {
    return await this.userService.getUserById(Number(id));
  }

  @ApiOperation({ summary: 'ユーザー新規作成' })
  @ApiResponse({ status: 200, type: SuccsessResponse })
  @HttpCode(200)
  @Post('')
  async createUser(
    @Body() { name, age, is_login, occupation_id }: CreateUserDTO,
  ): Promise<SuccsessResponse> {
    await this.userService.createUser(name, age, is_login, occupation_id);
    return SUCCESS_RESPONSE;
  }

  @ApiOperation({ summary: 'ユーザー情報編集' })
  @ApiResponse({ status: 200, type: SuccsessResponse })
  @HttpCode(200)
  @ApiQuery({ name: 'id' })
  @Put('')
  async editUser(
    @Query() { id }: EditUserQueryDTO,
    @Body() { name, age, is_login, occupation_id }: EditUserDTO,
  ): Promise<SuccsessResponse> {
    await this.userService.editUser(
      Number(id),
      name,
      age,
      is_login,
      occupation_id,
    );
    return SUCCESS_RESPONSE;
  }

  @ApiOperation({ summary: 'ユーザー論理削除' })
  @ApiResponse({ status: 200, type: SuccsessResponse })
  @ApiParam({ name: 'id' })
  @HttpCode(200)
  @Delete('/:id')
  async softDeleteUser(@Param() { id }: ParamsDTO): Promise<SuccsessResponse> {
    await this.userService.softDeleteUser(Number(id));
    return SUCCESS_RESPONSE;
  }
}
