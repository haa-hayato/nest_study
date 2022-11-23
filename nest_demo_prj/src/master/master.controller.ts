import { Occupation } from './models/occupation';
import { MasterService } from './master.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('master')
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @Get()
  async getOccupations(): Promise<Occupation[]> {
    return await this.masterService.getOccupations();
  }

  @Get('/:id')
  async getOccupation(@Param('id') occupationId: string): Promise<Occupation> {
    return await this.masterService.getOccupationById(Number(occupationId));
  }
}
