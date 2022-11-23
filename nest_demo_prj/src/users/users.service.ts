import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repository/users.repository';
import { User } from './models/User';
import { MasterService } from 'src/master/master.service';
import { UserDTO } from './dto/service';
@Injectable()
export class UsersService {
  private userRepository: UsersRepository = new UsersRepository();
  constructor(private masterService: MasterService) {} //マスターサービスを使う記述

  //ユーザー全取得
  async getUsers(): Promise<UserDTO[]> {
    let exinstingUsers: User[];
    let userList: UserDTO[] = [];
    try {
      exinstingUsers = await this.userRepository.getAll();
      for (const {
        id,
        name,
        age,
        is_login,
        occupation_id,
        created_at,
        deleated_at,
      } of exinstingUsers) {
        let occupation: { id: number; name: string } | null = null;
        if (occupation_id) {
          let occupationName: string;
          occupationName = (
            await this.masterService.getOccupationById(occupation_id)
          ).name;
          occupation = { id: occupation_id, name: occupationName };
        }
        userList.push({
          id: id,
          name: name,
          age: age,
          is_login: is_login,
          occupation: occupation,
          created_at: created_at,
          deleated_at: deleated_at,
        });
      }
    } catch (e: any) {
      throw e;
    }
    return userList;
  }

  //ユーザーをIDで検索
  async getUserById(userId: number): Promise<UserDTO> {
    let existingUser: User | null;
    let convertedUser: UserDTO;
    try {
      existingUser = await this.userRepository.getById(userId);
      if (existingUser) {
        const {
          id,
          name,
          age,
          is_login,
          occupation_id,
          created_at,
          deleated_at,
        } = existingUser;
        let occupation: { id: number; name: string } | null = null;
        if (occupation_id) {
          const occupationName: string = (
            await this.masterService.getOccupationById(
              existingUser.occupation_id,
            )
          ).name;
          occupation = { id: occupation_id, name: occupationName };
        }
        convertedUser = {
          id: id,
          name: name,
          age: age,
          is_login: is_login,
          occupation: occupation,
          created_at: created_at,
          deleated_at: deleated_at,
        };
      }
    } catch (e: any) {
      throw e;
    }
    if (!existingUser) {
      throw 'ユーザーが存在しません';
    }
    return convertedUser;
  }

  //ユーザー新規作成
  async createUser(
    name: string | null,
    age: number | null,
    is_login: boolean | null,
    occupation_id: number | null,
  ): Promise<void> {
    try {
      await this.userRepository.create(name, age, is_login, occupation_id);
    } catch (e: any) {
      throw e;
    }
  }

  //ユーザー編集
  async editUser(
    userId: number,
    name: string | null,
    age: number | null,
    is_login: boolean | null,
    occupation_id: number | null,
  ): Promise<void> {
    try {
      await this.userRepository.edit(
        userId,
        name,
        age,
        is_login,
        occupation_id,
      );
    } catch (e: any) {
      throw e;
    }
  }

  //ユーザー論理削除
  async softDeleteUser(userId: number): Promise<void> {
    try {
      await this.userRepository.softDelete(userId);
    } catch (e: any) {
      throw e;
    }
  }
}
