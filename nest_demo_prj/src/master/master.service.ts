import { Injectable } from '@nestjs/common';
import { OccupationRepository } from './repository/occupation.repository';
import { Occupation } from './models/occupation';

@Injectable()
export class MasterService {
  private occupationRepository: OccupationRepository =
    new OccupationRepository();

  async getOccupations(): Promise<Occupation[]> {
    return await this.occupationRepository.getAll();
  }

  async getOccupationById(occupationId): Promise<Occupation | null> {
    return await this.occupationRepository.getById(occupationId);
  }
}
